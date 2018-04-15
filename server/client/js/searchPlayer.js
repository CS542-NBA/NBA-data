
function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' +
					'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var playername = getURLParameter('playerName');
console.log(playername);
var test = document.getElementById("name");
console.log(test);
test.innerHTML=playername;

fruitList = [{"id":"001","name":"test"},{"id":"002","name":"test2"}]