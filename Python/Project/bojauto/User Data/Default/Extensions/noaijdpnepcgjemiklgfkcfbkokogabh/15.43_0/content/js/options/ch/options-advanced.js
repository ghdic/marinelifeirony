'use strict';
var SL_DARK="invert(95%)";

var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));

function GEBI(id){ return document.getElementById(id);}
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();
(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options(0);},!1);} )();
(function(){GEBI("SL_save_button2").addEventListener("click",function(){save_options(0);},!1);} )();
(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();

(function(){INIT();})();



function INIT(){
  ACTIVATE_MENU_ELEMENT(10);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");
  CONSTRUCTOR();
     GEBI("SL_DOM").value = FExtension.store.get("SL_DOM");

     var mySL_SLVoices = FExtension.store.get("SL_SLVoices");
     var mySL_SLVoiceSelect = GEBI("SL_SLVoiceState");
     for (var i = 0; i < mySL_SLVoiceSelect.options.length; i++) {
    	var mySL_SLVoiceOption = mySL_SLVoiceSelect.options[i];
	    if (String(mySL_SLVoiceOption.value) == String(mySL_SLVoices)) {
	      mySL_SLVoiceOption.selected = "true";
	      break;
	    }
     }
     var SL_TransButton = FExtension.store.get("SL_PrefTrans");
     GEBI("imtranslator"+SL_TransButton).checked = "true";
     for (var j = 1; j <= 7; j++){
	     var SL_CM = String(FExtension.store.get("SL_CM"+j));

	     if(SL_CM=="1") GEBI("Context"+j).checked = true;
	     else GEBI("Context"+j).checked = false;
     }


     var SL_THEMEmode = FExtension.store.get("THEMEmode");
     if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
     else GEBI("SL_THEME").value = 1;


	var OB = GEBI('SL_langSrc');
	if(FExtension.store.get("SL_LNG_LIST").indexOf("auto")!=-1 || FExtension.store.get("SL_LNG_LIST")=="all"){
		var OB1 = document.createElement('option');
		var v = document.createAttribute("value");
		v.value = "auto";
		OB1.setAttributeNode(v);
		OB1.appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetect_language_from_box')));
		OB.appendChild(OB1); 
	}
	var SL_TMP = SL_Languages.split(",");
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    var v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB.appendChild(OB2);
	}

	var OB3 = GEBI('SL_langDst');
	for(var J=0; J < SL_TMP.length; J++){
	    var SL_TMP2=SL_TMP[J].split(":");
	    var OB2 = document.createElement('option');
	    v = document.createAttribute("value");
	    v.value = SL_TMP2[0];
	    OB2.setAttributeNode(v);
	    //OB2.appendChild(document.createTextNode(SL_TMP2[1].replace("&#160;"," ")));
	    OB2.appendChild(document.createTextNode(SL_TMP2[1]));
	    OB3.appendChild(OB2);
	}

  var mySL_langSrc_bbl = FExtension.store.get("SL_langSrc_bbl");
  var mySL_langSrcSelect_bbl = GEBI("SL_langSrc");
  for (var i = 0; i < mySL_langSrcSelect_bbl.options.length; i++) {
    var mySL_langSrcOption_bbl = mySL_langSrcSelect_bbl.options[i];
    if (mySL_langSrcOption_bbl.value == mySL_langSrc_bbl) {
      mySL_langSrcOption_bbl.selected = "true";
      break;
    }
  }

  var mySL_langDst_bbl = FExtension.store.get("SL_langDst_bbl");
  var mySL_langDstSelect_bbl = GEBI("SL_langDst");
  for (var i = 0; i < mySL_langDstSelect_bbl.options.length; i++) {
    var mySL_langDstOption_bbl = mySL_langDstSelect_bbl.options[i];
    if (mySL_langDstOption_bbl.value == mySL_langDst_bbl) {
      mySL_langDstOption_bbl.selected = "true";
      break;
    }
  }

  save_options(1)
}


function ACTIVATE_MENU_ELEMENT(st){
  var win = top.frames['menu'];
  var li = win.document.getElementsByTagName("li");
  for(var i=1; i<=li.length; i++){
        if(st==i) win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-on';
        else win.document.getElementById('SL_options_menu'+i).className='SL_options-menu-off';
  }
}


function CONSTRUCTOR(){  
 GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
 GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
 GEBI('SL_save_button2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
 GEBI('SL_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV')));
 GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVTTS')));
 GEBI('SL_ADVuse').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVuse')));
 GEBI('SL_SLVoice0').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADV4lt')));
 GEBI('SL_SLVoice1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVN')));
 GEBI('SL_SLVoice2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extADVA')));
 GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
 GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));
 GEBI('SL_tb').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'exttb')));
 GEBI('SL_cm').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extcm')));
 GEBI('SL_chl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions') + " ("+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")"));
 GEBI('SL_cltr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'))); 
 GEBI('SL_PDOM').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extPDOM'))); 
 GEBI('SL_UDOM').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUDOM'))); 

 GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
 GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
 GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));
 GEBI('SL_translate_container').style.opacity="1";
	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/advanced-settings/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/advanced-settings/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/";break;
	}
 ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}


function save_options(st) {
//------TIME STAMP--------------
	new Date().getTime();
	FExtension.store.set("SL_TS", Date.now());
	FExtension.store.set("SL_BBL_TS", Date.now());
//==============================

		FExtension.store.set("SL_SLVoices", GEBI("SL_SLVoiceState").value);
		FExtension.store.set("SL_DOM", GEBI("SL_DOM").value);

		var PT=1;
                if(GEBI("imtranslator1").checked==true) PT=1;
                if(GEBI("imtranslator2").checked==true) PT=2;
                if(GEBI("imtranslator3").checked==true) PT=3;
                if(GEBI("imtranslator4").checked==true) PT=4;
                if(GEBI("imtranslator5").checked==true) PT=5;
		FExtension.store.set("SL_PrefTrans", PT);

	        for (var j = 1; j <= 7; j++){
		     var SL_CM = GEBI("Context"+j).checked;
		     var ID = "SL_CM"+j;
		     if(SL_CM==true){
			FExtension.store.set(ID, "1");
		     }else{
			FExtension.store.set(ID, "0");
		     }
	        }

	        FExtension.store.set("SL_langSrc", GEBI('SL_langSrc').value);
	        FExtension.store.set("SL_langSrc2", GEBI('SL_langSrc').value);
	        FExtension.store.set("SL_langSrc_bbl", GEBI('SL_langSrc').value);
	        FExtension.store.set("SL_langSrc_wpt", GEBI('SL_langSrc').value);
	        FExtension.store.set("SL_langSrc_it", GEBI('SL_langSrc').value);

	        FExtension.store.set("SL_langDst", GEBI('SL_langDst').value);
	        FExtension.store.set("SL_langDst2", GEBI('SL_langDst').value);
	        FExtension.store.set("SL_langDst_bbl", GEBI('SL_langDst').value);
	        FExtension.store.set("SL_langDst_wpt", GEBI('SL_langDst').value);
	        FExtension.store.set("SL_langDst_it", GEBI('SL_langDst').value);


		FExtension.store.set("SL_Flag", "FALSE");
		FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();
	        if(st==0){
		        FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
        		FExtension.AddHtmlToObj("SL_status2","img","../../img/util/indicator.gif");
			setTimeout(function() {
				SL_status.innerText = "";
				SL_status2.innerText = "";
			}, 2000);
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
		var bg="#191919";
		var clr="#BF7D44";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("SL_save_button").style.filter=SL_DARK;
		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;

		setTimeout(function() {
			var SL_DOM_opt = GEBI("SL_DOM").getElementsByTagName("option");
			for(var j=0; j<SL_DOM_opt.length; j++) SL_DOM_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_SLVoiceState_opt = GEBI("SL_SLVoiceState").getElementsByTagName("option");
			for(var j=0; j<SL_SLVoiceState_opt.length; j++) SL_SLVoiceState_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);

		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}