'use strict';
var SL_DARK="invert(95%)";

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

(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

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

//(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();


(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
	GEBI("SL_save_button2").addEventListener("click",function(){
		save_options();
	},!1);

})();

(function(){
	GEBI("SRV1").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV2").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV3").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();

(function(){
	GEBI("SRV4").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);	        
	},!1);
})();


(function(){
	GEBI("SRV5").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV6").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();
(function(){
	GEBI("SRV7").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV8").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
	},!1);
})();

(function(){
	GEBI("SRV9").addEventListener("keyup",function(){
 	 GEBI("SL_kbd").style.display="none";
	 DefaultText();
	 setTimeout(function() {Resolve_the_HK_conflicts();}, 1800);
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
	GEBI("IMT_HK1").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK1").checked==false) GEBI("SL_HK1").style.display='block';
		else GEBI("SL_HK1").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK2").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK2").checked==false) GEBI("SL_HK2").style.display='block';
		else GEBI("SL_HK2").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK3").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK3").checked==false) GEBI("SL_HK3").style.display='block';
		else GEBI("SL_HK3").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK4").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK4").checked==false) GEBI("SL_HK4").style.display='block';
		else GEBI("SL_HK4").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK5").addEventListener("click",function(){
		GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK5").checked==false) GEBI("SL_HK5").style.display='block';
		else GEBI("SL_HK5").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK6").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK6").checked==false) GEBI("SL_HK6").style.display='block';
		else GEBI("SL_HK6").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK7").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK7").checked==false) GEBI("SL_HK7").style.display='block';
		else GEBI("SL_HK7").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK8").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
		if(GEBI("IMT_HK8").checked==false) GEBI("SL_HK8").style.display='block';
		else GEBI("SL_HK8").style.display='none';
	        Resolve_the_HK_conflicts();
	},!1);
})();

(function(){
	GEBI("IMT_HK9").addEventListener("click",function(){
	 	GEBI("SL_kbd").style.display="none";
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


  GEBI("SL_ttl").appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
  GEBI("SL_info").title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHelp');
  GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
  GEBI('SL_save_button2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
  GEBI('SL_CLOSE').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extClose')));
  var tws = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS');
  GEBI('SL_twsc1').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc3').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc5').appendChild(document.createTextNode(tws));
  GEBI('SL_twsc6').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')));
  GEBI('SL_cit').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct')));
  GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptTrBut')));
  GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extInvTr')));
  GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));

  GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
  GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
  GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

  switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/imtranslator-opera-shortcuts/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/imtranslator-chrome-hotkeys/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
  }
  ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}


function INIT(){
  GEBI('SL_translate_container').style.opacity="1";
  ACTIVATE_MENU_ELEMENT(9);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  CONSTRUCTOR();
  DefaultText();

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

  var tempHK5 = FExtension.store.get("SL_translation_mos_bbl");
  if(tempHK5=="true"){
	 GEBI("IMT_HK5").checked=true;
         GEBI("SL_HK5").style.display="none";
  } else {
	 GEBI("IMT_HK5").checked=false;
         GEBI("SL_HK5").style.display="block";
  }
  GEBI("SRV5").value=FExtension.store.get("SL_HK_bb1");


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

  var tempHK8 = FExtension.store.get("SL_HK_optbox");
  if(tempHK8=="true"){
	 GEBI("IMT_HK8").checked=true;
         GEBI("SL_HK8").style.display="none";
  } else {
	 GEBI("IMT_HK8").checked=false;
         GEBI("SL_HK8").style.display="block";
  }
  GEBI("SRV8").value=FExtension.store.get("SL_HK_opt");

  var tempHK9 = FExtension.store.get("SL_HK_btnbox");
  if(tempHK9=="true"){
	 GEBI("IMT_HK9").checked=true;
         GEBI("SL_HK9").style.display="none";
  } else {
	 GEBI("IMT_HK9").checked=false;
         GEBI("SL_HK9").style.display="block";
  }
  GEBI("SRV9").value=FExtension.store.get("SL_HK_btn");


  var tempHK10 = FExtension.store.get("SL_HK_bb2box");
  if(tempHK10=="true"){
	 GEBI("IMT_HK10").checked=true;
         GEBI("SL_HK10").style.display="none";
  } else {
	 GEBI("IMT_HK10").checked=false;
         GEBI("SL_HK10").style.display="block";
  }
  GEBI("SRV10").value=FExtension.store.get("SL_HK_bb2").replace("Escape","Esc");

  var SL_THEMEmode = FExtension.store.get("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;

  Resolve_the_HK_conflicts();
}

function save_options(){
 if(UNBLOCK == 0) {
  var result = Resolve_the_HK_conflicts();
  if (result==0){
	  GEBI("HK_conflicts_msg").iinerText="";

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

		FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();


	  FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
	  FExtension.AddHtmlToObj("SL_status2","img","../../img/util/indicator.gif");
	  setTimeout(function() {
		SL_status.innerText = "";
		SL_status2.innerText = "";
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

  if(response>0){
         if(response2!=0) GEBI("SL_kbd").style.display="none";
         GEBI('HK_conflicts_msg').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg1')+ " " + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extkeymsg2');
  }else {
     if(response2!=0){
         GEBI("SL_kbd").style.display="block";
	 ReservedSymbol2(REZ);
     }else DefaultText();
  }
  UNBLOCK = 0;
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

function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}

function SL_SAVE_LOC(){
  FExtension.store.set("SL_LOCALIZATION", GEBI("SL_LOC").value);
  CONSTRUCTOR();
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  parent.frames["menu"].location.reload();
  location.reload();
}

function SL_SAVE_THEME(){
  FExtension.store.set("THEMEmode", GEBI("SL_THEME").value);
  new Date().getTime();
  FExtension.store.set("SL_TS_LOC", Date.now());
  FExtension.bg.ImTranslatorBG.SL_WorkingSet();
  location.reload();
}

function ACTIVATE_THEME(st){
 	if(st==1){
		var clr="#BF7D44";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("SL_save_button").style.filter=SL_DARK;
		GEBI("HK_conflicts_msg").style.filter=SL_DARK;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;
	}
}
