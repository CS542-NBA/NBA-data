function openTeamDescription(teamName){
		//teamName="spur";
		HTMLstring='<HTML>\n';
		HTMLstring+='<HEAD>\n';
		HTMLstring+='<TITLE>'+teamName+' Profile</TITLE>\n';
		HTMLstring+='<img src="./teamDescription/'+teamName+'Logo.png">';
		HTMLstring+='<script src="js/query.js" type="text/javascript"></script>';
		HTMLstring+='<script src="js/jquery.min.js" type="text/javascript"></script>';
		HTMLstring+='<script>$(document).ready(function(){query_PlayerInTeam("'+teamName+'");});</script>';
		HTMLstring+='</HEAD>\n';
		HTMLstring+='<body>\n';
		HTMLstring+='<div id="div1">\n';
		HTMLstring+='</div>\n';
		HTMLstring+='</body>\n';
		HTMLstring+='</HTML>';
		newwindow=window.open();
		newdocument=newwindow.document;
		newdocument.write(HTMLstring);
		newdocument.close();
}