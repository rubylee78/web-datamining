<?php
include("connect.php");
header("Connect-type:text/html; charset=utf-8");
$slcdb=mysqli_select_db($db_link,"questiondatabase");
$questType=$_POST["question_type"];
$questNum=$_POST["question_num"];
$sql_query="SELECT * FROM `$questType` WHERE id =".$questNum;
$result=mysqli_query($db_link,$sql_query);
$an=array();
$an=$result->fetch_row();
echo json_encode($an);

?>