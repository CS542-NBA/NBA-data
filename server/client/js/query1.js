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
	    /*
	    var callstate=function (value){
	      this.setState({returnValue:value});
	    }
	    callstate=callstate.bind(this);
	    */
	    var xhr=new XMLHttpRequest();

	    
	    xhr.open("POST","http://localhost:5000/sendquery",true);
	    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	    xhr.onreadystatechange=function(){
	      if(xhr.readyState===4){
	        //console.log(xhr.responseText);
	       	str=str+xhr.responseText;
	       	printxhr(str);
	        //document.getElementById("viewSection").innerHTML=xhr.responseText;
	        }
	       
	    }    
	    xhr.send('SELECT * FROM CONF'); 
	    
    
	}
	trySend();
}