'use strict';
var SL_KSET = new Array(16,"Shift",17,"Ctrl",18,"Alt",48,"0",49,"1",50,"2",51,"3",52,"4",53,"5",54,"6",55,"7",58,"8",57,"9",81,"Q",87,"W",69,"E",82,"R",84,"T",89,"Y",85,"U",73,"I",79,"O",80,"P",65,"A",83,"S",68,"D",70,"F",71,"G",72,"H",74,"J",75,"K",76,"L",90,"Z",88,"X",67,"C",86,"V",66,"B",78,"N",77,"M");
var SL_KSET_taken = new Array("Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + T","Ctrl + O","Ctrl + S","Ctrl + D","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + N","Shift + 8","Shift + B","Shift + J","Shift + M","Alt + 8","Alt + F","Ctrl + Shift + B","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + D","Shift + P","Shift + I","Shift + G","0","D","J","E","G","F","R","S","P","Y");
var SL_KEYCOUNT = { length: 0 };
var SL_KEYSTRING = "";
var SL_TEMPKEYSTRING = "";
var SL_ACTIVE="";
var SL_TMP="";

(function(e){
	window.addEventListener("keydown",function(e){
	        var ob = SL_ACTIVE;
	          if(ob){
		    	if(!SL_KEYCOUNT[e.keyCode] && SL_KEYCOUNT.length<3)   {
        			SL_KEYCOUNT[e.keyCode] = true;
		        	SL_KEYCOUNT.length++;
                                var key=GET_KEY(e.keyCode);
				SL_KEYSTRING=SL_KEYSTRING+key+":|";
        	        	if(SL_KEYSTRING!="") SL_TEMPKEYSTRING=SL_KEYSTRING;
			}
		        ob.value="";
		  }
		setTimeout(function() {HK_CATCHER(SL_TEMPKEYSTRING,":|",ob);DO_VERIFY(ob); SL_KEYCOUNT = { length: 0 }; SL_KEYSTRING="";SL_TEMPKEYSTRING="";}, 1500);

	},!1);
})();

function FINISHING(ob){
 if(ob && ob.value!=""){
  var NewLine="";
  var ctrl="";
  var alt="";
  var shift="";
  var tmp = ob.value.split(" + ");
  for (var i=0; i<tmp.length; i++){
    if(tmp[i] == "Ctrl") ctrl=tmp[i];
    if(tmp[i] == "Alt") alt=tmp[i];
    if(tmp[i] == "Shift") shift=tmp[i];
  }
  if(ctrl!="") NewLine = NewLine + ctrl + " + ";
  if(alt!="") NewLine = NewLine + alt + " + ";
  if(shift!="") NewLine = NewLine + shift + " + ";
  for (i=0; i<tmp.length; i++){
    if(tmp[i] != "Ctrl" && tmp[i] != "Alt" && tmp[i] != "Shift") NewLine = NewLine + tmp[i] + " + ";
  }
  tmp = NewLine.split(" + ");
  NewLine="";
  for (var i=0; i<tmp.length-1; i++){
    if(i<tmp.length-2) NewLine = NewLine + tmp[i] + " + ";
    else NewLine = NewLine + tmp[i];
  }
 ob.value=NewLine;
 }

}
  

function SL_KBD(st){
 if(st==1){
	 GEBI('SL_kbd').style.display='block';
	 GEBI('SL_kbd').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK');
         GEBI('SL_kbd').style.background="#FFF";
 }//else GEBI('SL_kbd').style.display='none';
}

function HK_CATCHER(str,pat,ob){
 if(str!=""){
  str = str.replace(":|:|:|",":|");
  str = str.replace(":|:|",":|");
  var LINE = str.split(pat); 
  var newLINE="";
  var CNT = LINE.length;
  if(pat==":|") LINE.length-1;
  for (var i = 0; i < LINE.length-1; i++) {
    if(LINE[i]!=""){
      if(i<(LINE.length-2)) newLINE=newLINE + LINE[i] + " + ";
      else newLINE=newLINE + LINE[i];
    }
  }
  ob.value=newLINE;
  ob.style.color="#000";
  if(VERIFY(ob)==false)  INIT_AUTO_HK(ob.id.replace('SRV',''));  
 }
}

function GET_KEY(key){
 var out="";
 for(var i = 0; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}

function GET_CODE(key){
 var out="";
 for(var i = 1; i < SL_KSET.length; i+=2){
     if(key.toString() == SL_KSET[i].toString()) {out=SL_KSET[i+1]; break;}
 }
 return(out);
}



function SL_HK_SPLIT(ob, st){
  var tmp = GEBI(ob).value.split(" + ");
  var hks1="";
  var hks2="";
  for(var i=0; i<tmp.length; i++){
     if(tmp[i].length>1) hks1=hks1+tmp[i]+" + ";
     else hks2=hks2+tmp[i]+" + ";
  }
  hks1=hks1.substring(0,hks1.length-3);
  hks2=hks2.substring(0,hks2.length-3);
  if(st==1) return(hks1);
  else return(hks2);
}

function INIT_AUTO_HK(st){
        var box = new Array(9);
        box[0]=FExtension.store.get('SL_HK_gt1');
        box[1]=FExtension.store.get('SL_HK_gt2');
        box[2]=FExtension.store.get('SL_HK_it1');
        box[3]=FExtension.store.get('SL_HK_it2');
        box[4]=FExtension.store.get('SL_HK_bb1');
        box[5]=FExtension.store.get('SL_HK_wpt1');
        box[6]=FExtension.store.get('SL_HK_wpt2');
        box[7]=FExtension.store.get('SL_HK_opt');
        box[8]=FExtension.store.get('SL_HK_btn');

	var T = 0;
	var tempHK1 = FExtension.store.get("SL_HKset").split("|");
	if(tempHK1[2]=="true") T = "1";
	box[0]=T+"|"+box[0];

	var T = 0;
	var tempHK2 = FExtension.store.get("SL_HKset_inv").split("|");
	if(tempHK2[2]=="true") T = "1";
	box[1]=T+"|"+box[1];

	var T = 0;
	if(FExtension.store.get("SL_FK_box1") == "true") T = "1";
	box[2]=T+"|"+box[2];

	var T = 0;
	if(FExtension.store.get("SL_FK_box2") == "true") T = "1";
	box[3]=T+"|"+box[3];

	var T = 0;
	if(FExtension.store.get("SL_translation_mos_bbl") == "true") T = "1";
	box[4]=T+"|"+box[4];

	var T = 0;
	if(FExtension.store.get("SL_HK_wptbox1") == "true") T = "1";
	box[5]=T+"|"+box[5];

	var T = 0;
	if(FExtension.store.get("SL_HK_wptbox2") == "true") T = "1";
	box[6]=T+"|"+box[6];

	var T = 0;
	if(FExtension.store.get("SL_HK_optbox") == "true") T = "1";
	box[7]=T+"|"+box[7];

	var T = 0;
	if(FExtension.store.get("SL_HK_btnbox") == "true") T = "1";
	box[8]=T+"|"+box[8];

	var TT=0;
        var VERbox="";

	if(st==0){
          if(GEBI('IMT_HK0').checked==true) TT=1;
          VERbox=TT+"|"+GEBI('SRV0').value;
        }

	TT=0;
	if(st==1){
          if(GEBI('IMT_HK1').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV1').value;
        }

	TT=0;
	if(st==2){
          if(GEBI('IMT_HK2').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV2').value;
        }

	TT=0;
	if(st==3){
          if(GEBI('IMT_HK3').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV3').value;
        }

	TT=0;
	if(st==4){
          if(GEBI('IMT_HK4').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV4').value;
        }

	TT=0;
	if(st==5){
          if(GEBI('IMT_HK5').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV5').value;
        }

	TT=0;
	if(st==6){
          if(GEBI('IMT_HK6').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV6').value;
        }

	TT=0;
	if(st==7){
          if(GEBI('IMT_HK7').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV7').value;
        }

	TT=0;
	if(st==8){
          if(GEBI('IMT_HK8').checked==true) TT=1;
	  VERbox=TT+"|"+GEBI('SRV8').value;
        }
        
        var cnt=0;

        for(var i=0; i<box.length; i++){
//		alert(VERbox+" == "+ box[i]);
		if(VERbox==box[i] && st != (i+1)) cnt++; 	
	}
	if(box[1]=="" || box[3]=="" || box[5]=="") cnt++;

        if(cnt>0){
		DO_IFRAME(st);
		return false;
	} else return true;
}
function DO_IFRAME(st){
        var url = String(document.location);
        if(url.indexOf("/options-shortcuts.html")==-1){
		if(GEBI('autohotkeys')){
		  var frame = GEBI('autohotkeys');
		  if(frame)	frame.parentNode.removeChild(frame);
		}

		if(!GEBI("autohotkeys")){
		    var die = document.createElement("iframe");
		    die.src = "autohotkeys.html?"+st;
		    die.name = "autohotkeys";
		    die.id="autohotkeys";
		    die.width="640px";
		    var H = 480;
		    die.height=H+"px";
                    die.background="#eee";
		    die.scrolling="no";
		    die.frameBorder="0";
		    GEBI('SL_AUTOKEYS').style.display='block';
//		    GEBI('SL_AUTOKEYS').style.height=H+"px";
		    GEBI('SL_AUTOKEYS').appendChild(die);
		}
	}	
}

function VERIFY_ALL_TABS(st){
        var box = new Array(11);
        var cnt=0;
        box[0]="0|~";
//        if(st>2) cnt=-2;
        if(st==0 || st==1 || st == 2){
	        box[1]=GEBI('SRV0').value;
	        box[2]=GEBI('SRV1').value;
        	box[3]=GEBI('SRV2').value;
        } else {
	        box[1]=FExtension.store.get('SL_HK_btn');
	        box[2]=FExtension.store.get('SL_HK_gt1');
        	box[3]=FExtension.store.get('SL_HK_gt2');
        }


        if(st==0 || st==1 || st == 2){
		var T = 0;
		if(GEBI('SL_HK0').checked == true) T = "1";
		box[1]=T+"|"+box[1];

		var T = 0;
		if(GEBI('SL_HK1').checked == true) T = "1";
		box[2]=T+"|"+box[2];

		T = 0;
		if(GEBI('SL_HK2').checked == true) T = "1";
		box[3]=T+"|"+box[3];
	} else {
		var T = 0;
		var tm0 = FExtension.store.get("SL_HK_btnbox");
		if(tm0 == "true") T = "1";
		box[1]=T+"|"+box[1];

		var T = 0;
		var tm1 = FExtension.store.get("SL_HKset").split("|");
		if(tm1[2] == "true") T = "1";
		box[2]=T+"|"+box[2];

		T = 0;
		var tm2 = FExtension.store.get("SL_HKset_inv").split("|");
		if(tm2[2] == "true") T = "1";
		box[3]=T+"|"+box[3];
	}


        if(st==3 || st == 4){
	        box[4]=GEBI('SRV3').value;
        	box[5]=GEBI('SRV4').value;
        } else {
	        box[4]=FExtension.store.get('SL_HK_it1');
        	box[5]=FExtension.store.get('SL_HK_it2');
        }

        if(st==3 || st == 4){
		var T = 0;
		if(GEBI('SL_FK_box1').checked == true) T = "1";
		box[4]=T+"|"+box[4];

		T = 0;
		if(GEBI('SL_FK_box2').checked == true) T = "1";
		box[5]=T+"|"+box[5];
	} else {
		var T = 0;
		var tm3 = FExtension.store.get('SL_FK_box1');
		if(tm3 == 'true') T = "1";
		box[4]=T+"|"+box[4];

		T = 0;
		var tm4 = FExtension.store.get('SL_FK_box2');
		if(tm4 == 'true') T = "1";
		box[5]=T+"|"+box[5];
	}

        if(st==5){
        	box[6]=GEBI('SRV5').value;
        } else {
	        box[6]=FExtension.store.get('SL_HK_bb1');
        }

        if(st==5){
		T = 0;
		if(GEBI('SL_translation_mos_bbl').checked == true) T = "1";
		box[6]=T+"|"+box[6];
	} else {
                T = "0";
                var tm5 = FExtension.store.get("SL_translation_mos_bbl");
		if(tm5 == "true") T = "1";
		box[6]=T+"|"+box[6];
	}

        if(st==6 || st == 7){
	        box[7]=GEBI('SRV6').value;
        	box[8]=GEBI('SRV7').value;
        } else {
	        box[7]=FExtension.store.get('SL_HK_wpt1');
        	box[8]=FExtension.store.get('SL_HK_wpt2');
        }

        if(st==6 || st == 7){
		T = 0;
		if(GEBI('SL_HK6').checked == true) T = "1";
		box[7]=T+"|"+box[7];

		T = 0;
		if(GEBI('SL_HK7').checked == true) T = "1";
		box[8]=T+"|"+box[8];
	} else {
		T = 0;
		var tm6 = FExtension.store.get('SL_HK_wptbox1');
		if(tm6 == 'true') T = "1";
		box[7]=T+"|"+box[7];

		T = 0;
		var tm7 = FExtension.store.get('SL_HK_wptbox2');
		if(tm7 == 'true') T = "1";
		box[8]=T+"|"+box[8];
	}

        box[9]=FExtension.store.get('SL_HK_opt');
       	box[10]=FExtension.store.get('SL_HK_btn');

	T = 0;
	if(FExtension.store.get('SL_HK_optbox') == "true") T = "1";
	box[9]=T+"|"+box[9];

	T = 0;
	if(FExtension.store.get('SL_HK_btnbox') == "true") T = "1";
	box[10]=T+"|"+box[10];


	  for(var i=0; i<box.length-1; i++){
	   if(box[i]=="")box[i]="None";
	   for(var j=i; j<box.length-1; j++){
	     if(box[j]=="")box[j]="None";
	     if(box[j] == box[i] && j!=i){
	       cnt++;
	     }
	   }
	  }
      	for(var i=0; i<box.length-1; i++)box[i]=box[i].replace("None","");
	if(box[2]==box[4] || box[2]==box[6] || box[4]==box[6]) cnt++;

	if(cnt>0) return false;
	else return true;
}




function SL_MSG(w){
  GEBI('SL_kbd').style.background="#FFDFD7";
  GEBI('SL_kbd').style.display='block';
}


function VERIFY_TAKEN(ob){
  for(var i=0; i<SL_KSET_taken.length; i++){
     if(ob.value == SL_KSET_taken[i]){
	SL_MSG(299);
	ob.style.background="#FFDFD7";
        var txt = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extResByChrome')
        if(PLATFORM=="Opera") txt=txt.replace("Chrome","Opera");

	GEBI('SL_kbd').innerText="'"+ob.value.replace(/\s/g,"")+"' " + txt;
        ob.value=SL_TMP;
        setTimeout(function() {ob.style.background="#FFF";}, 1850);
     }
  }
}

function DO_VERIFY(ob){
  FINISHING(ob); 
  VERIFY_TAKEN(ob);
}

function SL_del(ob){
 GEBI('SL_kbd').style.display='none';
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 VERIFY_ALL_TABS(ob);
}

function NoneColor(st){
 if(GEBI("SRV"+st).value==""){
	GEBI("SRV"+st).style.color='#ccc';
	GEBI("SRV"+st).value='None';
 } else GEBI("SRV"+st).style.color='#000';
}

function SL_HIDE_HK(ob,st){
  if(GEBI(ob).checked!=true) GEBI(st).style.display="block";
  else GEBI(st).style.display="none"; 
}
