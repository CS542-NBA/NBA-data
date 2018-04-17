$(document).ready(function() {
	$('.js-example-basic-single').select2();
});




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

