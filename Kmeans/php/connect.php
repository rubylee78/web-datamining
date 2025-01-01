<?php
$db_host="localhost";
$db_username="root";
$db_password="";
$db_link=mysqli_connect($db_host,$db_username,$db_password);

if(!$db_link){
	die("資料庫連結失敗");
}
mysqli_query($db_link,"SET NAMES 'utf8' ");

?>