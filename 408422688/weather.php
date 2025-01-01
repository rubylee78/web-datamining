<?php

$a = $_POST["items"]; // 去掉多餘空格

Switch($a){

	case "晴天":
		echo "天氣真好";
		break;

	case "陰天":
		echo "涼爽的天氣";
		break;

	case "雨天":
		echo "要帶傘出門";
		break;

	default:
		echo "記得看一下氣象預報";
		break;

}


?>