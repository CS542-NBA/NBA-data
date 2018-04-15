
function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' +
					'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var playername = getURLParameter('playerName');

console.log(playername);
var test = document.getElementById("name");
test.innerHTML = playername;
