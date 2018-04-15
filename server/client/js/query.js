
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
	for(i=0;i<jsonData.rows.length-1;i++){
            table.push(jsonData.rows[i]);
            table[i+1][0]=table[i+1][0].replace(/\s+$/,'');
            table[i+1][1]=table[i+1][1].replace(/\s+$/,'');
    }

    console.log(table);
	return table;
}
function parseAllNameJson(str){
	var table=[];
	var jsonData=JSON.parse(str);
	var temp=[];
	
	for(i=0;i<jsonData.rows.length-1;i++){
			tempname=jsonData.rows[i];
			tempname=tempname[0].replace(/\s+$/,'');
			tempdic={};
			tempdic['name']=tempname;
            table.push(tempdic);
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
       	console.log(dbres);

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select team,p.PLAYER_NAME from players_team pt,players p where pt.player_id = p.player_id and team='"+team+"'";
    console.log(reqsend);
    xhr.send(reqsend); 
}
function query_top3Score(team){
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
       	console.log(dbres);

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.points \
	from players_statistic ps, players_team pt, players p \
	where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
	order by ps.points desc \
	) \
	where rownum<=3;"
    console.log(reqsend);
    xhr.send(reqsend); 
}
function query_top3Assist(team){
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
       	console.log(dbres);

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.ast \
	from players_statistic ps, players_team pt, players p \
	where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
	order by ps.points desc \
	) \
	where rownum<=3;"
    console.log(reqsend);
    xhr.send(reqsend); 
}
function query_teamInfo(team){
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
       	console.log(dbres);

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select coference, division, head_coach from coach where coach.team='"+team+";";
    console.log(reqsend);
    xhr.send(reqsend); 
}
//not fill IN SQL yet
function query_arena(team){
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
       	console.log(dbres);

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="";
    console.log(reqsend);
    xhr.send(reqsend); 
}
function query_allName(){
	var str="";
	var xhr=new XMLHttpRequest();
    
    xhr.open("POST","http://localhost:5000",true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    var dbres;
    xhr.onreadystatechange=function(){
      if(xhr.readyState===4 ){
        //console.log(xhr.responseText);
       	str=str+xhr.responseText;
       	dbres=parseAllNameJson(str);
       	console.log(dbres);
       	$.each(dbres,function(i,item){
       		$('#myselect').append($('<option>',{
       			value:item.name,
       			text:item.name
       		}));
       	});

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select player_name from players";
    console.log(reqsend);
    xhr.send(reqsend); 
}