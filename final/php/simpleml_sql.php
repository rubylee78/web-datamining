<?php
include("connect.php");
header("Connect-type=text/html; charset=utf-8");

$slcdb=mysqli_select_db($db_link,"408422688");

if(!$slcdb){
	die("資料庫連結失敗");
}

$questTarget=$_POST["targettable"];
$sql_query="SELECT * FROM ".$questTarget;
$result=mysqli_query($db_link,$sql_query);


$an=array();
while ($fetch_an=mysqli_fetch_row($result)) {

	array_push($an, $fetch_an);
}

echo json_encode($an);

?>