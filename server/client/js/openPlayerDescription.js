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
//			"(service_name=vcs)));user id = chsu;password=CHSU;plsqlrset=1";
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

//var oracledb = require('oracledb');
//
//var oraConfig = require('./dbconfig.js');
//oracledb.getConnection(oraConfig, function(err, connection) {
//	if (err) {
//		console.log("Fail to connect oracle:", err);
//		return;
//	}
//
//	connection.setAutoCommit(true);
//	connection.execute("select player_name from players", [], function(err, result) {
//		if (err) {
//			console.log(err);
//			return;
//		}
//		console.log(JSON.parse(result));
//		connection.close();
//
//	});
//});


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
//		xhr.open("POST","localhost:5000",true);
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
//}
//trySend();
//
//}
//query1();


var oTxt = document.getElementById('myselect');
var oBtn = document.getElementById('btn');




fruitList = [{"id":"001","name":"test"},{"id":"002","name":"test2"}]

$.each(fruitList, function (i, item) {

	$('#myselect').append($('<option>', {
		value: item.name,
		text : item.name
	}));
}
);

oBtn.addEventListener('click', function(){
	var playerName = oTxt.value;
	console.log(playerName);
	var url = "playerTemplate.html?playerName="+playerName;
	playerWindow = window.open(url);
	//playerdocument = playerWindow.document;
	//playerdocument.write(playerName);
	//playerdocument.close();
}, false);

