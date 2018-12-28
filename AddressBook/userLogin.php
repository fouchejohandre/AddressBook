<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include 'config.php';
    
    $username = $_GET['username'];
    $password = $_GET['password'];

    $sql = "CALL sp_GetUser('$username', '$password')";

    $sel = mysqli_query($con, $sql);
    $data = array();
//TelNo, Mobile, Email
    while ($row = mysqli_fetch_array($sel)) {
    $data[] = array("fname"=>$row['FirstName'],"lname"=>$row['LastName'],"userId"=>$row['UserID'],"tel"=>$row['TelNo'],"mobile"=>$row['Mobile'],"email"=>$row['Email']);
    }
    echo json_encode($data);
?>