<?php
include ("connect.php");
header("Connect-type=text/html ;charset=utf-8");
$slcdb=mysqli_select_db($db_link,"408422688");
if (!$slcdb){die("資料庫連結失敗");};
$nowdata=$_POST["nowdata"];

$sql_query="INSERT INTO `record`( `Year`, `Month`, `Team`, `Home`, `Opp`, `Inngs`, `PA`, `H`, `HR`, `RBI`, `BB`, `SO`, `AVG`, `OBP`, `SLG`, `OPS`, `BOP`, `POS`, `kmeans_cluster`, `kmeans_pep`, `knn_ci`, `knn_pep`, `ca_pep`) VALUES ('".$nowdata[0]."','".$nowdata[1]."','".$nowdata[2]."','".$nowdata[3]."','".$nowdata[4]."','".$nowdata[5]."','".$nowdata[6]."','".$nowdata[7]."','".$nowdata[8]."','".$nowdata[9]."','".$nowdata[10]."','".$nowdata[11]."','".$nowdata[12]."','".$nowdata[13]."','".$nowdata[14]."','".$nowdata[15]."','".$nowdata[16]."','".$nowdata[17]."','".$nowdata[18]."','".$nowdata[19]."','".$nowdata[20]."','".$nowdata[21]."','".$nowdata[22]."')";


$result=mysqli_query($db_link,$sql_query);
$sql_lastone="SELECT `id` FROM `record` order by `id` desc LIMIT 0,1";
$lastonequery=mysqli_query($db_link,$sql_lastone);
$row = mysqli_fetch_array($lastonequery, MYSQLI_ASSOC);

if ($result) {

	    echo $row["id"];	

} 

else {
	    echo $sql_query;
}


/*if($result){
	echo "success";
}

else {
	echo "false";
}*/

?>
