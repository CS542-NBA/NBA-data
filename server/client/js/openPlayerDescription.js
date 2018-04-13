$(document).ready(function() {
	$('.js-example-basic-single').select2();
});

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

//var oTxt = document.getElementById('text1');
//var oBtn = document.getElementById('btn');
//var oList = document.getElementById('list');
//
////var fruits = getAllPlayer();
//var fruits = ["gorgui","yogi","maurice","yoyo"];
//
//
////点击事件
////oTxt.addEventListener('input', function(e){
////	if(e.keyCode == 13){
////		var keyWord = oTxt.value;
////		// var fruitList = searchByIndexOf(keyWord,fruits);
////		var fruitList = searchByRegExp(keyWord, fruits);
////		renderFruits(fruitList);
////	}
////}, false);
//
//oBtn.addEventListener('click', function(){
//	var keyWord = oTxt.value;
//	//var fruitList = searchByIndexOf(keyWord,fruits);
//	console.log(fruitList);
//	//var fruitList = searchByRegExp(keyWord, fruits);
//	//renderFruits(fruitList);
//
//}, false);
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
//
//function addOption(fruitList){
//	var obj = document.getElementById(list);
//	var len = fruitList.length;
//	for (var i = 0; i < len; i++){
//		obj.options[i] = new Option(fruitList[i],i)
//	}
//}
////
////function renderFruits(list){
////	if(!(list instanceof Array)){
////		return ;
////	}
////
////	var len = list.length;
////	console.log(len);
////	var item = null;
////	for(var i=0;i<len;i++){
////		item = document.createElement('options');
////		var index = i
////		var options[index].value = list[i];
////		oList.appendChild(item);
////	}
////}
////模糊匹配的时候如果不区分大小写，可以使用toLowerCase()或者toUpperCase()转换之后去匹配。
//
////模糊查询1:利用字符串的indexOf方法
//function searchByIndexOf(keyWord, list){
//	if(!(list instanceof Array)){
//		return ;
//	}
//	var len = list.length;
//	var arr = [];
//	for(var i=0;i<len;i++){
//		//如果字符串中不包含目标字符会返回-1
//		if(list[i].indexOf(keyWord)>=0){
//			arr.push(list[i]);
//		}
//	}
//	return arr;
//}
////正则匹配
//function searchByRegExp(keyWord, list){
//	if(!(list instanceof Array)){
//		return ;
//	}
//	var len = list.length;
//	var arr = [];
//	var reg = new RegExp(keyWord);
//	for(var i=0;i<len;i++){
//		//如果字符串中不包含目标字符会返回-1
//		if(list[i].match(reg)){
//			arr.push(list[i]);
//		}
//	}
//	return arr;
//}





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

