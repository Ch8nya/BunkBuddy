document.getElementById('input-excel').addEventListener('change', function(e) {
    var reader = new FileReader();
    reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
            type: 'binary'
        });

        var sheetName = workbook.SheetNames[0];
        var sheet = workbook.Sheets[sheetName];
        var range = XLSX.utils.decode_range(sheet['!ref']); // get the range of cells

        var output = [];
        for(var R = range.s.r; R <= range.e.r; ++R) {
            var cell_address = {c:0, r:R}; // Change column index (0 in this case) as needed
            var cell_ref = XLSX.utils.encode_cell(cell_address);
            var cell = sheet[cell_ref];
            output.push(cell ? cell.v : "EMPTY CELL");
        }
        document.getElementById('output').innerHTML = output.join("<br>");
    };
    reader.readAsBinaryString(e.target.files[0]);
});
