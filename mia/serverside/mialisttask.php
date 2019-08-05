<?php
# 先连接数据库
$con = mysqli_connect("127.0.0.1","root","","mia");
# 读取JSON文件的内容
$json = file_get_contents("good7.json");
# 把JSON数据转换为数组
$data = json_decode($json,true);
# 把数据注入到数据中
for($i = 0;$i < count($data);$i++)
{
  $title = $data[$i]["title"];
  $src = $data[$i]["src"];
  $sale_price = $data[$i]["sale_price"];
  $original_price = $data[$i]["original_price"];
  $active_type = $data[$i]["active_type"];
  $active_text = $data[$i]["active_text"];
  $sql = "INSERT INTO `mia`.`good7` (`gid`, `title`, `src`, `original_price`, `sale_price`, `active_type`, `active_text`) VALUES ('$i', '$title', '$src', '$original_price', '$sale_price', '$active_type', '$active_text')";
  mysqli_query($con,$sql);
}

?>