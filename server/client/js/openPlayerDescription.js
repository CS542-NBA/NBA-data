$(document).ready(function() {
	$('.js-example-basic-single').select2();
});

//function openPlayerDescription(playerName){
//	//teamName="spur";
//	HTMLstring='<HTML>\n';
//	HTMLstring+='<HEAD>\n';
//	HTMLstring+='<TITLE>'+playerName+' Profile</TITLE>\n';
//	HTMLstring+='<h2 class="centered">'+playerName+'</h2>';
//	HTMLstring+='</HEAD>\n';
//	HTMLstring+='<body>\n';
//	HTMLstring+='</body>\n';
//	HTMLstring+='</HTML>';
//	newwindow=window.open();
//	newdocument=newwindow.document;
//	newdocument.write(HTMLstring);
//	newdocument.close();
//
//}



var oTxt = document.getElementById('myselect');
var oBtn = document.getElementById('btn');



//
//fruitList = [{"id":"a","name":"test"},{"id":"002","name":"test2"}]
////fruitList = ['a','b']
//
//$.each(fruitList, function (i, item) {
//
//	$('#myselect').append($('<option>', {
//		value: item.name,
//		text : item.name
//	}));
//}
//);

oBtn.addEventListener('click', function(){
	var playerName = oTxt.value;
	console.log(playerName);
	var url = "playerTemplate.html?playerName="+playerName;
	playerWindow = window.open(url);
	//playerdocument = playerWindow.document;
	//playerdocument.write(playerName);
	//playerdocument.close();
}, false);

