<?php
include("connect.php");
header("Connect-type=text/html; charset=utf8");

$slcdb=mysqli_select_db($db_link,"serachengine");
if (!$slcdb) {
	die("資料庫連接失敗");
}


$type=$_POST["typeselect"];
$value=$_POST["valueselect"];
$technology=$_POST["technologyselect"];

$sql_query="SELECT * FROM `example` WHERE `keyword1`='".$type."' and `keyword2`='".$value."' and `keyword3`='".$technology."'";

$result=mysqli_query($db_link,$sql_query);
$an=array();

while ($fetch_an=mysqli_fetch_row($result)) {
	array_push($an, $fetch_an);
}



echo json_encode($an,JSON_UNESCAPED_UNICODE);

/*
else{

	echo "成功";
}*/


?>