function SL_LANGS(){
		if(GEBI('autohotkeys')){
		  var frame = GEBI('autohotkeys');
		  if(frame)	frame.parentNode.removeChild(frame);
		}
		if(!GEBI("autohotkeys")){
		    var die = document.createElement("iframe");
		    die.src = "languages.html";
		    die.name = "autohotkeys";
		    die.id="autohotkeys";
		    die.width="640px";
		    die.height="1050px";
		    die.scrolling="no";
                    die.background="#eee";
		    die.frameBorder="0";
		    GEBI('SL_AUTOKEYS').style.display='block';
		    GEBI('SL_AUTOKEYS').style.width='640px';
		    GEBI('SL_AUTOKEYS').style.height='1050px';
		    GEBI('SL_AUTOKEYS').appendChild(die);
		    GEBI('SL_save_button2').style.display='none';
		    GEBI('SL_status2').style.display='none';
		}
}
function CUSTOM_LANGS(list){
        list = list.replace(/&#160;/ig," ");
        var list2 = FExtension.store.get("SL_LNG_LIST");
	if(list2=="all") return list;
	else{
	    var OUT = "";
	    var L1 = list.split(",");
	    for(var i=0; i<L1.length; i++){
	     	var L1base = L1[i].split(":");
	     	var L1short = list2.split(",");
		for(var j=0; j<L1short.length; j++){
		   if(L1base[0] == L1short[j]) OUT=OUT+L1short[j]+":"+L1base[1]+",";
		}
	    }
 	    OUT = OUT.substring(0,OUT.length-1);
	    return OUT;
	}
}
