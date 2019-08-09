<?php
$con = mysqli_connect("127.0.0.1", "root", "", "mia");

/* 获取id和active */
$cid = $_REQUEST["cid"];
$isActive = $_REQUEST["isactive"];
$num = $_REQUEST["num"];
/* 编写sql语句 */
$sql = "UPDATE cart SET isActive=$isActive WHERE cid='$cid'";
mysqli_query($con,$sql);
$sqll = "UPDATE cart SET num=$num WHERE cid='$cid'";
mysqli_query($con,$sqll);
echo "y";
?>