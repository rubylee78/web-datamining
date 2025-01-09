window.onload=function(){
	document.getElementById("teamselect").value="";
	document.getElementById("homeselect").value="";
	document.getElementById("yaerselect").value="";
	document.getElementById("monthselect").value="";
	document.getElementById("oppselect").value="";
	document.getElementById("PA").value="";
	document.getElementById("H").value="";
	document.getElementById("HR").value="";
	document.getElementById("RBI").value="";
	document.getElementById("BB").value="";
	document.getElementById("SO").value="";
	document.getElementById("AVG").value="";
	document.getElementById("OBP").value="";
	document.getElementById("SLG").value="";
	document.getElementById("OPS").value="";
	document.getElementById("BOPselect").value="";
	document.getElementById("POS").value="";
	document.getElementById("Inngsselect").value="";
	document.getElementById("finalanswer").innerHTML="";

}

function confirm(){

	if (document.getElementById("HR").value>0) {

			document.getElementById("finalanswer").innerHTML="W";
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value>4) {

			document.getElementById("finalanswer").innerHTML="W";
		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="CHC"){

				if (document.getElementById("RBI").value==0){

					document.getElementById("finalanswer").innerHTML="L";

				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="CHC"){

				if (document.getElementById("RBI").value>0){

					document.getElementById("finalanswer").innerHTML="W";

				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Away"){
				
					if (document.getElementById("SO").value==0){

					    document.getElementById("finalanswer").innerHTML="W";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Away"){

					if (document.getElementById("SO").value>0){

					    if (document.getElementById("AVG").value<=0.158){

						      document.getElementById("finalanswer").innerHTML="L";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Away"){

					if (document.getElementById("SO").value>0){

					    if (document.getElementById("AVG").value>0.158){

						      document.getElementById("finalanswer").innerHTML="W";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="1"){

					    document.getElementById("finalanswer").innerHTML="W";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="2"){

					    document.getElementById("finalanswer").innerHTML="W";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="3"){

					    document.getElementById("finalanswer").innerHTML="L";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="4"){

					    if (document.getElementById("SLG").value<=0.628){

						      document.getElementById("finalanswer").innerHTML="W";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="4"){

					    if (document.getElementById("SLG").value>0.628){

						      document.getElementById("finalanswer").innerHTML="L";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="5"){

					    document.getElementById("finalanswer").innerHTML="L";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="6"){

					    document.getElementById("finalanswer").innerHTML="L";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="8"){

					    if (document.getElementById("PA").value<=3){

						      document.getElementById("finalanswer").innerHTML="L";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="8"){

					    if (document.getElementById("PA").value>3){

						      document.getElementById("finalanswer").innerHTML="W";
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){
				
					if (document.getElementById("BOPselect").value=="9"){

					    document.getElementById("finalanswer").innerHTML="W";

				   }					
			   
			    }
		    }
	    }				
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="April"){

					    	if (document.getElementById("AVG").value<=0.246){

						         document.getElementById("finalanswer").innerHTML="L";
					          
					          }

					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="April"){

					    	if (document.getElementById("AVG").value>0.246){

						          document.getElementById("finalanswer").innerHTML="W";
					          
					          }

					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="May"){

						          document.getElementById("finalanswer").innerHTML="W";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="June"){

						          document.getElementById("finalanswer").innerHTML="L";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="August"){

						          document.getElementById("finalanswer").innerHTML="W";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="July"){

						          document.getElementById("finalanswer").innerHTML="W";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="September"){

						          document.getElementById("finalanswer").innerHTML="L";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="October"){

						          document.getElementById("finalanswer").innerHTML="W";					           
					     
					     }
					    
				    }
				}

			}

		}
			
	}

	if (document.getElementById("HR").value==0) {

		if (document.getElementById("PA").value<=4) {

			if (document.getElementById("teamselect").value=="LAD"){

				if (document.getElementById("homeselect").value=="Home"){

					if (document.getElementById("BOPselect").value=="7"){

					    if (document.getElementById("monthselect").value=="March"){

						          document.getElementById("finalanswer").innerHTML="W";					           
					     
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

		"teamselect":document.getElementById("teamselect").value,
		"homeselect":document.getElementById("homeselect").value,
		"yaerselect":document.getElementById("yaerselect").value,
		"monthselect":document.getElementById("monthselect").value,
		"oppselect":document.getElementById("oppselect").value,
		"PA":document.getElementById("PA").value,
		"H":document.getElementById("H").value,
		"HR":document.getElementById("HR").value,
		"RBI":document.getElementById("RBI").value,
		"BB":document.getElementById("BB").value,
		"SO":document.getElementById("SO").value,
		"AVG":document.getElementById("AVG").value,
		"OBP":document.getElementById("OBP").value,
		"SLG":document.getElementById("SLG").value,
		"OPS":document.getElementById("OPS").value,
		"BOPselect":document.getElementById("BOPselect").value,
		"POS":document.getElementById("POS").value,
		"Inngsselect":document.getElementById("Inngsselect").value,
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
	
        document.getElementById("teamselect").value="";
		document.getElementById("homeselect").value="";
		document.getElementById("yaerselect").value="";
		document.getElementById("monthselect").value="";
		document.getElementById("oppselect").value="";
		document.getElementById("PA").value="";
		document.getElementById("H").value="";
		document.getElementById("HR").value="";
		document.getElementById("RBI").value="";
		document.getElementById("BB").value="";
		document.getElementById("SO").value="";
		document.getElementById("AVG").value="";
		document.getElementById("OBP").value="";
		document.getElementById("SLG").value="";
		document.getElementById("OPS").value=""
		document.getElementById("BOPselect").value=""
		document.getElementById("POS").value="";
		document.getElementById("Inngsselect").value="";
		
}

	





	

	

