
function conn(){
	var strConnString = "Provider=oracledb.oracle;" +
			"DataSource=(description=(address_list=(adress=(protocol=tcp)" +
			"(host=oracle.wpi.edu)(port=1521)))(connect_data=(server=dedicated)" +
			"(service_name=vcs)));user id = chsu;password=CHSU;plsqlrset=1"
	var conn = null;
	try{
		conn = new ActiveXObject("ADODB.Connection");

	}catch(e){
		alert(e.message);
	}
	return conn;

}


function getAllPlayer(){
	var conn = conn();
	var rs = conn.execute("select player_name from players");
	console.log(rs)
	if (!rs.EOF){
		alert(rs.fields("code").value);
		rs.moveNext();
	}
}
var oTxt = document.getElementById('text1');
var oBtn = document.getElementById('btn');
var oList = document.getElementById('list');

//var fruits = getAllPlayer();
var fruits = ["gorgui","yogi","maurice","yoyo"];


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
	var keyWord = oTxt.value;
	//var fruitList = searchByIndexOf(keyWord,fruits);
	console.log(fruitList);
	//var fruitList = searchByRegExp(keyWord, fruits);
	//renderFruits(fruitList);

}, false);

//回车查询
oTxt.oninput = function(){
    oList.innerHTML='';
	var keyWord = oTxt.value;
	var len = keyWord.length;
	// var fruitList = searchByIndexOf(keyWord,fruits);
	var fruitList = searchByRegExp(keyWord, fruits);
	console.log(fruitList);
	addOption(fruitList);

}


function addOption(fruitList){
	var obj = document.getElementById(list);
	var len = fruitList.length;
	for (var i = 0; i < len; i++){
		obj.options[i] = new Option(fruitList[i],i)
	}
}
//
//function renderFruits(list){
//	if(!(list instanceof Array)){
//		return ;
//	}
//
//	var len = list.length;
//	console.log(len);
//	var item = null;
//	for(var i=0;i<len;i++){
//		item = document.createElement('options');
//		var index = i
//		var options[index].value = list[i];
//		oList.appendChild(item);
//	}
//}
//模糊匹配的时候如果不区分大小写，可以使用toLowerCase()或者toUpperCase()转换之后去匹配。

//模糊查询1:利用字符串的indexOf方法
function searchByIndexOf(keyWord, list){
	if(!(list instanceof Array)){
		return ;
	}
	var len = list.length;
	var arr = [];
	for(var i=0;i<len;i++){
		//如果字符串中不包含目标字符会返回-1
		if(list[i].indexOf(keyWord)>=0){
			arr.push(list[i]);
		}
	}
	return arr;
}
//正则匹配
function searchByRegExp(keyWord, list){
	if(!(list instanceof Array)){
		return ;
	}
	var len = list.length;
	var arr = [];
	var reg = new RegExp(keyWord);
	for(var i=0;i<len;i++){
		//如果字符串中不包含目标字符会返回-1
		if(list[i].match(reg)){
			arr.push(list[i]);
		}
	}
	return arr;
}

$(document).ready(function(){
	$('.js-example-basic-single').select2();
}


