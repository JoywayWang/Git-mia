<?php
$con = mysqli_connect("127.0.0.1","root","","mia");
$usn = $_REQUEST["usn"];
$psw = $_REQUEST["psw"];
$pho = $_REQUEST["pho"];

$sql = "INSERT INTO  `user` (
`usn` ,
`psw` ,
`pho`
)
VALUES (
'$usn',  '$psw',  $pho
)";

$result = mysqli_query($con, $sql);

// #bool(false)  | bool(true)
// var_dump($result);

/* 返回JSON数据给客户端 */
/* 规范：{"status":"success","msg":"注册成功","data":""} */
$data = array("status"=>"", "msg"=>"", "data"=>"");
if($result)
{
  $data["status"] = "success";
  $data["msg"] = "恭喜你，注册成功！";
}else{
  $data["status"] = "error";
  $data["msg"] = "抱歉，用户名或者手机号码已经被注册了！";
}
echo json_encode($data,true);
?>