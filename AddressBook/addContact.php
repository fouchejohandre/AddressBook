<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    $FirstName = $_GET['FirstName'];
    $LastName = $_GET['LastName'];
    $WorkTel = $_GET['WorkTel'];
    $HomeTel = $_GET['HomeTel'];
    $Mobile = $_GET['Mobile'];
    $Fax = $_GET['Fax'];
    $HomeEmail = $_GET['HomeEmail'];
    $WorkEmail = $_GET['WorkEmail'];
    $CompanyName = $_GET['CompanyName'];
    $CompanyPosition = $_GET['CompanyPosition'];
    $HomeAddressNr = $_GET['HomeAddressNr'];
    $HomeAddressStreet = $_GET['HomeAddressStreet'];
    $HomeAddressSuburb = $_GET['HomeAddressSuburb'];
    $HomeAddressCity = $_GET['HomeAddressCity'];
    $HomeAddressPostalCode = $_GET['HomeAddressPostalCode'];
    $HomeAddressAdditional = $_GET['HomeAddressAdditional'];
    $ImageUrl = $_GET['ImageUrl'];
    $UserId = $_GET['UserId'];

    $sql = "CALL sp_AddContact(
        '$FirstName',
        '$LastName',
        '$WorkTel',
        '$HomeTel',
        '$Mobile',
        '$Fax',
        '$HomeEmail',
        '$WorkEmail',
        '$CompanyName',
        '$CompanyPosition',
        '$HomeAddressNr',
        '$HomeAddressStreet',
        '$HomeAddressSuburb',
        '$HomeAddressCity',
        '$HomeAddressPostalCode',
        '$HomeAddressAdditional',
        '$ImageUrl',
        '$UserId'
    )";
    
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