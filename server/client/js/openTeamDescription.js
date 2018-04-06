function openTeamDescription(teamName){
		//teamName="spur";
		HTMLstring='<HTML>\n';
		HTMLstring+='<HEAD>\n';
		HTMLstring+='<TITLE>'+teamName+' Profile</TITLE>\n';
		HTMLstring+='<img src="./teamDescription/'+teamName+'Logo.png">';
		HTMLstring+='</HEAD>\n';
		HTMLstring+='<body>\n';
		HTMLstring+='</body>\n';
		HTMLstring+='</HTML>';
		newwindow=window.open();
		newdocument=newwindow.document;
		newdocument.write(HTMLstring);
		newdocument.close();
}