<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $FirstName = $_GET['FirstName'];
    $LastName = $_GET['LastName'];
    $TelNo = $_GET['TelNo'];
    $Mobile = $_GET['Mobile'];
    $Email = $_GET['Email'];
    $Username = $_GET['Username'];
    $Password = $_GET['Password'];

    $sql = "CALL sp_AddUser(
        '$FirstName',
        '$LastName',
        '$TelNo',
        '$Mobile',
        '$Email',
        '$Username',
        '$Password')";
    
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