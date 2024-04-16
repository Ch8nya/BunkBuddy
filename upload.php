<?php
if ($_FILES["pdf_file"]["error"] == UPLOAD_ERR_OK) {
    $temp_name = $_FILES["pdf_file"]["tmp_name"];
    $file_name = $_FILES["pdf_file"]["name"];
    move_uploaded_file($temp_name, "uploads/$file_name");
    
    // Perform OCR using a library like Tesseract OCR
    $command = "tesseract uploads/$file_name stdout";
    $output = shell_exec($command);
    
    // Display the OCR output
    echo "<pre>$output</pre>";
} else {
    echo "Error uploading the file.";
}
?>
