window.onload=function(){
	document.getElementById("agetext").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("incometext").value="";
	document.getElementById("mortgageselect").value="";
	document.getElementById("finalanswer").innerHTML="";
}

function confirm(){

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value>30099.3) {

			document.getElementById("finalanswer").innerHTML="YES";
		}

	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="YES"){

				document.getElementById("finalanswer").innerHTML="NO";

			}			
		}
	}


	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="NO"){

					document.getElementById("finalanswer").innerHTML="NO";

				}
			}			
		}
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="RURAL"){

						document.getElementById("finalanswer").innerHTML="YES";

					}

				}
			}			
		}
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="SUBURBAN"){

						document.getElementById("finalanswer").innerHTML="NO";

					}

				}
			}			
		}
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="TOWN"){

						if(document.getElementById("agetext").value<=34){

							document.getElementById("finalanswer").innerHTML="NO";

						}

					}

				}
			}			
		}
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="TOWN"){

						if(document.getElementById("agetext").value>34){

							if(document.getElementById("agetext").value<=45){

								document.getElementById("finalanswer").innerHTML="YES";

							}

						}

					}

				}
			}			
		}
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="TOWN"){

						if(document.getElementById("agetext").value>34){

							if(document.getElementById("agetext").value>45){

								document.getElementById("finalanswer").innerHTML="NO";

							}

						}

					}

				}
			}			
		}
	}

	
	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="INNER_CITY"){

						if(document.getElementById("incometext").value<=13106.6){	

								document.getElementById("finalanswer").innerHTML="NO";

						}

					}

				}

			}
		}			
	}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="INNER_CITY"){

						if(document.getElementById("incometext").value>13106.6){
							
							if(document.getElementById("mortgageselect").value=="YES"){

								document.getElementById("finalanswer").innerHTML="YES";
 
							   }

								

							}

						}

					}

				}
			}			
		}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="INNER_CITY"){

						if(document.getElementById("incometext").value>13106.6){
							
							if(document.getElementById("mortgageselect").value=="YES"){

								if(document.getElementById("incometext").value<=18923){

									document.getElementById("finalanswer").innerHTML="YES";
								}

 
							   }

								

							}

						}

					}

				}
			}			
		}

	if (document.getElementById("childrenselect").value=="YES") {

		if (document.getElementById("incometext").value<=30099.3) {

			if(document.getElementById("carselect").value=="NO"){

				if(document.getElementById("marriedselect").value=="YES"){

					if(document.getElementById("regionselect").value=="INNER_CITY"){

						if(document.getElementById("incometext").value>13106.6){
							
							if(document.getElementById("mortgageselect").value=="YES"){

								if(document.getElementById("incometext").value>18923){

									document.getElementById("finalanswer").innerHTML="NO";
								}

 
							   }

								

							}

						}

					}

				}
			}			
		}

		
	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="NO") {

			if (document.getElementById("mortgageselect").value=="NO"){

				document.getElementById("finalanswer").innerHTML="YES";
			}

		}

	}


	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="NO") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("agetext").value>39){

					document.getElementById("finalanswer").innerHTML="NO";

				}
				
			}

		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="NO") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("agetext").value<=39){

					if (document.getElementById("agetext").value>28){

						 document.getElementById("finalanswer").innerHTML="YES";

					}

				}
				
			}

		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="NO") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("agetext").value<=39){

					if (document.getElementById("agetext").value<=28){

						 document.getElementById("finalanswer").innerHTML="NO";

					}

				}
				
			}

		}

	}
	
	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("regionselect").value=="INNER_CITY"){
					
					if (document.getElementById("incometext").value<=39547.8){
						 
						 document.getElementById("finalanswer").innerHTML="YES";

					}

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("regionselect").value=="INNER_CITY"){
					
					if (document.getElementById("incometext").value>39547.8){
						 
						 document.getElementById("finalanswer").innerHTML="NO";

					}

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("regionselect").value=="RURAL"){
							 
						 document.getElementById("finalanswer").innerHTML="NO";

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("regionselect").value=="TOWN"){
							 
						 document.getElementById("finalanswer").innerHTML="NO";

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="YES"){

				if (document.getElementById("regionselect").value=="SUBURBAN"){
							 
						 document.getElementById("finalanswer").innerHTML="NO";

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="YES"){
							 
						 document.getElementById("finalanswer").innerHTML="NO";

				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="NO"){

					if (document.getElementById("incometext").value>28241.7){

						 document.getElementById("finalanswer").innerHTML="NO";

					}
							 
				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="NO"){

					if (document.getElementById("incometext").value<=28241.7){

						if (document.getElementById("agetext").value>42){
                            
                            document.getElementById("finalanswer").innerHTML="YES";
						}

						    
					}
							 
				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="NO"){

					if (document.getElementById("incometext").value<=28241.7){

						if (document.getElementById("agetext").value<=42)

							if (document.getElementById("agetext").value>28){

								document.getElementById("finalanswer").innerHTML="NO";

							}

						    
					}
							 
				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="NO"){

					if (document.getElementById("incometext").value<=28241.7){

						if (document.getElementById("agetext").value<=42)

							if (document.getElementById("agetext").value<=28){

								if (document.getElementById("incometext").value<=15538.8) {

									 document.getElementById("finalanswer").innerHTML="NO";
								}
							}

					}
							 
				}

			}
				
		}

	}

	if (document.getElementById("childrenselect").value=="NO") {

		if (document.getElementById("marriedselect").value=="YES") {

			if (document.getElementById("mortgageselect").value=="NO"){

				if (document.getElementById("carselect").value=="NO"){

					if (document.getElementById("incometext").value<=28241.7){

						if (document.getElementById("agetext").value<=42){

							if (document.getElementById("agetext").value<=28){

								if (document.getElementById("incometext").value>15538.8) {

									 document.getElementById("finalanswer").innerHTML="YES";
								}
							}
						}	

					}
							 
				}

			}
				
		}

	}

	$.ajax({
	type:"POST",
	url:"php/saverecord.php",
	data:{

		"agetext":document.getElementById("agetext").value,
		"sexselect":document.getElementById("sexselect").value,
		"regionselect":document.getElementById("regionselect").value,
		"marriedselect":document.getElementById("marriedselect").value,
		"childrenselect":document.getElementById("childrenselect").value,
		"carselect":document.getElementById("carselect").value,
		"incometext":document.getElementById("incometext").value,
		"mortgageselect":document.getElementById("mortgageselect").value,
		"finalanswer":document.getElementById("finalanswer").innerHTML,

	},

	success:function (data) {
		
		/*if(data!="1"){
			alert(data); 
		}*/
		
		alert("第"+data+"筆資料記錄成功");


	},

	error:function(){

		alert("發生錯誤 狀態:"+jqXHR.readyState+"    "+jqXHR.status);
	},

})


	

 
    document.getElementById("agetext").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("incometext").value="";
	document.getElementById("mortgageselect").value="";
	
}

