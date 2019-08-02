<?php
    $con = mysqli_content("127.0.0.1","root","","mia");
    $sql = "SELECT * FROM  `tab` ";
    $result = mysqli_query($con,$sql);
    $data = mysqli_fetch_all($result, MYSQLI_NUM);
    echo json_encode($data,true);
?>