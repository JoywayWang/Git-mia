<?php
    // $con = mysqli_connect("127.0.0.1","root","","mia");
    // $data = file_get_contents("selectlist.json");
    // $arr = json_decode($data,true);
    // function Json_encodeOne($array)
    // {
    //     if(version_compare(PHP_VERSION,'5.4.0','<')){
    //         $str = json_encode($array);
    //         $str = preg_replace_callback("#\\\u([0-9a-f]{4})#i",function($matchs){
    //              return iconv('UCS-2BE', 'UTF-8', pack('H4', $matchs[1]));
    //         },$str);
    //         return $str;
    //     }else{
    //         return json_encode($array, JSON_UNESCAPED_UNICODE);
    //     }
    // }
    // for($i = 0;$i<count($arr);$i++){
    //     $text = Json_encodeOne($arr[$i]);
    //     $sql = "INSERT INTO `mia`.`selectlist` (`seid`, `setext`) VALUES ('$i', '$text')";
    //     mysqli_query($con,$sql);
    // };
    // ----
    // $data = file_get_contents("selectlist.json");
    // $arr = json_decode($data,true);
 
    // for($i = 0;$i<count($arr);$i++){
    //     $text = json_encode($arr[$i]);
    //     $sql = "INSERT INTO `mia`.`selectlist` (`seid`, `setext`) VALUES ('$i', '$text')";

    //     echo $sql . PHP_EOL .  PHP_EOL;
    // };
    // ----
    $con = mysqli_connect("127.0.0.1","root","","mia");

    $data = file_get_contents("selectlist.json");
    $arr = json_decode($data,true);
    
    for($i = 0;$i<count($arr);$i++){
        $text = addslashes(json_encode($arr[$i]));
        $sql = "INSERT INTO `selectlist` (`seid`, `setext`) VALUES ('$i', '$text')";

        if($con->query($sql)){
         echo "succeed!" . PHP_EOL;
        }else{
         echo "failure: " . PHP_EOL . mysqli_error($con); 
         //echo $text . PHP_EOL;
        }
    };
    
?>