var alldata=new Object();
var nowdata =new Array(15);

window.onload=function(){
	document.getElementById("age").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("income").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("save_act").value="";
	document.getElementById("current_act").value="";
	document.getElementById("mortgageselect").value="";

	queryallfromdb("kmeanscentroid");
	queryallfromdb("teatdata");
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
	if (document.getElementById("age").value!=""&&
	document.getElementById("sexselect").value!=""&&
	document.getElementById("regionselect").value!=""&&
	document.getElementById("income").value!=""&&
	document.getElementById("marriedselect").value!=""&&
	document.getElementById("childrenselect").value!=""&&
	document.getElementById("carselect").value!=""&&
	document.getElementById("save_act").value!=""&&
	document.getElementById("current_act").value!=""&&
	document.getElementById("mortgageselect").value!="") 
	{
		if (document.getElementById("age").value>=1&&
			document.getElementById("age").value<=100&&
			document.getElementById("income").value>=1&&
			document.getElementById("income").value<=99999) {

			nowdata[0]=document.getElementById("age").value;
	        nowdata[1]=document.getElementById("sexselect").value;
	        nowdata[2]=document.getElementById("regionselect").value;
	        nowdata[3]=document.getElementById("income").value;
	        nowdata[4]=document.getElementById("marriedselect").value;
	        nowdata[5]=document.getElementById("childrenselect").value;
	        nowdata[6]=document.getElementById("carselect").value;
	        nowdata[7]=document.getElementById("save_act").value;
	        nowdata[8]=document.getElementById("current_act").value;
	        nowdata[9]=document.getElementById("mortgageselect").value;
	        console.log(nowdata);
			return("success");

		}

		else{

			alert("請確認age和income資料是否正確");
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
		for (var i=0;i<=9;i++){
		  if(i==0){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(67-18);

		  }else if(i==3){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["kmeanscentroid"][j][i+1])/(63130.1-5014.21);

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
	var nowkmeanspep=alldata["kmeanscentroid"][nowcluster-1][11];
	document.getElementById("nowkmeanspep").innerHTML=nowkmeanspep;
	nowdata[10]=nowcluster;
	nowdata[11]=nowkmeanspep;
	 

	
}

function knn(){
	if(testinput()!="success"){
		return;
	}
	var knnscore=new Array(600);
	for (var j=0; j<=599;j++){

		var tempscore=0;
		for (var i=0;i<=9;i++){
		  if(i==0){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["teatdata"][j][i+1])/(67-18);

		  }else if(i==3){
		  	tempscore+=1-Math.abs(nowdata[i]-alldata["teatdata"][j][i+1])/(63130.1-5014.21);

		  }

		 else{

		 	if (nowdata[i]==alldata["teatdata"][j][i+1]) {
		 		tempscore++;
		 	}
		 }

	  }
	  knnscore[j]=tempscore;
	}

	var nowknnid=knnscore.indexOf(Math.max.apply(null,knnscore))+1;
	document.getElementById("nowknnid").innerHTML=nowknnid;
	var nowknnspep=alldata["teatdata"][nowknnid-1][11];
	document.getElementById("nowknnpep").innerHTML=nowknnspep;
	nowdata[12]=nowknnid;
	nowdata[13]=nowknnspep;
	 
}

function crossanalysis(){
	var nowcapep="";
	if(testinput()!="success"){
		return;
	}
	if(!nowdata[10]){
		alert("請先進行kmeans");
	}

	else if(nowdata[10]=="2"){
		if (nowdata[4]=="YES") {
			nowcapep="強烈會買";
		}

		else if (nowdata[8]=="NO") {
			nowcapep="強烈會買";
		}
	}

	else if(nowdata[10]=="4"){
		if (nowdata[8]=="YES") {
			nowcapep="強烈不會買";
		}
	}

	else if(nowdata[10]=="5"){
		if (nowdata[1]=="MALE") {
			nowcapep="強烈不會買";
		}

		else if (nowdata[4]=="NO") {
			nowcapep="強烈不會買";
		}
		else if (nowdata[9]=="YES") {
			nowcapep="強烈不會買";
		}
	}

	else if(nowdata[10]=="6"){

		if (nowdata[1]=="FEMALE") {
			nowcapep="強烈會買";
		}

		else if (nowdata[4]=="NO") {
			nowcapep="強烈會買";
		}
		else if (nowdata[6]=="NO") {
			nowcapep="強烈會買";
		}

		else if (nowdata[7]=="NO") {
			nowcapep="強烈會買";
		}
		else if (nowdata[8]=="NO") {
			nowcapep="強烈會買";
		}

		else if (nowdata[9]=="YES") {
			nowcapep="強烈會買";
		}
	}

	if(!nowcapep){
		nowcapep="NONE";
	}
	document.getElementById("nowcafinal").innerHTML=nowcapep;
	nowdata[14]=nowcapep;


}

function sendresult(){
	if (!nowdata[10]) {
		alert("先進行kmeans");
		return;
	}

	else if (!nowdata[12]) {
		alert("請先進行knn");
		return;
	}

	else if (!nowdata[14]) {
		alert("請先進行交叉分析");
		return;
	}

	else{

		$.ajax({
			type:"POST",
			url:"php/saverecord.php",
			data:{"nowdata":nowdata},
			success:function(data){
				alert("儲存成功");
			},
			error:function(){
				alert("發生錯誤 狀態:"+jqXHR.readyState+"   "+jqXHR.status);
			},
		});
	}

}

function emptyinput(){

	document.getElementById("age").value="";
	document.getElementById("sexselect").value="";
	document.getElementById("regionselect").value="";
	document.getElementById("income").value="";
	document.getElementById("marriedselect").value="";
	document.getElementById("childrenselect").value="";
	document.getElementById("carselect").value="";
	document.getElementById("save_act").value="";
	document.getElementById("current_act").value="";
	document.getElementById("mortgageselect").value="";
	document.getElementById("nowcluster").innerHTML="";
	document.getElementById("nowkmeanspep").innerHTML="";
	document.getElementById("nowknnid").innerHTML="";
	document.getElementById("nowknnpep").innerHTML="";
	document.getElementById("nowcafinal").innerHTML="";
	nowdata.length=0;



}
