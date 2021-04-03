//function that display value 
function dis(val) 
{ 
    document.getElementById("result").value+=val;
} 
  
//function that evaluates the digit and return result 
function solve() 
{ 
    let x = document.getElementById("result").value;
    let y = new Function("return " + x)();
    document.getElementById("result").value = y;
} 
  
//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "";
}

document.onkeydown = function(evt) {
    evt = evt || window.event;
    
    if(evt.keyCode == 56){
	dis("*");
    }
    else if(evt.keyCode >=48 && evt.keyCode <= 57){
    	dis(evt.keyCode-48);
    }
    else if(evt.keyCode == 187){
	dis("+");
    }
    else if(evt.keyCode == 189){
	dis("-");
    }
    else if(evt.keyCode == 190){
    	dis(".");
    }
    else if(evt.keyCode == 191){
	dis("/");
    }
    else if(evt.keyCode == 13){
    	solve();
    }
    else if(evt.keyCode == 8){
        let x = document.getElementById("result").value;
	document.getElementById("result").value = x.slice(0, -1);
    }
    
};