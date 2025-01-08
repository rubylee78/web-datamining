<?php
include("connect.php");
header("Connnect-type:text/html; charset=utf-8");
$slcbd=mysqli_select_db($db_link,"decisiontree");
if(!$slcbd) die("資料庫選擇失敗");

$age=$_POST["agetext"];
$sex=$_POST["sexselect"];
$region=$_POST["regionselect"];
$income=$_POST["incometext"];	
$married=$_POST["marriedselect"];
$children=$_POST["childrenselect"];
$car=$_POST["carselect"];
$mortgage=$_POST["mortgageselect"];
$predictedpep=$_POST["finalanswer"];


$sql_query="INSERT INTO `record`( `age`, `sex`, `region`, `income`, `married`, `children`, `car`, `mortgage`, `predicted pep`) VALUES (".$age.",'".$sex."','".$region."',".$income.",'".$married."','".$children."','".$car."','".$mortgage."','".$predictedpep."')";


$sql_lastone="SELECT `id` FROM `record` order by `id` desc LIMIT 0,1";
$lastonequery=mysqli_query($db_link,$sql_lastone);
$result=mysqli_query($db_link,$sql_query);
$row=mysqli_fetch_array($lastonequery,MYSQLI_ASSOC);


if($result){
	
	$last_id = mysqli_insert_id($db_link);  // 获取最新插入的 id
    echo $last_id; 
}
else {
	echo $sql_query;
}

?>