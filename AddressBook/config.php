<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    $host = "localhost:3301";
    $user = "root";
    $password = "";
    $dbname = "address_book"; 

    $con = mysqli_connect($host, $user, $password,$dbname);
    // Check connection
    if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
    }
?>

