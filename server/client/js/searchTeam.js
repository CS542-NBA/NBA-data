function getURLParameter(name){
	return decodeURIComponent((new RegExp('[?|&]' + name + '=' +
					'([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
}

var teamName = getURLParameter('teamName');

console.log(teamName);
var test = document.getElementById("name");
test.innerHTML = teamName;