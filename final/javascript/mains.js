

function send(){

	var rowNumber=document.getElementById('searchtable').rows.length;
	if (rowNumber!=0) {

		$('#searchtable tr').remove();
	}

	document.getElementById('result').style.display='block';
	var typevalue=document.getElementById('typeselect').value;
	var valuevalue=document.getElementById('valueselect').value;
	var technologyvalue=document.getElementById('technologyselect').value;

	$.ajax({
	type:"POST",
	url:'php/sql.php',
	data:{
		"typeselect":typevalue,
		"valueselect":valuevalue,
		"technologyselect":technologyvalue,
	},

	success:function(data){

		data=JSON.parse(data);
		searchresult=data;
		console.log(searchresult);

		var table=document.getElementById('searchtable');
		for (var i =0; i <searchresult.length; i++) {
			
			oneRow=table.insertRow();
			oneRow.insertCell().innerHTML='<a href='+searchresult[i][1]+'target= "_blank" >'+searchresult[i][0]+'</a>';
		}
	},

	error:function(jqXHR){

		alert("發生狀態 錯誤"+jqXHR.readyState+'    '+jqXHR.status);

	},


})
}

