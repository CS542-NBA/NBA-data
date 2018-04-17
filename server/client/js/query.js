
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
            //table[i+1][0]=table[i+1][0].replace(/\s+$/,'');
            //table[i+1][1]=table[i+1][1].replace(/\s+$/,'');
            for(var j=0;j<table[i+1].length;j++){
              if(typeof table[i+1][j]==='string'){
                table[i+1][j]=table[i+1][j].replace(/\s+$/,'');
              }
              else{
                table[i+1][j]=round(table[i+1][j],2)
              }
            }
    }

    //console.log(table);
	return table;
}
/*
function parseMaxStat(str){
	var table=[];
	var jsonData=JSON.parse(str);
	var temp=[];
	console.log(jsonData);

	for(var i=0;i<jsonData.metaData.length;i++){
		Object.entries(jsonData.metaData[i]).forEach(([key,value])=>temp.push(value));
		
	}
	table.push(temp);
	for(i=0;i<jsonData.rows.length;i++){
            table.push(jsonData.rows[i]);
    }
    
    //console.log(table);
	return table;
}
*/
/*
function parsePlayerStat(str){
	var table=[];
	var jsonData=JSON.parse(str);
	var temp=[];

	for(i=0;i<jsonData.rows.length;i++){
            table.push(jsonData.rows[i][0]);
            table.push(jsonData.rows[i][1]);
            table.push(jsonData.rows[i][2]);
            table.push(jsonData.rows[i][3]);
            table.push(jsonData.rows[i][4]);
            break;
    }

    //console.log(table);
	return table;
}
*/
function parseAllNameJson(str){
	var table=[];
	var jsonData=JSON.parse(str);
	var temp=[];
	
	for(i=0;i<jsonData.rows.length;i++){
			tempname=jsonData.rows[i];
			tempname=tempname[0].replace(/\s+$/,'');
			tempdic={};
			tempdic['name']=tempname;
            table.push(tempdic);
    }

    //console.log(table);
	return table;
}
function round(number, precision) {
  var shift = function (number, precision, reverseShift) {
    if (reverseShift) {
      precision = -precision;
    }  
    var numArray = ("" + number).split("e");
    return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
  };
  return shift(Math.round(shift(number, precision, false)), precision, true);
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
    //console.log(reqsend);
    xhr.send(reqsend); 
}
function query_teamwl(team){
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
    var reqsend="select win,loss \
    from team_statistic \
    where team='"+team+"'";
    //console.log(reqsend);
    xhr.send(reqsend); 
}
function query_top3(team){
  var result=[];
  const getData=function(team){
    return new Promise(function(resolve,reject){
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
        result=dbres;
        resolve(result);
        }
      //else{
        //reject(new Error("Error at inside"));
      //}
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.points \
    from players_statistic ps, players_team pt, players p \
    where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
    order by ps.points desc \
    ) \
    where rownum<=3"
    console.log(reqsend);
    xhr.send(reqsend); 



    });
  };
  getData(team)
  .then(function(result){
    return new Promise(function(resolve,reject){
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
        for(var j=0;j<result.length;j++){
          result[j]=result[j].concat(dbres[j]);
        }
        console.log(result);
        resolve(result);
        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.ast \
    from players_statistic ps, players_team pt, players p \
    where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
    order by ps.points desc \
    ) \
    where rownum<=3"
    console.log(reqsend);
    xhr.send(reqsend); 
    });
    
  })
  .then((result)=>{
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
        for(var j=0;j<result.length;j++){
          result[j]=result[j].concat(dbres[j]);
        }
        console.log(result);
        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.trb \
    from players_statistic ps, players_team pt, players p \
    where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
    order by ps.points desc \
    ) \
    where rownum<=3"
    console.log(reqsend);
    xhr.send(reqsend); 

  })
  .catch((error)=>console.log(error.message))
}
function query_top3Score(team,result){
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
       	result.push(dbres);
        return "THERETURN";
        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select * from (select p.PLAYER_NAME,ps.points \
    from players_statistic ps, players_team pt, players p \
    where p.player_id=ps.player_id and pt.TEAM='"+team+"' and pt.player_id=p.player_id \
    order by ps.points desc \
    ) \
    where rownum<=3"
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
    var reqsend="select conference, division, head_coach from coach where coach.team='"+team+"'";
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
    var reqsend="select stadium \
    from team \
    where team='"+team+"'";
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
function query_playerStat(player){

    //query ONE player's stat
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
       	dbres.shift();
        console.log("PlayerStat");
        console.log(dbres);
        $(document).ready(function() {
            radarChart(dbres[0],"figure1table");
        });

        }
       
    }
    var reqsend="select ps.points,ps.trb,ps.ast,ps.stl,ps.blk \
	from players_statistic ps, players p \
	where ps.player_id=p.player_id and p.player_name ='"+player+"'";
    console.log(reqsend);
    xhr.send(reqsend);


}
function query_player3Point(player){
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
        console.log("P3oint");
       	console.log(dbres);
        $(document).ready(function() {
              plotTable(dbres,"figure2table");
        });

          //$.each(dbres,function(i,item){
        //  $('#myselect').append($('<option>',{
        //      value:item.name,
        //      text:item.name
        //  }));
        //});
        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select ps.\"3P\",ps.\"3PA\",ps.\"3P%\" \
    from players_statistic ps, players p \
    where ps.player_id=p.player_id and p.player_name ='"+player+"'";
    console.log(reqsend);
    xhr.send(reqsend);
    return dbres;
}
function query_playerInfo(player){
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
        console.log("PlayerInfo");
       	console.log(dbres);
          $(document).ready(function() {
              plotTable(dbres,"figure3table");
          });

        //document.getElementById("viewSection").innerHTML=xhr.responseText;
        }
       
    }
    var reqsend="select pm.twitter_followers_millions,p.pos,p.birth_year,ps.salary_millions \
	from players p LEFT OUTER JOIN players_media pm on p.player_id = pm.player_id \
 	left OUTER JOIN players_statistic ps on p.player_id = ps.player_id \
	where p.player_name ='"+player+"'";
    console.log(reqsend);
    xhr.send(reqsend); 
}