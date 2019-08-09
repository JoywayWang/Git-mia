<?php
$con = mysqli_connect("127.0.0.1", "root", "", "mia");
$cid = $_REQUEST["cid"];
$sql = "DELETE FROM `mia`.`cart` WHERE `cart`.`cid` = ${cid}";
mysqli_query($con, $sql);
?>