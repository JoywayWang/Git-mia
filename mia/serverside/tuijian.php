<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    $data = file_get_contents("tuijian.json");
    $arr = json_decode($data,true);
    function Json_encodeOne($array)
    {
        if(version_compare(PHP_VERSION,'5.4.0','<')){
            $str = json_encode($array);
            $str = preg_replace_callback("#\\\u([0-9a-f]{4})#i",function($matchs){
                 return iconv('UCS-2BE', 'UTF-8', pack('H4', $matchs[1]));
            },$str);
            return $str;
        }else{
            return json_encode($array, JSON_UNESCAPED_UNICODE);
        }
    }
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