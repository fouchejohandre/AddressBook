<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $ContactId = $_GET['ContactId'];

    $sql = "CALL sp_DeleteContact($ContactId)";
    
    $servername = "localhost:3301";
    $username = "root";
    $password = "";
    $dbname = "address_book";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $conn->error;
    }

    $conn->close();
?>

