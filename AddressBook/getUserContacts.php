<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    include 'config.php';
    
    $userId = $_GET['userId'];

    $sql = "CALL sp_GetUserContacts('$userId')";

    $sel = mysqli_query($con, $sql);
    $data = array();
//TelNo, Mobile, Email
    while ($row = mysqli_fetch_array($sel)) {
    $data[] = array(
        "ContactId"=>$row['ContactId'],
        "FirstName"=>$row['FirstName'],
        "LastName"=>$row['LastName'],
        "WorkTel"=>$row['WorkTel'],
        "HomeTel"=>$row['HomeTel'],
        "Mobile"=>$row['Mobile'],
        "Fax"=>$row['Fax'],
        "HomeEmail"=>$row['HomeEmail'],
        "WorkEmail"=>$row['WorkEmail'],
        "CompanyName"=>$row['CompanyName'],
        "CompanyPosition"=>$row['CompanyPosition'],
        "HomeAddressNr"=>$row['HomeAddressNr'],
        "HomeAddressStreet"=>$row['HomeAddressStreet'],
        "HomeAddressSuburb"=>$row['HomeAddressSuburb'],
        "HomeAddressCity"=>$row['HomeAddressCity'],
        "HomeAddressPostalCode"=>$row['HomeAddressPostalCode'],
        "HomeAddressAdditional"=>$row['HomeAddressAdditional'],
        "ImageUrl"=>$row['ImageUrl'],
        "UserId"=>$row['UserId']);
    }
    echo json_encode($data);
?>

