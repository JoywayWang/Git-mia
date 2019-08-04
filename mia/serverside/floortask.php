<?php
    $con = mysqli_connect("127.0.0.1","root","","mia");
    $data = file_get_contents("floor.json");
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
        $title = $arr[$i]["title"];
        $src = $arr[$i]["src"];
        $text = $arr[$i]["text"];
        $list = Json_encodeOne($arr[$i]["list"]);
        $sql = "INSERT INTO  `mia`.`floor` (`flid` ,`title` ,`text` ,`src` ,`list`)VALUES ('$i',  '$title',  '$text',  '$src',  '$list')";
        mysqli_query($con,$sql);
    };
?>