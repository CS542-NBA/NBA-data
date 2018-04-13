$(document).ready(function() {
	$('.js-example-basic-single').select2();
});

function openPlayerDescription(playerName){
	//teamName="spur";
	HTMLstring='<HTML>\n';
	HTMLstring+='<HEAD>\n';
	HTMLstring+='<TITLE>'+playerName+' Profile</TITLE>\n';
	HTMLstring+='<h2 class="centered">'+playerName+'</h2>';
	HTMLstring+='</HEAD>\n';
	HTMLstring+='<body>\n';
	HTMLstring+='</body>\n';
	HTMLstring+='</HTML>';
	newwindow=window.open();
	newdocument=newwindow.document;
	newdocument.write(HTMLstring);
	newdocument.close();
}
//function conn(){
//	var strConnString = "Provider=OraOLEDB.Oracle;" +
//			"DataSource=(description=(address_list=(adress=(protocol=tcp)" +
//			"(host=oracle.wpi.edu)(port=1521)))(connect_data=(server=dedicated)" +
//			"(service_name=vcs)));user id = chsu;password=CHSU;plsqlrset=1"
//	var conn = null;
//	try{
//		conn = new ActiveXObject("ADODB.Connection");
//
//	}catch(e){
//		console.log(e.message);
//	}
//	conn.open(strConnString);
//	var rs=conn.execute("SELECT * FROM CONF");
//	console.log(rs);
//	console.log("success")
//	if(!rs.EOF){
//		alert(rs.fields("code").value);
//		rs.moveNext();
//
//	}
//	rs.close();
//	conn.close();
//	conn = null;
//
//}
//conn();
//function query1(){
//	var str="";
//	console.log("in query1");
//	function printxhr(data){
//		var jsonData=JSON.parse(data);
//		for(var i=0;i<jsonData.metaData.length;i++){
//			var metaD=jsonData.metaData[i];
//			console.log(metaD.name);
//		}
//		for(i=0;i<jsonData.rows.length;i++){
//			var row=jsonData.rows[i];
//			console.log(row);
//		}
//
//	}
//	function trySend(){
//		/*
//		 var callstate=function (value){
//		 this.setState({returnValue:value});
//		 }
//		 callstate=callstate.bind(this);
//		 */
//		console.log("in try send");
//		var xhr=new XMLHttpRequest();
//
//
//		xhr.open("POST","http://oracle.wpi.edu:1521",true);
//		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//		xhr.send('SELECT * FROM CONF');
//		xhr.onreadystatechange=function(){
//			if(xhr.readyState===4 ){
//				//console.log(xhr.responseText);
//				str=str+xhr.responseText;
//				console.log("database connection successed!");
//				console.log("xhr:",xhr.responseText);
//				printxhr(str);
//				//document.getElementById("viewSection").innerHTML=xhr.responseText;
//			}
//
//		}
//
//
//
//
//
//}
//trySend();
//
//}
//query1();

var oTxt = document.getElementById('list');
var oBtn = document.getElementById('btn');
//var oList = document.getElementById('list');



//点击事件
//oTxt.addEventListener('input', function(e){
//	if(e.keyCode == 13){
//		var keyWord = oTxt.value;
//		// var fruitList = searchByIndexOf(keyWord,fruits);
//		var fruitList = searchByRegExp(keyWord, fruits);
//		renderFruits(fruitList);
//	}
//}, false);

oBtn.addEventListener('click', function(){
	var playerName = oTxt.value;

	console.log(playerName);
	openPlayerDescription(playerName);


}, false);

//
////回车查询
//oTxt.oninput = function(){
//    oList.innerHTML='';
//	var keyWord = oTxt.value;
//	var len = keyWord.length;
//	// var fruitList = searchByIndexOf(keyWord,fruits);
//	var fruitList = searchByRegExp(keyWord, fruits);
//	console.log(fruitList);
//	addOption(fruitList);
//
//}
//
fruitList = [{"id":"001","name":"test"},{"id":"002","name":"test2"}]
$.each(fruitList, function (i, item) {
	$('#myselect').append($('<option>', {
		value: item.name,
		text : item.name
	}));
});
//function addOption(fruitList){
//	var obj = document.getElementById("myselect");
//	console.log(obj);
//	var len = fruitList.length;
//	for (var i = 0; i < len; i++){
//		obj.append($('<option>',{value:i,text:fruitList[i].name}));
//	}
//}
//
//
//addOption(fruitList);

//$(document).ready(function(){
//	var url = "http://localhost:8080/data.json";
//	$.ajax({
//		type:"get",
//		url: url,
//		success:function(userList){
//		var unitObj = document.getElementById("list");
//		if(userList!=null){
//			for(var i = 0; i <userList.length;i++){
//				unitObj.options.add(new Option(userList[i],userList[i].name));
//			}
//		}
//	},
//	error:function(){
//		console.log("get nba player list error");
//	}
//
//	})
//})

