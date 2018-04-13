function searchPlayer(){


var x=document.getElementById("searchContent").value;

//
//	    var xhr=new XMLHttpRequest();
//	    xhr.open("POST","http://localhost:5000",true);
//	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//	    xhr.onreadystatechange=function(){
//	      if(xhr.readyState===4 ){
//	       	str=str+xhr.responseText;
//	       	console.log("xhr:",xhr.responseText);
//	       	printxhr(str);
//	        }
//
//	    }
//	    xhr.send("SELECT Player_name FROM PLAYERS where Player_name like "+"%"+key+"%");
//
//    }
//
//    document.trySendSearch("a");
//
//    var changeValueObjects = new Array();
//    changeValueObjects.splice(i,1);  //i:数组的下标 1：删除的个数
//    changeValueTemp.push(changeValue);  //changeValue：增加的元素

document.getElementById("searchResult").innerHTML =x;
}
function executeSearch(){
 if(document.onkeydown.keyCode == 13){
document.getElementById("searchResult").innerHTML ="1";
}
}
