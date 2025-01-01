<?php
// 定义两个数组
$array1 = ["台北市中正區", "新北市新莊區", "新竹市東區","台中市西區", "高雄市苓雅區"];
$array2 = [100, 242, 300,403, 805];

// 使用两个 foreach 循环遍历两个数组
foreach ($array1 as $key => $value) {
    // 获取对应的数组2中的值
    $code = $array2[$key];
    echo $value . " 郵遞區號為 " . $code . "<br>";
}
?>
