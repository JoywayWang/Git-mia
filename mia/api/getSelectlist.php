<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    // $sql = "SELECT * FROM  `tab` ";
    // $result = mysqli_query($con,$sql);
    // $data = mysqli_fetch_all($result, MYSQLI_NUM);
    // echo json_encode($data,true);

    $sql=" select * from selectlist "; 
     $result=$con->query($sql); 
     //得到数组 
     $row = $result->fetch_all(MYSQLI_ASSOC); 
    //释放查询集 
    $result->close(); 
    //打印到前台 
    echo json_encode($row,true) ; 
    //关闭数据库 
    $con->close(); 

?>