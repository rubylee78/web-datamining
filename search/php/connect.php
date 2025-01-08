<?php
$db_host="localhost";
$db_user_name="root";
$db_password="";
$db_link=mysqli_connect($db_host,$db_user_name,$db_password);
if (!$db_link) {
	die("connect failed");
}

mysqli_query($db_link,"SET NAMES 'utf8' ");


?>