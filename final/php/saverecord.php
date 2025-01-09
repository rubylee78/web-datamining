<?php
include("connect.php");
header("Connnect-type:text/html; charset=utf-8");
$slcbd=mysqli_select_db($db_link,"408422688");
if(!$slcbd) die("資料庫選擇失敗");

$Year=$_POST["yaerselect"];
$Month=$_POST["monthselect"];	
$Team=$_POST["teamselect"];
$Home=$_POST["homeselect"];
$Opp=$_POST["oppselect"];
$Inngs=$_POST["Inngsselect"];
$PA=$_POST["PA"];
$H=$_POST["H"];
$HR=$_POST["HR"];
$RBI=$_POST["RBI"];
$BB=$_POST["BB"];
$SO=$_POST["SO"];
$AVG=$_POST["AVG"];	
$OBP=$_POST["OBP"];
$SLG=$_POST["SLG"];
$OPS=$_POST["OPS"];
$BOP=$_POST["BOPselect"];
$POS=$_POST["POS"];
$WL=$_POST["finalanswer"];


$sql_query="INSERT INTO `recorddes`(`Year`, `Month`, `Team`, `Home`, `Opp`, `Inngs`, `PA`, `H`, `HR`, `RBI`, `BB`, `SO`, `AVG`, `OBP`, `SLG`, `OPS`, `BOP`, `POS`, `WL`) VALUES ('".$Year."','".$Month."','".$Team."','".$Home."','".$Opp."','".$Inngs."',".$PA.",".$H.",".$HR.",".$RBI.",".$BB.",".$SO.",".$AVG.",".$OBP.",".$SLG.",".$OPS.",'".$BOP."','".$POS."','".$WL."')";


$sql_lastone="SELECT `id` FROM `recorddes` order by `id` desc LIMIT 0,1";
$lastonequery=mysqli_query($db_link,$sql_lastone);
$result = mysqli_query($db_link, $sql_query);
$row = mysqli_fetch_array($lastonequery, MYSQLI_ASSOC);

if ($result) {
	    $last_id = mysqli_insert_id($db_link);  // 获取最新插入的 id
	    echo $last_id; 
} else {
	    echo $sql_query;
}
		

?>