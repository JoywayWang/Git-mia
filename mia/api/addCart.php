<?php
$con = mysqli_connect("127.0.0.1", "root", "", "mia");
$gid = $_REQUEST["gid"];
$price = $_REQUEST["price"];
$num =$_REQUEST["num"];
$src = $_REQUEST["src"];
$title = $_REQUEST["title"];
$op = $_REQUEST["op"];
$n = $num;
/* 分两种情况 */
/* 001-第一次添加该商品  插入数据 */
$sql = "SELECT * FROM cart WHERE gid = '$gid'";
$result = mysqli_query($con,$sql);
$row = mysqli_num_rows($result);

if($row == 0)
{ 
   $insetSql = "INSERT INTO `mia`.`cart` (`cid`, `gid`, `num`, `price`, `isActive`, `src`, `title`,`op`) VALUES (NULL, '$gid', '$num','$price', 1, '$src', '$title','$op')";
   mysqli_query($con,$insetSql);

}elseif($row == 1){
   /* 002-购物车中已经存在该商品  更新数据 */
   $data = mysqli_fetch_all($result, MYSQLI_ASSOC);
   $num = $data[0]["num"] + $n;

   /* 更新 */
   $updateSql = "UPDATE cart SET num='$num' WHERE gid=' $gid'";
   mysqli_query($con, $updateSql);
}


$totalCount = "SELECT * FROM  cart";
$result = mysqli_query($con, $totalCount);
$row = mysqli_num_rows($result);
echo '{"totalRow":'.$row.'}';
?>