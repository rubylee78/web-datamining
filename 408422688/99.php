<?php
	
for($a=2;$a<9;$a++){
	for ($b=9;$b>=1;$b--){
		
		
		if ($b==9) {
			echo $a."*".$b."=". $a*$b."   " ;
		}
		
		else{

			if ($b%2!=0 and $b>1) {
				continue;
			}

			else{

				echo $a."*".$b."=". $a*$b."   " ;
				
			}

		}		
	
		
		
	}
		echo "<br>";
}	



?>
