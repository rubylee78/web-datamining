<?php

$array=array("機殼","主機板","處理器","記憶體","顯示卡","固態硬碟","傳統硬碟","螢幕","電源供應器","鍵盤","滑鼠","喇叭","隨身碟","行動電源","讀卡機");

	$productNumber = 1;

foreach ($array as $a) {
    // Format product number based on its value
    if ($productNumber <10) {
        $formattedIndex = sprintf("00%d", $productNumber); // Format as 00x for numbers 1-10
    } else {
        $formattedIndex = sprintf("0%d", $productNumber);  // Format as 0xx for numbers 11+
    }
    
    echo $a . "的編號是 " . $formattedIndex . "<br>";
    
    // Increment the product number for the next iteration
    $productNumber++;
}
	                                             

?>
