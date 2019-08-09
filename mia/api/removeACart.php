<?php
$con = mysqli_connect("127.0.0.1", "root", "", "mia");
$sql = "DELETE  FROM `mia`.`cart`";
mysqli_query($con, $sql);
?>