<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include 'config.php';

    $sql = "Select Username, Email FROM user";

    $sel = mysqli_query($con, $sql);
    $data = array();
//TelNo, Mobile, Email
    while ($row = mysqli_fetch_array($sel)) {
    $data[] = array("Username"=>$row['Username'],"Email"=>$row['Email']);
    }
    echo json_encode($data);
?>