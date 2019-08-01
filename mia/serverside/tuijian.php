<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    $data = file_get_contents("tuijian.json");
    $arr = json_decode($data,true);
    for($i = 0;$i<count($arr);$i++){
        $name = $arr[$i]["name"];
        $src = $arr[$i]["src"];
        $jieshao = $arr[$i]["jieshao"];
        $mprice = $arr[$i]["mprice"];
        $sprice = $arr[$i]["sprice"];
        $buynum = $arr[$i]["buynum"];

        $sql = "INSERT INTO `mia`.`tuijian` (`tjid`, `name`, `jieshao`, `src`, `mprice`, `sprice`, `buynum`) VALUES ('$i', '$name', '$jieshao', '$src', '$mprice', '$sprice', '$buynum')";
        
        mysqli_query($con,$sql);
    };
    
?>