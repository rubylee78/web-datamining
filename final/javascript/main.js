var alldata=new Object();
var nowdata=new Array(23);

window.onload=function(){
	
	document.getElementById("teamselect").value="";
	document.getElementById("homeselect").value="";
	document.getElementById("yearselect").value="";
	document.getElementById("monthselect").value="";
	document.getElementById("Inngsselect").value="";
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
	document.getElementById("a").value="";
	document.getElementById("POS").value="";  
	


	queryallfromdb("kmeanscentroid");
	queryallfromdb("testdata");
}

function queryallfromdb(target){
	$.ajax({
		type:"POST",
		url:"php/simpleml_sql.php",
		data:{
			"targettable":target,                             
		},

		success:function(data){
			data=JSON.parse(data);
			console.log(data);
			alldata[target]=data;
	        return("success");
		},

		error:function(){
			alert("發生錯誤 狀態:"+jqXHR.readyState+"   "+jqXHR.status);
		},
	})
}

function testinput(){
	if (document.getElementById("teamselect").value!=""&&
	document.getElementById("homeselect").value!=""&&
	document.getElementById("yearselect").value!=""&&
	document.getElementById("monthselect").value!=""&&
	document.getElementById("Inngsselect").value!=""&&
	document.getElementById("oppselect").value!=""&&
	document.getElementById("PA").value!=""&&
	document.getElementById("H").value!=""&&
	document.getElementById("HR").value!=""&&
	document.getElementById("RBI").value!=""&&
	document.getElementById("BB").value!=""&&
	document.getElementById("SO").value!=""&&
	document.getElementById("AVG").value!=""&&
	document.getElementById("OBP").value!=""&&
	document.getElementById("SLG").value!=""&&
	document.getElementById("OPS").value!=""&&
	document.getElementById("a").value!=""&&
	document.getElementById("POS").value!="") 
	{
		if (document.getElementById("PA").value<=10&&
			document.getElementById("H").value<=8&&
			document.getElementById("HR").value<=5&&
			document.getElementById("RBI").value<=10&&
			document.getElementById("BB").value<=5&&
			document.getElementById("SO").value<=5&&
			document.getElementById("AVG").value<=1&&
			document.getElementById("OBP").value<=1&&
			document.getElementById("SLG").value<=2&&
			document.getElementById("OPS").value<=2) {


			nowdata[0]=document.getElementById("yearselect").value;
	        nowdata[1]=document.getElementById("monthselect").value;
			nowdata[2]=document.getElementById("teamselect").value;
	        nowdata[3]=document.getElementById("homeselect").value;
	        nowdata[4]=document.getElementById("oppselect").value;
	        nowdata[5]=document.getElementById("Inngsselect").value;
	        nowdata[6]=document.getElementById("PA").value;
	        nowdata[7]=document.getElementById("H").value;
	        nowdata[8]=document.getElementById("HR").value;
	        nowdata[9]=document.getElementById("RBI").value;
	        nowdata[10]=document.getElementById("BB").value;
	        nowdata[11]=document.getElementById("SO").value;
	        nowdata[12]=document.getElementById("AVG").value;
	        nowdata[13]=document.getElementById("OBP").value;
	        nowdata[14]=document.getElementById("SLG").value;
	        nowdata[15]=document.getElementById("OPS").value;
	        nowdata[16]=document.getElementById("a").value;
	        nowdata[17]=document.getElementById("POS").value;
	        console.log(nowdata);
			return("success");

		}

		else{

			alert("請確認各數據是否符合規則及常理");
		}

	}

	else{

		alert("請完整填寫上述表單");
	}
}

function kmeans(){
	if (testinput()!="success"){
		return;
	}
	var kscore=new Array(6);
	for (var j = 0;j<=5; j++){
		var tempscore=0;
		for (var i=0;i<=17;i++){
		  if(i==6){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(8-0);

		  }else if(i==7){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(5-0);

		  }

		  else if(i==8){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(2-0);

		  }

		  else if(i==9){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(6-0);

		  }

		  else if(i==10){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(3-0);

		  }

		  else if(i==11){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(4-0);

		  }

		  else if(i==12){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(0.5-0);

		  }

		  else if(i==13){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(0.6-0);

		  }

		  else if(i==14){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(1.25-0);

		  }

		  else if(i==15){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(1.75-0);

		  }

		 else{

		 	if (nowdata[i]==alldata["kmeanscentroid"][j][i+1]) {
		 		tempscore++;
		 	}
		 }

	  }
	  kscore[j]=tempscore;

	}
	var nowcluster=kscore.indexOf(Math.max.apply(null,kscore))+1;
	document.getElementById("nowcluster").innerHTML=nowcluster;
	var nowkmeanspep=alldata["kmeanscentroid"][nowcluster-1][19];
	document.getElementById("nowkmeanspep").innerHTML=nowkmeanspep;
	nowdata[18]=nowcluster;
	nowdata[19]=nowkmeanspep;
	
}

function knn(){
	if(testinput()!="success"){
		return;
	}
	var knnscore=new Array(1005);
	for (var j=0; j<=1004;j++){

		var tempscore=0;
		for (var i=0;i<=17;i++){
		  if(i==6){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(8-0);

		  }else if(i==7){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(5-0);

		  }

		  else if(i==8){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(2-0);

		  }

		  else if(i==9){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(6-0);

		  }

		  else if(i==10){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(3-0);

		  }

		  else if(i==11){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(4-0);

		  }

		  else if(i==12){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(0.5-0);

		  }

		  else if(i==13){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(0.6-0);

		  }

		  else if(i==14){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(1.25-0);

		  }

		  else if(i==15){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["testdata"][j][i+1])/(1.75-0);

		  }

		 else{

		 	if (nowdata[i]==alldata["testdata"][j][i+1]) {
		 		tempscore++;
		 	}
		 }

	  }
	  knnscore[j]=tempscore;
	}

	var nowknnid=knnscore.indexOf(Math.max.apply(null,knnscore))+1;
	document.getElementById("nowknnid").innerHTML=nowknnid;
	var nowknnspep=alldata["testdata"][nowknnid-1][19];
	document.getElementById("nowknnpep").innerHTML=nowknnspep;
	nowdata[20]=nowknnid;
	nowdata[21]=nowknnspep;
	 
}

function crossanalysis(){
	var nowcapep="";
	if(testinput()!="success"){
		return;
	}
	if(!nowdata[18]){
		alert("請先進行kmeans");
	}

	else if(nowdata[18]=="2"){
		
	  if (nowdata[16]=="6") {
		    nowcapep="L"; 
		}	
									    
	}    

	else if(nowdata[18]=="5"){
		if (nowdata[16]=="8") {			
			nowcapep="W";
	    }
	} 

	if(!nowcapep){
		nowcapep="NONE";
	}
	document.getElementById("nowcafinal").innerHTML=nowcapep;
	nowdata[22]=nowcapep;


}

function sendresult(){
	if (!nowdata[18]) {
		alert("先進行kmeans");
		return;
	}

	else if (!nowdata[20]) {
		alert("請先進行knn");
		return;
	}

	else if (!nowdata[22]) {
		alert("請先進行交叉分析");
		return;
	}

	else{

		$.ajax({
			type:"POST",
			url:"php/saverecord2.php",
			data:{"nowdata":nowdata},
			success:function(data){
				alert("第"+data+"筆資料記錄成功");;
			},
			error:function(){
				alert("發生錯誤 狀態:"+jqXHR.readyState+"   "+jqXHR.status);
			},
		});
	}

}

function emptyinput(){

	document.getElementById("teamselect").value="";
	document.getElementById("homeselect").value="";
	document.getElementById("yearselect").value="";
	document.getElementById("monthselect").value="";
	document.getElementById("Inngsselect").value="";
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
	document.getElementById("a").value="";
	document.getElementById("POS").value="";
	document.getElementById("nowcluster").innerHTML="";
	document.getElementById("nowkmeanspep").innerHTML="";
	document.getElementById("nowknnid").innerHTML="";
	document.getElementById("nowknnpep").innerHTML="";
	document.getElementById("nowcafinal").innerHTML="";
	nowdata.length=0;



}
