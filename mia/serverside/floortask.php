<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    $data = file_get_contents("floor.json");
    $arr = json_decode($data,true);
    for($i = 0;$i<count($arr);$i++){
        $title = $arr[$i]["title"];
        $src = $arr[$i]["src"];
        $text = $arr[$i]["text"];
        $list = json_encode($arr[$i]["list"]);

        $sql = "INSERT INTO  `mia`.`floor` (`flid` ,`title` ,`text` ,`src` ,`list`)VALUES ('$i',  '$title',  '$text',  '$src',  '$list')";
        
        mysqli_query($con,$sql);
    };
    
?>