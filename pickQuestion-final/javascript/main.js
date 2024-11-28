var nowQuest;
var multipleChoiceD=[];
var trueFalseD=[];
var EssayD = [];


function multipleChoice() {

	if(multipleChoiceD.length==30){

	document.getElementById("questionNumber").innerHTML="抽完了";
	return

}

do{

	var pick=Math.floor(Math.random()*30)+1;

}while(multipleChoiceD.indexOf(pick)!=-1);

multipleChoiceD.push(pick);
document.getElementById	("questionNumber").innerHTML=pick;
usePhp(pick,"multiplechoicequest");

  
}

function Essay(){

if(EssayD.length==30){

	document.getElementById("questionNumber").innerHTML="抽完了";
	return

}


do{

	var pick=Math.floor(Math.random()*30)+1;

}while(EssayD.indexOf(pick)!=-1);

EssayD.push(pick);
document.getElementById	("questionNumber").innerHTML=pick;
usePhp(pick,"essayquest");

}

function trueFalse(){

if(EssayD.length==30){

	document.getElementById("questionNumber").innerHTML="抽完了";
	return

}

do{

	var pick=Math.floor(Math.random()*30)+1;

}while(trueFalseD.indexOf(pick)!=-1);

trueFalseD.push(pick);
document.getElementById	("questionNumber").innerHTML=pick;
usePhp(pick,"truefalsequest");


}

function usePhp(num,type){
	$.ajax({

		type:"POST",
		url:"php/question_spl.php",
		data:{

			"question_num":num,
			"question_type":type,
		},

		success:function(data){

			data=JSON.parse(data);
			nowQuest=data;
			document.getElementById("questionContent").innerHTML=nowQuest[1];
			document.getElementById("questionAnswer").innerHTML="";
			
			
		},

		error:function(jqXHR){

			alert("發生錯誤 狀態:"+jqXHR.readyState+"  "+jqXHR.status);

		},

	});

}

function giveAnswer(){

	document.getElementById("questionAnswer").innerHTML=nowQuest[2];
}