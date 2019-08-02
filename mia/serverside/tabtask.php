<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    $data = file_get_contents("tab.json");
    $arr = json_decode($data,true);
    for($i = 0;$i<count($arr);$i++){
        $title = $arr[$i]["title"];
        $left =  json_encode($arr[$i]["left"]);
        $text = json_encode($arr[$i]["text"]);
        $right = json_encode($arr[$i]["right"]);

        $sql = "INSERT INTO  `mia`.`tab` (`tabid` ,`title` ,`text` ,`left` ,`right`)VALUES ('$i',  '$title',  '$text',  '$left',  '$right')";
        
        mysqli_query($con,$sql);
    };
    
?>