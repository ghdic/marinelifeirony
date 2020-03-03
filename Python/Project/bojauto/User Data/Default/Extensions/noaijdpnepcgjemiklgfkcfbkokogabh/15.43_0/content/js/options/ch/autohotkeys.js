var SL_DARK="invert(95%)";
var SL_KSET = new Array(16,"Shift",17,"Ctrl",18,"Alt",48,"0",49,"1",50,"2",51,"3",52,"4",53,"5",54,"6",55,"7",58,"8",57,"9",81,"Q",87,"W",69,"E",82,"R",84,"T",89,"Y",85,"U",73,"I",79,"O",80,"P",65,"A",83,"S",68,"D",70,"F",71,"G",72,"H",74,"J",75,"K",76,"L",90,"Z",88,"X",67,"C",86,"V",66,"B",78,"N",77,"M");
var SL_KSET_taken = new Array("Ctrl + 0","Ctrl + 1","Ctrl + 2","Ctrl + 3","Ctrl + 4","Ctrl + 5","Ctrl + 6","Ctrl + 7","Ctrl + 8","Ctrl + 9","Ctrl + T","Ctrl + O","Ctrl + S","Ctrl + D","Ctrl + F","Ctrl + G","Ctrl + H","Ctrl + J","Ctrl + N","Shift + 8","Shift + B","Shift + J","Shift + M","Alt + 8","Alt + F","Ctrl + Shift + B","Ctrl + Shift + J","Ctrl + Shift + M","Ctrl + Shift + D","Shift + P","Shift + I","Shift + G","0","D","J","E","G","F","R","S","P","Y");
var SL_KEYCOUNT = { length: 0 };
var SL_KEYSTRING = "";
var SL_TEMPKEYSTRING = "";
var SL_ACTIVE="";
var SL_TMP="";
var SL_ACTIVE_TAB=1;
var UNBLOCK = 0;
var HK1 = "";
var HK2 = "";
var HK3 = "";
var HK4 = "";
var HK5 = "";
var HK6 = "";
var HK7 = "";
var HK8 = "";
var HK9 = "";


(function(){GEBI("SRV1").addEventListener("click",function(){SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){NoneColor(1);},!1); } )();
(function(){GEBI("SL_del1").addEventListener("click",function(){SL_delme(1);},!1);} )();

(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){NoneColor(2);},!1); } )();
(function(){GEBI("SRV2").addEventListener("keyup",function(){NoBlank(2);},!1); } )();

(function(){GEBI("SRV3").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV3"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV3").addEventListener("mouseout",function(){NoneColor(3);},!1); } )();
(function(){GEBI("SL_del3").addEventListener("click",function(){SL_delme(3);},!1);} )();

(function(){GEBI("SRV4").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV4"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV4").addEventListener("mouseout",function(){NoneColor(4);},!1); } )();
(function(){GEBI("SRV4").addEventListener("keyup",function(){NoBlank(4);},!1); } )();

(function(){GEBI("SRV5").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV5"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV5").addEventListener("mouseout",function(){NoneColor(5);},!1); } )();
(function(){GEBI("SL_del5").addEventListener("click",function(){SL_delme(5);},!1);} )();

(function(){GEBI("SRV6").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV6"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV6").addEventListener("mouseout",function(){NoneColor(6);},!1); } )();
(function(){GEBI("SRV6").addEventListener("keyup",function(){NoBlank(6);},!1); } )();

(function(){GEBI("SRV7").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV7"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV7").addEventListener("mouseout",function(){NoneColor(7);},!1); } )();
(function(){GEBI("SRV7").addEventListener("keyup",function(){NoBlank(7);},!1); } )();

(function(){GEBI("SRV8").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV8"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV8").addEventListener("mouseout",function(){NoneColor(8);},!1); } )();
(function(){GEBI("SRV8").addEventListener("keyup",function(){NoBlank(8);},!1); } )();

(function(){GEBI("SRV9").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV9"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();},!1); } )();
(function(){GEBI("SRV9").addEventListener("mouseout",function(){NoneColor(9);},!1); } )();
(function(){GEBI("SRV9").addEventListener("keyup",function(){NoBlank(9);},!1); } )();

(function(){GEBI("SL_form_closer").addEventListener("click",function(){SL_close();},!1);} )();

(function(){window.addEventListener("mousemove",function(){
	NoneColor(1);
	NoneColor(2);
	NoneColor(3);
	NoneColor(4);
	NoneColor(5);
	NoneColor(6);
	NoneColor(7);
	NoneColor(8);
	NoneColor(9);
},!1);} )();

(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);

})();



(function(){
	GEBI("SRV1").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV2").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV3").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV4").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV5").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV6").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV7").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV8").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();

(function(){
	GEBI("SRV9").addEventListener("mousedown",function(){
 	GEBI("SL_kbd").style.display="none";	},!1);
})();





(function(){
	GEBI("SRV1").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV2").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV3").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV5").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV6").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();
(function(){
	GEBI("SRV7").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV8").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV9").addEventListener("keyup",function(){
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();


(function(){
	GEBI("IMT_HK1").addEventListener("click",function(){
		if(GEBI("IMT_HK1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK2").addEventListener("click",function(){
		if(GEBI("IMT_HK2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK3").addEventListener("click",function(){
		if(GEBI("IMT_HK3").checked==false) GEBI("SL_HK3").style.display='block';
		else GEBI("SL_HK3").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK4").addEventListener("click",function(){
		if(GEBI("IMT_HK4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK5").addEventListener("click",function(){
		if(GEBI("IMT_HK5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK6").addEventListener("click",function(){
		if(GEBI("IMT_HK6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK7").addEventListener("click",function(){
		if(GEBI("IMT_HK7").checked==false) GEBI("SL_HK7").style.display='block';
		else GEBI("SL_HK7").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK8").addEventListener("click",function(){
		if(GEBI("IMT_HK8").checked==false) GEBI("SL_HK8").style.display='block';
		else GEBI("SL_HK8").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK9").addEventListener("click",function(){
		if(GEBI("IMT_HK9").checked==false) GEBI("SL_HK9").style.display='block';
		else GEBI("SL_HK9").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK10").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK10").checked==false) GEBI("SL_HK10").style.display='block';
		else GEBI("SL_HK10").style.display='none';
	},!1);
})();


(function(){INIT();})();


function GEBI(id){ return document.getElementById(id);}

function CONSTRUCTOR(){
  GEBI('SL_h4').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHKconflict')));
  GEBI('SL_form_closer').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose');
  GEBI('SL_del1').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDelete');
  GEBI('SL_del3').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDelete');
  GEBI('SL_del5').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDelete');

  GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
  GEBI('SL_keys').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK')));
  var tws = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS');
  GEBI('SL_twsc1').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc3').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc5').appendChild(document.createTextNode(tws));
  GEBI('SL_cit').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct')));
  GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptTrBut')));
  GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extInvTr')));
  ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}

function INIT(){
  CONSTRUCTOR();
  DefaultText();
  var str = window.location.toString();
  var line = str.split("?");
  if(line.length>1) SL_ACTIVE_TAB = line[1];

	if(SL_ACTIVE_TAB==0 || SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){

	  if(window['parent'].GEBI("SL_HK0").checked==true){
		GEBI("IMT_HK9").checked = true;
	        GEBI("SL_HK9").style.display="none";
	  } else {
		GEBI("IMT_HK9").checked = false;
	        GEBI("SL_HK9").style.display="block";
	  }


	  if(window['parent'].GEBI("SL_HK1").checked==true){
		GEBI("IMT_HK1").checked = true;
	        GEBI("SL_HK1").style.display="none";
	  } else {
		GEBI("IMT_HK1").checked = false;
	        GEBI("SL_HK1").style.display="block";
	  }
	  if(window['parent'].GEBI("SL_HK2").checked==true){
		GEBI("IMT_HK2").checked = true;
	        GEBI("SL_HK2").style.display="none";
	  } else {
		GEBI("IMT_HK2").checked = false;
	        GEBI("SL_HK2").style.display="block";
	  }
	  GEBI('SRV9').value=window['parent'].GEBI('SRV0').value;
	  GEBI('SRV1').value=window['parent'].GEBI('SRV1').value;
	  GEBI('SRV2').value=window['parent'].GEBI('SRV2').value;
	} else {

	  if(FExtension.store.get("SL_HK_btnbox")=="true"){
		 GEBI("IMT_HK9").checked=true;
	         GEBI("SL_HK9").style.display="none";
	  } else {
		 GEBI("IMT_HK9").checked=false;
	         GEBI("SL_HK9").style.display="block";
	  }
	  GEBI("SRV9").value=FExtension.store.get("SL_HK_btn");


	  var tempHK1 = FExtension.store.get("SL_HKset").split("|");
	  if(tempHK1[2]=="true"){
		 GEBI("IMT_HK1").checked=true;
	         GEBI("SL_HK1").style.display="none";
	  } else {
		 GEBI("IMT_HK1").checked=false;
	         GEBI("SL_HK1").style.display="block";
	  }
	  GEBI("SRV1").value=FExtension.store.get("SL_HK_gt1");

	  var tempHK2 = FExtension.store.get("SL_HKset_inv").split("|");
	  if(tempHK2[2]=="true"){
		 GEBI("IMT_HK2").checked=true;
	         GEBI("SL_HK2").style.display="none";
	  } else {
		 GEBI("IMT_HK2").checked=false;
	         GEBI("SL_HK2").style.display="block";
	  }
	  GEBI("SRV2").value=FExtension.store.get("SL_HK_gt2");
	}

        if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
	  if(window['parent'].GEBI("SL_FK_box1").checked==true){
		GEBI("IMT_HK3").checked = true;
	        GEBI("SL_HK3").style.display="none";
	  } else {
		GEBI("IMT_HK3").checked = false;
	        GEBI("SL_HK3").style.display="block";
	  }
	  if(window['parent'].GEBI("SL_FK_box2").checked==true){
		GEBI("IMT_HK4").checked = true;
	        GEBI("SL_HK4").style.display="none";
	  } else {
		GEBI("IMT_HK4").checked = false;
	        GEBI("SL_HK4").style.display="block";
	  }
	  GEBI('SRV3').value=window['parent'].GEBI('SRV3').value;
	  GEBI('SRV4').value=window['parent'].GEBI('SRV4').value;
        } else {
	  var tempHK3 = FExtension.store.get("SL_FK_box1");
	  if(tempHK3=="true"){
		 GEBI("IMT_HK3").checked=true;
	         GEBI("SL_HK3").style.display="none";
	  } else {
		 GEBI("IMT_HK3").checked=false;
	         GEBI("SL_HK3").style.display="block";
	  }
	  GEBI("SRV3").value=FExtension.store.get("SL_HK_it1");

	  var tempHK4 = FExtension.store.get("SL_FK_box2");
	  if(tempHK4=="true"){
		 GEBI("IMT_HK4").checked=true;
	         GEBI("SL_HK4").style.display="none";
	  } else {
		 GEBI("IMT_HK4").checked=false;
	         GEBI("SL_HK4").style.display="block";
	  }
	  GEBI("SRV4").value=FExtension.store.get("SL_HK_it2");
	}

        if(SL_ACTIVE_TAB==5){
	  if(window['parent'].GEBI("SL_translation_mos_bbl").checked==true){
		GEBI("IMT_HK5").checked = true;
	        GEBI("SL_HK5").style.display="none";
	  } else {
		GEBI("IMT_HK5").checked = false;
	        GEBI("SL_HK5").style.display="block";
	  }
	  GEBI('SRV5').value=window['parent'].GEBI('SRV5').value;
        } else {
	  var tempHK5 = FExtension.store.get("SL_translation_mos_bbl");
	  if(tempHK5=="true"){
		 GEBI("IMT_HK5").checked=true;
	         GEBI("SL_HK5").style.display="none";
	  } else {
		 GEBI("IMT_HK5").checked=false;
	         GEBI("SL_HK5").style.display="block";
	  }
	  GEBI("SRV5").value=FExtension.store.get("SL_HK_bb1");
	}

        if(SL_ACTIVE_TAB==6 || SL_ACTIVE_TAB == 7){
	  if(window['parent'].GEBI("SL_HK6").checked==true){
		GEBI("IMT_HK6").checked = true;
	        GEBI("SL_HK6").style.display="none";
	  } else {
		GEBI("IMT_HK6").checked = false;
	        GEBI("SL_HK6").style.display="block";
	  }
	  if(window['parent'].GEBI("SL_HK7").checked==true){
		GEBI("IMT_HK7").checked = true;
	        GEBI("SL_HK7").style.display="none";
	  } else {
		GEBI("IMT_HK7").checked = false;
	        GEBI("SL_HK7").style.display="block";
	  }
	  GEBI('SRV6').value=window['parent'].GEBI('SRV6').value;
	  GEBI('SRV7').value=window['parent'].GEBI('SRV7').value;
        } else {
	  var tempHK6 = FExtension.store.get("SL_HK_wptbox1");
	  if(tempHK6=="true"){
		 GEBI("IMT_HK6").checked=true;
	         GEBI("SL_HK6").style.display="none";
	  } else {
		 GEBI("IMT_HK6").checked=false;
	         GEBI("SL_HK6").style.display="block";
	  }
	  GEBI("SRV6").value=FExtension.store.get("SL_HK_wpt1");;

	  var tempHK7 = FExtension.store.get("SL_HK_wptbox2");
	  if(tempHK7=="true"){
		 GEBI("IMT_HK7").checked=true;
	         GEBI("SL_HK7").style.display="none";
	  } else {
		 GEBI("IMT_HK7").checked=false;
	         GEBI("SL_HK7").style.display="block";
	  }
	  GEBI("SRV7").value=FExtension.store.get("SL_HK_wpt2");
	}

	var tempHK8 = FExtension.store.get("SL_HK_optbox");
	  if(tempHK8=="true"){
		 GEBI("IMT_HK8").checked=true;
	         GEBI("SL_HK8").style.display="none";
	  } else {
		 GEBI("IMT_HK8").checked=false;
	         GEBI("SL_HK8").style.display="block";
	  }
	GEBI("SRV8").value=FExtension.store.get("SL_HK_opt");

  	var tempHK10 = FExtension.store.get("SL_HK_bb2box");
  	if(tempHK10=="true"){
		 GEBI("IMT_HK10").checked=true;
        	 GEBI("SL_HK10").style.display="none";
  	} else {
		 GEBI("IMT_HK10").checked=false;
	         GEBI("SL_HK10").style.display="block";
	}
	GEBI("SRV10").value=FExtension.store.get("SL_HK_bb2").replace("Escape","Esc");

 Resolve_the_HK_conflicts();
}

function save_options(){
 if(UNBLOCK == 0) {
  var result = Resolve_the_HK_conflicts();
  if (result==0){
	  GEBI("HK_conflicts_msg").innerText="";

	        // GT
		FExtension.store.set("SL_HKset", "3|88|"+GEBI("IMT_HK1").checked);
		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("IMT_HK2").checked);
		if(GEBI('SRV1').value!="None")	FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
		else FExtension.store.set("SL_HK_gt1", "");
		FExtension.store.set("SL_HK_gt2", GEBI("SRV2").value);

	        // IT
		FExtension.store.set("SL_FK_box1", GEBI("IMT_HK3").checked);
		if(GEBI('SRV3').value!="None")	FExtension.store.set("SL_HK_it1", GEBI('SRV3').value);
		else FExtension.store.set("SL_HK_it1", "");
		FExtension.store.set("SL_FK_box2", GEBI("IMT_HK4").checked);
		FExtension.store.set("SL_HK_it2",GEBI("SRV4").value);

	        // BBL
		FExtension.store.set("SL_translation_mos_bbl", GEBI("IMT_HK5").checked);
		if(GEBI('SRV5').value!="None") FExtension.store.set("SL_HK_bb1",GEBI("SRV5").value);
		else FExtension.store.set("SL_HK_bb1","");

		FExtension.store.set("SL_HK_bb2box", GEBI("IMT_HK10").checked);
		FExtension.store.set("SL_HK_bb2", GEBI('SRV10').value.replace("Esc","Escape"));

	        // WPT
		FExtension.store.set("SL_HK_wptbox1", GEBI("IMT_HK6").checked);
		FExtension.store.set("SL_HK_wpt1",GEBI("SRV6").value);
		FExtension.store.set("SL_HK_wptbox2", GEBI("IMT_HK7").checked);
		FExtension.store.set("SL_HK_wpt2",GEBI("SRV7").value);                                                   

	        // OPT
		FExtension.store.set("SL_HK_optbox", GEBI("IMT_HK8").checked);
		FExtension.store.set("SL_HK_opt",GEBI("SRV8").value);                                                   

	        // BTN
		FExtension.store.set("SL_HK_btnbox", GEBI("IMT_HK9").checked);
		FExtension.store.set("SL_HK_btn",GEBI("SRV9").value);                                                   

		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest4();
	        FExtension.bg.FExtension.browser.refreshSettings();

         if(SL_ACTIVE_TAB==0 || SL_ACTIVE_TAB==1 || SL_ACTIVE_TAB == 2){
	        window['parent'].GEBI('SRV0').value=GEBI('SRV9').value;
	        window['parent'].GEBI('SRV1').value=GEBI('SRV1').value;
	        window['parent'].GEBI('SRV2').value=GEBI('SRV2').value;
		window['parent'].GEBI("SL_HK0").checked=GEBI("IMT_HK9").checked;
		window['parent'].GEBI("SL_HK1").checked=GEBI("IMT_HK1").checked;
		window['parent'].GEBI("SL_HK2").checked=GEBI("IMT_HK2").checked;
		if(GEBI("IMT_HK9").checked==false) window['parent'].GEBI("SL_HIDE0").style.display="block";
		else window['parent'].GEBI("SL_HIDE0").style.display="none";
		if(GEBI("IMT_HK1").checked==false) window['parent'].GEBI("SL_HIDE1").style.display="block";
		else window['parent'].GEBI("SL_HIDE1").style.display="none";
		if(GEBI("IMT_HK2").checked==false) window['parent'].GEBI("SL_HIDE2").style.display="block";
		else window['parent'].GEBI("SL_HIDE2").style.display="none";

	        window['parent'].GEBI('SRV0').style.background="#fff";
	        window['parent'].GEBI('SRV1').style.background="#fff";
	        window['parent'].GEBI('SRV2').style.background="#fff";

         }
         if(SL_ACTIVE_TAB==3 || SL_ACTIVE_TAB == 4){
	        window['parent'].GEBI('SRV3').value=GEBI('SRV3').value;
	        window['parent'].GEBI('SRV4').value=GEBI('SRV4').value;
		window['parent'].GEBI("SL_FK_box1").checked=GEBI("IMT_HK3").checked;
		window['parent'].GEBI("SL_FK_box2").checked=GEBI("IMT_HK4").checked;
		if(GEBI("IMT_HK3").checked==false) window['parent'].GEBI("SL_HIDE3").style.display="block";
		else window['parent'].GEBI("SL_HIDE3").style.display="none";
		if(GEBI("IMT_HK4").checked==false) window['parent'].GEBI("SL_HIDE4").style.display="block";
		else window['parent'].GEBI("SL_HIDE4").style.display="none";

	        window['parent'].GEBI('SRV3').style.background="#fff";
	        window['parent'].GEBI('SRV4').style.background="#fff";

         }
         if(SL_ACTIVE_TAB==5){
	        window['parent'].GEBI('SRV5').value=GEBI('SRV5').value;
		window['parent'].GEBI("SL_translation_mos_bbl").checked=GEBI("IMT_HK5").checked;
		if(GEBI("IMT_HK5").checked==false) window['parent'].GEBI("SL_HIDE5").style.display="block";
		else window['parent'].GEBI("SL_HIDE5").style.display="none";

	        window['parent'].GEBI('SRV5').style.background="#fff";

	        window['parent'].GEBI('SRV6').value=GEBI('SRV10').value;
		window['parent'].GEBI("SL_translation_mos_bbl2").checked=GEBI("IMT_HK10").checked;
		if(GEBI("IMT_HK10").checked==false) window['parent'].GEBI("SL_HIDE6").style.display="block";
		else window['parent'].GEBI("SL_HIDE6").style.display="none";

	        window['parent'].GEBI('SRV6').style.background="#fff";

         }
         if(SL_ACTIVE_TAB==6 || SL_ACTIVE_TAB == 7){
	        window['parent'].GEBI('SRV6').value=GEBI('SRV6').value;
	        window['parent'].GEBI('SRV7').value=GEBI('SRV7').value;
		window['parent'].GEBI("SL_HK6").checked=GEBI("IMT_HK6").checked;
		window['parent'].GEBI("SL_HK7").checked=GEBI("IMT_HK7").checked;
		if(GEBI("IMT_HK6").checked==false) window['parent'].GEBI("SL_HIDE6").style.display="block";
		else window['parent'].GEBI("SL_HIDE6").style.display="none";
		if(GEBI("IMT_HK7").checked==false) window['parent'].GEBI("SL_HIDE7").style.display="block";
		else window['parent'].GEBI("SL_HIDE7").style.display="none";

	        window['parent'].GEBI('SRV6').style.background="#fff";
	        window['parent'].GEBI('SRV7').style.background="#fff";

         }


	  FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
	  setTimeout(function() {
		SL_status.innerText = "";
		SL_close(); 
	  }, 2000);
  }	
 }
}



function Resolve_the_HK_conflicts(){
  UNBLOCK = 1;
  var response=0, response2=0, REZ ="";
  var HK = new Array(9);
  for(var j=0; j<HK.length; j++) GEBI("SL_HK_TR"+(j+1)).className="SLTR";
  var B = 0;
  if(GEBI("IMT_HK1").checked==true) B = 1;
  else B = 0;
  HK[0] = B + "|" + GEBI("SRV1").value;

  if(GEBI("IMT_HK2").checked==true) B = 1;
  else B = 0;
  HK[1] = B + "|" + GEBI("SRV2").value;

  if(GEBI("IMT_HK3").checked==true) B = 1;
  else B = 0;
  HK[2] = B + "|" + GEBI("SRV3").value;

  if(GEBI("IMT_HK4").checked==true) B = 1;
  else B = 0;
  HK[3] = B + "|" + GEBI("SRV4").value;

  if(GEBI("IMT_HK5").checked==true) B = 1;
  else B = 0;
  HK[4] = B + "|" + GEBI("SRV5").value;

  if(GEBI("IMT_HK6").checked==true) B = 1;
  else B = 0;
  HK[5] = B + "|" + GEBI("SRV6").value;

  if(GEBI("IMT_HK7").checked==true) B = 1;
  else B = 0;
  HK[6] = B + "|" + GEBI("SRV7").value;

  if(GEBI("IMT_HK8").checked==true) B = 1;
  else B = 0;
  HK[7] = B + "|" + GEBI("SRV8").value;

  if(GEBI("IMT_HK9").checked==true) B = 1;
  else B = 0;
  HK[8] = B + "|" + GEBI("SRV9").value;

  for(var i=0; i<HK.length; i++){
   for(j=0; j<HK.length; j++){
     if(HK[j] == HK[i] && j!=i){
       GEBI("SL_HK_TR"+(j+1)).className="SLTR_";
       response++;
     }
   }
  }
  for(var i=0; i<HK.length; i++){
   var tmp = HK[i].split("|");
   for(var j=0; j<SL_KSET_taken.length; j++){
	if(SL_KSET_taken[j].replace(/\+/g,"") == tmp[1]){
	        REZ = tmp[1];
       		response2++;		
	} 
   }
  }

  for(var i=0; i<HK.length-1; i++)HK[i]=HK[i].replace("None","");
//  if(HK[2]==HK[4] || HK[2]==HK[6] || HK[4]==HK[6]) response++;
  for(var i=0; i<HK.length; i++){
   for(j=0; j<HK.length; j++){
     if(HK[j] == HK[i] && j!=i){
       GEBI("SL_HK_TR"+(j+1)).className="SLTR_";
       response++;
     }
   }
  }


  if(response>0){
//         GEBI("SL_kbd").style.display="none";
         GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg1')+ " " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg2');
  }else {
     if(response2!=0){
         GEBI("SL_kbd").style.display="block";	 
	 ReservedSymbol2(REZ);
     }else DefaultText();
  }
  UNBLOCK = 0;
  if(response+response2==0) GEBI('SL_h4').style.display = "none";
  else GEBI('SL_h4').style.display = "block";
  return (response+response2);
}

function DefaultText(){
  GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK');
}


function VERIFY(ob){
  for(var i=1; i<=9; i++){
	 GEBI('SRV'+i).style.background="#fff";
	 if(GEBI('SRV'+i).value=="") NoBlank(ob); 
  }
 return false;
}

function SL_delme(ob){
 UNBLOCK = 1;
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 Resolve_the_HK_conflicts();
}

function NoBlank(ob){
 GEBI("SL_kbd").style.display="none";
 if(SL_ACTIVE.value==""){
   SL_ACTIVE.value=SL_TMP;GEBI('SRV'+ob).style.background="#fff"; DefaultText();
 }
}


function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  save_LOC4CONTEXT();
  parent.frames["menu"].location.reload();
  location.reload();
}

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
 if(ob.value!=""){
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
 }else GEBI('SL_kbd').style.display='none';
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
        var cnt=0;
        for(var i=0; i<box.length; i++){
		if(GEBI('SRV'+st).value==box[i] && st != (i+1)) cnt++; 	
	}
	if(box[1]=="" || box[3]=="") cnt++;
        if(cnt>0){
		//DO_IFRAME(st);
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
		    die.width="620px";
		    var H = 450;
		    die.height=H+"px";
                    die.background="#eee";
		    die.scrolling="no";
		    die.frameBorder="0";
		    GEBI('SL_AUTOKEYS').style.display='block';
		    GEBI('SL_AUTOKEYS').appendChild(die);
		}
	}	
}

function VERIFY_ALL_TABS(st){
        var box = new Array(9);
        if(st==1 || st == 2){
	        box[1]=GEBI('SRV1').value;
        	box[2]=GEBI('SRV2').value;
        } else {
	        box[1]=FExtension.store.get('SL_HK_gt1');
        	box[2]=FExtension.store.get('SL_HK_gt2');
        }
        if(st==3 || st == 4){
	        box[3]=GEBI('SRV3').value;
        	box[4]=GEBI('SRV4').value;
        } else {
	        box[3]=FExtension.store.get('SL_HK_it1');
        	box[4]=FExtension.store.get('SL_HK_it2');
        }
        if(st==5){
        	box[5]=GEBI('SRV5').value;
        } else {
	        box[5]=FExtension.store.get('SL_HK_bb1');
        }
        if(st==6 || st == 7){
	        box[6]=GEBI('SRV6').value;
        	box[7]=GEBI('SRV7').value;
        } else {
	        box[6]=FExtension.store.get('SL_HK_wpt1');
        	box[7]=FExtension.store.get('SL_HK_wpt2');
        }

        var cnt=0;
        for(var i=1; i<=box.length-1; i++){
                if(box[i]=="")box[i]="None";
	        for(var j=i+1; j<=box.length-1; j++){
		   	if(box[j]=="")box[j]="None";
			if(box[i]==box[j]) cnt++;
		}
	}

      	for(var i=0; i<box.length-1; i++)box[i]=box[i].replace("None","");
	if(box[2]==box[4] || box[2]==box[6] || box[4]==box[6]) cnt++;



	if(cnt>0) DO_IFRAME(st);
	else return true;
}

function ReservedSymbol2(k){
	GEBI('SL_kbd').style.display="block";
	GEBI('SL_kbd').style.width="150px;"
	GEBI('SL_kbd').style.marginLeft="150px;"
        GEBI('SL_kbd').style.background="#FFDFD7";
        var txt = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extResByChrome')
        if(PLATFORM=="Opera") txt=txt.replace("Chrome","Opera");
	GEBI('SL_kbd').innerText="'"+k.replace(/\s/g,"")+"' " + txt;
	Resolve_the_HK_conflicts();	
}

function VERIFY_TAKEN(ob){
  for(var i=0; i<SL_KSET_taken.length; i++){
     if(ob.value == SL_KSET_taken[i]){
        ob.style.background="#FFDFD7";
	GEBI('SL_kbd').style.display="block";
	GEBI('SL_kbd').style.width="150px;"
	GEBI('SL_kbd').style.marginLeft="150px;"
        GEBI('SL_kbd').style.background="#FFDFD7";
        var txt = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extResByChrome')
        if(PLATFORM=="Opera") txt=txt.replace("Chrome","Opera");
	GEBI('SL_kbd').innerText="'"+ob.value.replace(/\s/g,"")+"' " + txt;
        setTimeout(function() {ob.value=SL_TMP;Resolve_the_HK_conflicts();}, 1850);
        setTimeout(function() {ob.style.background="#FFF";}, 2850);	
     }
  }
}

function DO_VERIFY(ob){
  FINISHING(ob); 
  VERIFY(ob);
  VERIFY_TAKEN(ob);
//  VERIFY_ALL_TABS(ob.id.replace("SRV",""));
}

function SL_del(ob){
 GEBI('SRV'+ob).value="None";
 GEBI('SRV'+ob).style.color="#ccc";
 VERIFY_ALL_TABS(ob);
}

function NoneColor(st){
// if(GEBI("SRV"+st).value=="None" || GEBI("SRV"+st).value==""){
 if(GEBI("SRV"+st).value==""){
	GEBI("SRV"+st).style.color='#ccc';
	GEBI("SRV"+st).value='None';
 } else GEBI("SRV"+st).style.color='#000';
}

function SL_HIDE_HK(ob,st){
  if(GEBI(ob).checked!=true) GEBI(st).style.display="block";
  else GEBI(st).style.display="none"; 
}
function SL_close(){  
	window.frames['parent'].GEBI('SL_AUTOKEYS').style.display='none';
	window.frames['parent'].GEBI('SL_kbd').style.display="none";
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var lblbg="#CEF7FF";
		GEBI("SL_body1").style.filter=SL_DARK;
		GEBI("SL_HK").style.filter=SL_DARK;
		GEBI("HK_conflicts_msg").style.filter=SL_DARK;
		GEBI("SL_form_closer").style.filter=SL_DARK;
	}
}