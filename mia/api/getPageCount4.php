<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1", "root", "", "mia");

# 查询数据库中商品的总数量(103)
$sql = "SELECT * FROM good4";
$result = mysqli_query($con, $sql);
$ListCount = mysqli_num_rows($result);

# 计算页码值(总共有多少页)
$count = 20;
$pageCount = ceil($ListCount / $count);

# JSON数据返回
$data = $pageCount;
echo json_encode($data, true);
?>