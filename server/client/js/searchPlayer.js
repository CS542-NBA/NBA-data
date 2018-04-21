
function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' +
					'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var playername = getURLParameter('playerName');

console.log(playername);
var test = document.getElementById("name");
var nn = document.getElementById("namedisplay");
test.innerHTML = playername;
nn.innerHTML = playername;