/*
function query1(){
	var str="";
	function printxhr(data){
		var jsonData=JSON.parse(data);
          for(var i=0;i<jsonData.metaData.length;i++){
            var metaD=jsonData.metaData[i];
            console.log(metaD.name);
          }
          for(i=0;i<jsonData.rows.length;i++){
            var row=jsonData.rows[i];
            console.log(row);
          }
		
	}
	function trySend(){
	    var xhr=new XMLHttpRequest();

	    
	    xhr.open("POST","http://localhost:5000",true);
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    //console.log("hi");
	    xhr.onreadystatechange=function(){
	      if(xhr.readyState===4 ){
	        //console.log(xhr.responseText);
	       	str=str+xhr.responseText;
	       	console.log("xhr:",xhr.responseText);
	       	printxhr(str);
	        //document.getElementById("viewSection").innerHTML=xhr.responseText;
	        }
	       
	    }    
	    xhr.send('SELECT * FROM CONF'); 
	    
    
	}
	trySend();
}
*/
function parseJson(str){
	var table=[];
	var jsonData=JSON.parse(str);
	var temp=[];
	
	for(var i=0;i<jsonData.metaData.length;i++){
		Object.entries(jsonData.metaData[i]).forEach(([key,value])=>temp.push(value));
		
	}
	table.push(temp);
	for(i=0;i<jsonData.rows.length;i++){
            table.push(jsonData.rows[i]);
            table[i+1][0]=table[i+1][0].replace(/\s+$/,'');
            table[i+1][1]=table[i+1][1].replace(/\s+$/,'');
    }

    console.log(table);
	return table;
}

function query_PlayerInTeam(team){
	var str="";
	var xhr=new XMLHttpRequest();
    
    xhr.open("POST","http://localhost:5000",true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var dbres;
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4 ){
        //console.log(xhr.responseText);
       	str=str+xhr.responseText;
       	dbres=parseJson(str);
       	return dbres;
       	//console.log("xhr:",xhr.responseText);
       	//printxhr(str);
        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select team,p.PLAYER_NAME from players_team pt,players p where pt.player_id = p.player_id and team='Minnesota Timberwolves'";
    console.log(reqsend);
    xhr.send(reqsend); 
}