'use strict';
var SL_DARK="invert(95%)";

var SL_Languages = CUSTOM_LANGS(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages'));

(function(){GEBI("SRV0").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV0"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV0").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SRV0").addEventListener("keyup",function(){ if(GEBI("SRV0").value=="")GEBI('SRV0').value=FExtension.store.get("SL_HK_btn");},!1); } )();

(function(){GEBI("SRV1").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV1"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV1").addEventListener("mouseout",function(){ NoneColor(1); SL_KBD(0);},!1); } )();

(function(){GEBI("SRV2").addEventListener("click",function(){ SL_ACTIVE = GEBI("SRV2"); SL_TMP=SL_ACTIVE.value; SL_ACTIVE.focus();SL_ACTIVE.select();SL_KBD(1);},!1); } )();
(function(){GEBI("SRV2").addEventListener("mouseout",function(){ SL_KBD(0);},!1); } )();
(function(){GEBI("SRV2").addEventListener("keyup",function(){ if(GEBI("SRV2").value=="")GEBI('SRV2').value=FExtension.store.get("SL_HK_gt2");},!1); } )();

(function(){GEBI("SL_del1").addEventListener("click",function(){SL_del(1);NoneColor(1); VERIFY();},!1);} )();
(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options(0);},!1);} )();
(function(){GEBI("SL_save_button2").addEventListener("click",function(){save_options(0);},!1);} )();
(function(){GEBI("SL_info").addEventListener("click",function(){FExtension.browserPopup.openNewTab(this.href);},!1);} )();
(function(){GEBI("SL_LOC").addEventListener("change",function(){SL_SAVE_LOC();},!1);} )();

(function(){GEBI("SL_HK0").addEventListener("click",function(){ SL_HIDE_HK("SL_HK0","SL_HIDE0");VERIFY();},!1); } )();
(function(){GEBI("SL_HK1").addEventListener("click",function(){ SL_HIDE_HK("SL_HK1","SL_HIDE1");VERIFY();},!1); } )();
(function(){GEBI("SL_HK2").addEventListener("click",function(){ SL_HIDE_HK("SL_HK2","SL_HIDE2");VERIFY();},!1); } )();

(function(){GEBI("SL_LNG_STATUS").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down_box").addEventListener("click",function(){ SL_LANGS(); },!1); } )();
(function(){GEBI("SL_down").addEventListener("click",function(){ SL_LANGS(); },!1); } )();

(function(){GEBI("SL_OtherTr").addEventListener("click",function(){ SL_SHOWHIDEPROVIDERS(); },!1); } )();
(function(){window.addEventListener("mousemove",function(){NoneColor(1);},!1);} )();

(function(){GEBI("SL_THEME").addEventListener("change",function(){SL_SAVE_THEME();},!1);} )();




(function(){
    window.addEventListener('load',function(){
        GEBI('SL_translate_container').style.opacity="1";
	CONSTRUCTOR();
	var OB = GEBI('SL_langSrc_tr');

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

	var OB3 = GEBI('SL_langDst_tr');
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
	INIT();

    },!1);
})();


function CONSTRUCTOR(){
	GEBI('SL_BG_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSLBG_op')));
	GEBI('SL_setLS4allTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSLsetLS4allTr')));
	GEBI('SLSeSo').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeSo')));
	GEBI('SLSeTa').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSeTa')));
	GEBI('SL_TR_op').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTR_op')));
	GEBI('SL_DetSoLaAu').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetSoLaAu')));
	GEBI('SL_enable_dict').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnable_Dict')));
	GEBI('SL_showBW').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extShowBW')));
	GEBI('SL_ChFS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extChFS')));
	GEBI('SL_FS_small').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_small')));
	GEBI('SL_FS_large').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extFS_large')));
	GEBI('SL_HotKeys').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extHotKeys')));
	GEBI('SL_TOMS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTOMS')));
	GEBI('SL_InvTr').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extInvTr')));
	GEBI('SL_del1').title=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDelete');
	GEBI('SL_EnTH').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extEnTH')));
	GEBI('SL_TrHi').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTrHist')));
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
	GEBI('SL_save_button2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
	GEBI('SL_OptTrBut').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptTrBut')));
	GEBI('SL_il').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLOC')));
	GEBI('SL_SaveText_gt').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveText')));
	GEBI('SL_L_BOX').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')+":"));
	GEBI('SL_LNG_STATUS').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCustomize')));

	GEBI('SL_LIST_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIST_TR_PR')));
	GEBI('SL_SET_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSET_TR_PR')));
	GEBI('SL_SHOWHIDE_TR_PR').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSHOWHIDE_TR_PR')));

	GEBI('SL_theme_ttl').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extTHEME')));
	GEBI('SL_theme_1').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLIGHT')));
	GEBI('SL_theme_2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDARK')));

	switch(PLATFORM){
	 case "Opera" : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-opera/opera-imtranslator-options/"; break;
	 case "Chrome": GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/imtranslator-for-chrome/chrome-imtranslator-options/"; break;
	 default      : GEBI('SL_info').href="https://about.imtranslator.net/tutorials/presentations/";break;
	}
	PR_BUILDER("SL_ALL_PROVIDERS_GT");
	ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}




function INIT(){
  ACTIVATE_MENU_ELEMENT(1);
  GEBI("SL_LOC").value=FExtension.store.get("SL_LOCALIZATION");

  var mySL_langSrc_tr = FExtension.store.get("SL_langSrc");
  var mySL_langSrc_trSelect = GEBI("SL_langSrc_tr");                                                         
  for (var i = 0; i < mySL_langSrc_trSelect.options.length; i++) {
    var mySL_langSrc_trOption = mySL_langSrc_trSelect.options[i];
    if (mySL_langSrc_trOption.value == mySL_langSrc_tr) {
      mySL_langSrc_trOption.selected = "true";
      break;
    }
  }

  var mySL_langDst_tr = FExtension.store.get("SL_langDst");
  var mySL_langDst_trSelect = GEBI("SL_langDst_tr");
  for (var i = 0; i < mySL_langDst_trSelect.options.length; i++) {
    var mySL_langDst_trOption = mySL_langDst_trSelect.options[i];
    if (mySL_langDst_trOption.value == mySL_langDst_tr) {
      mySL_langDst_trOption.selected = "true";
      break;
    }
  }

  var SL_TH_1 = FExtension.store.get("SL_TH_1");
  if(SL_TH_1=="1")  GEBI("SL_TH_1").checked = true;
  else GEBI("SL_TH_1").checked = false;

  var SL_global_lng = FExtension.store.get("SL_global_lng");
  if(SL_global_lng=="true")  GEBI("SL_global_lng").checked = true;
  else GEBI("SL_global_lng").checked = false;

  var SL_no_detect = FExtension.store.get("SL_no_detect");
  if(SL_no_detect=="true")  GEBI("SL_no_detect").checked = true;
  else GEBI("SL_no_detect").checked = false;

  var SL_dict = FExtension.store.get("SL_dict");
  if(SL_dict=="true")  GEBI("SL_dictionary").checked = true;
  else GEBI("SL_dictionary").checked = false;

  var SL_OtherTr = FExtension.store.get("SL_other_gt");
  if(SL_OtherTr=="1"){
	GEBI("SL_OtherTr").checked = true;
  }else{
	GEBI("SL_OtherTr").checked = false;
  }	

  var SL_pr_gt = FExtension.store.get("SL_pr_gt");
  if(SL_pr_gt=="1") GEBI("SL_pr_gt").checked = true;
  else	GEBI("SL_pr_gt").checked = false;
  SL_SHOWHIDEPROVIDERS();


  var mySL_show_back = FExtension.store.get("SL_BACK_VIEW");
  if(mySL_show_back==1)  GEBI("SL_show_back").checked = true;
  else GEBI("SL_show_back").checked = false;

  var mySL_Fontsize = FExtension.store.get("SL_Fontsize");
  var mySL_FontsizeSelect = GEBI("SL_Fontsize");
  for (var i = 0; i < mySL_FontsizeSelect.options.length; i++) {
    var mySL_FontsizeOption = mySL_FontsizeSelect.options[i];
    if (mySL_FontsizeOption.value == mySL_Fontsize) {
      mySL_FontsizeOption.selected = "true";
      break;
    }
  }

  // Hotkeys block

  var mySL_HKset = FExtension.store.get("SL_HKset").split("|");
  var mySL_HK = mySL_HKset[2];
  if(mySL_HK=="true")  GEBI("SL_HK1").checked = true;
  else GEBI("SL_HK1").checked = false;

  var mySL_HKset_inv = FExtension.store.get("SL_HKset_inv").split("|");
  var mySL_HK_inv = mySL_HKset_inv[2];
  if(mySL_HK_inv=="true")  GEBI("SL_HK2").checked = true;
  else GEBI("SL_HK2").checked = false;


  if(FExtension.store.get("SL_HK_gt1")!=""){
	GEBI('SRV1').value=FExtension.store.get("SL_HK_gt1");
	GEBI('SRV1').style.color="#000";
  } else {
	GEBI('SRV1').value="None";
	GEBI('SRV1').style.color="#ccc";
  }
  GEBI('SRV2').value=FExtension.store.get("SL_HK_gt2");

  if(FExtension.store.get("SL_HK_btnbox")=="true") GEBI('SL_HK0').checked=true;
  else GEBI('SL_HK0').checked=false;
  GEBI('SRV0').value=FExtension.store.get("SL_HK_btn");


  SL_HIDE_HK("SL_HK0","SL_HIDE0");
  SL_HIDE_HK("SL_HK1","SL_HIDE1");
  SL_HIDE_HK("SL_HK2","SL_HIDE2");


  if(FExtension.store.get("SL_SaveText_box_gt")==1) GEBI('SL_SaveText_box_gt').checked=true;
  else GEBI('SL_SaveText_box_gt').checked=false;

  var SL_THEMEmode = FExtension.store.get("THEMEmode");
  if(SL_THEMEmode==0)  GEBI("SL_THEME").value = 0;
  else GEBI("SL_THEME").value = 1;
  save_options(1);
}

function save_options(st) {
 if(VERIFY_ALL_TABS(1) == true){
  var SL_select_S = GEBI("SL_langSrc_tr");
  var SL_select_T = GEBI("SL_langDst_tr");
  var SL_select_FS = GEBI("SL_Fontsize");
 
   if(SL_select_S.value!=SL_select_T.value){
	   if(GEBI("SL_TH_1").checked==true) FExtension.store.set("SL_TH_1", "1");
	   else FExtension.store.set("SL_TH_1", "0");

   
	   if(GEBI("SL_global_lng").checked==true){

		   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
		   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
	
		   FExtension.store.set("SL_langSrc", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc2", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_bbl", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_wpt", SL_select_S.children[SL_select_S.selectedIndex].value);
		   FExtension.store.set("SL_langSrc_it", SL_select_S.children[SL_select_S.selectedIndex].value);
	
		   FExtension.store.set("SL_langDst", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst2", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_bbl", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_wpt", SL_select_T.children[SL_select_T.selectedIndex].value);
		   FExtension.store.set("SL_langDst_it", SL_select_T.children[SL_select_T.selectedIndex].value);

		   FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_bbl", GEBI("SL_no_detect").checked);
		   FExtension.store.set("SL_no_detect_it", GEBI("SL_no_detect").checked);

		   FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_wpt", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_bbl", SL_select_T.children[SL_select_T.selectedIndex].text);
		   FExtension.store.set("SL_langDst_name_it", SL_select_T.children[SL_select_T.selectedIndex].text);

	   	} else {
		   FExtension.store.set("SL_langDst_name", SL_select_T.children[SL_select_T.selectedIndex].text);
	   	   FExtension.store.set("SL_global_lng", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_bbl", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_wpt", GEBI("SL_global_lng").checked);
	   	   FExtension.store.set("SL_global_lng_it", GEBI("SL_global_lng").checked);
	   	}

	        if(GEBI("SL_pr_gt").checked==true){
		   SAVE_LIST_PROVIDERS_SYN("SL_ALL_PROVIDERS_GT","SL_ALL_PROVIDERS_BBL");
		   FExtension.store.set("SL_pr_gt", "1");
		   FExtension.store.set("SL_pr_bbl", "1");
		        if(GEBI("SL_OtherTr").checked == true) {
				FExtension.store.set("SL_other_bbl", "1");
				FExtension.store.set("SL_other_gt", "1");
		        }else{
				FExtension.store.set("SL_other_bbl", "0");
				FExtension.store.set("SL_other_gt", "0");
			}
	   	} else {
	   	   SAVE_LIST_PROVIDERS("SL_ALL_PROVIDERS_GT");
		   FExtension.store.set("SL_pr_gt", "0");
		   FExtension.store.set("SL_pr_bbl", "0");
		        if(GEBI("SL_OtherTr").checked == true) {
				FExtension.store.set("SL_other_gt", "1");
		        }else{
				FExtension.store.set("SL_other_gt", "0");
			}
	   	}

		//------TIME STAMP--------------
		new Date().getTime();
		FExtension.store.set("SL_TS", Date.now());
		//==============================
		var SL_langSrc_tr = SL_select_S.children[SL_select_S.selectedIndex].value;
		FExtension.store.set("SL_langSrc", SL_langSrc_tr);

		FExtension.store.set("SL_langSrc2",SL_langSrc_tr);

		var SL_langDst_tr = SL_select_T.children[SL_select_T.selectedIndex].value;
		FExtension.store.set("SL_langDst", SL_langDst_tr);
		FExtension.store.set("SL_langDst2", SL_langDst_tr);
	
		FExtension.store.set("SL_no_detect", GEBI("SL_no_detect").checked);
	
		var SL_langDst_name = SL_select_T.children[SL_select_T.selectedIndex].text;
		FExtension.store.set("SL_langDst_name", SL_langDst_name);

 	        var SL_Fontsize = SL_select_FS.children[SL_select_FS.selectedIndex].value;
	        FExtension.store.set("SL_Fontsize", SL_Fontsize);
	        FExtension.store.set("SL_Fontsize2", SL_Fontsize);

		FExtension.store.set("SL_dict", GEBI("SL_dictionary").checked);
		FExtension.store.set("SL_show_back", GEBI("SL_show_back").checked);
		FExtension.store.set("SL_show_back2", GEBI("SL_show_back").checked);

		if(GEBI("SL_show_back").checked==true)	FExtension.store.set("SL_BACK_VIEW",1);
		else	FExtension.store.set("SL_BACK_VIEW",2);


		FExtension.store.set("SL_translatorFK", SL_HK_SPLIT("SRV2",1));
		FExtension.store.set("SL_translatorFK_inv", SL_HK_SPLIT("SRV1",1));
	
		var SL_HKset = 3;
	        SL_HKset = SL_HKset + "|" + GET_CODE(SL_HK_SPLIT("SRV2",2));
	   	SL_HKset = SL_HKset + "|" + GEBI("SL_HK1").checked;	
		FExtension.store.set("SL_HKset", SL_HKset);

		FExtension.store.set("SL_HKset_inv", "3|90|"+GEBI("SL_HK2").checked);

		if(GEBI('SRV1').value!="None")	FExtension.store.set("SL_HK_gt1", GEBI('SRV1').value);
		else FExtension.store.set("SL_HK_gt1", "");
		FExtension.store.set("SL_HK_gt2", GEBI('SRV2').value);

		FExtension.store.set("SL_HK_btn", GEBI('SRV0').value);
		if(GEBI('SL_HK0').checked==true) FExtension.store.set("SL_HK_btnbox", "true");
		else FExtension.store.set("SL_HK_btnbox", "false");

		FExtension.store.set("SL_Flag", "FALSE");

		if(GEBI('SL_SaveText_box_gt').checked==true) FExtension.store.set("SL_SaveText_box_gt",1);
		else FExtension.store.set("SL_SaveText_box_gt",0);

		


		FExtension.bg.ImTranslatorBG.SL_WorkingSet();
	        FExtension.bg.FExtension.browser.refreshSettings();

		FExtension.bg.ImTranslatorBG.DIC_TRIGGER = 0;
		ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
                GEBI('SL_kbd').style.display='none';
		if(st==0){
	                FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
        	        FExtension.AddHtmlToObj("SL_status2","img","../../img/util/indicator.gif");
			setTimeout(function() {
			   SL_status.innerText = "";
			   SL_status2.innerText = "";
			}, 2000);
		}
   }else{ 
	  alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extS_T_L_diff'));
   }
 } else DO_IFRAME(1);
}

function GEBI(id){ return document.getElementById(id);}


function VERIFY(ob){
 if(GEBI("SRV0").value==""){
	GEBI('SRV0').value=FExtension.store.get("SL_HK_btn");
	GEBI('SL_kbd').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK');
 }	
 if(GEBI("SRV2").value==""){
	GEBI('SRV2').value=FExtension.store.get("SL_HK_gt2");
	GEBI('SL_kbd').innerText = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extUseHK');
 }	
 var ARR = new Array(3);
 ARR[0] = GEBI("SL_HK0").checked+"|"+GEBI("SRV0").value;
 ARR[1] = GEBI("SL_HK1").checked+"|"+GEBI("SRV1").value;
 ARR[2] = GEBI("SL_HK2").checked+"|"+GEBI("SRV2").value;
 GEBI("SRV0").style.background='#FFF'; 
 GEBI("SRV1").style.background='#FFF';
 GEBI("SRV2").style.background='#FFF';
 if(ARR[0]==ARR[1]){GEBI("SRV0").style.background='#F0D3D1'; GEBI("SRV1").style.background='#F0D3D1';}
 if(ARR[1]==ARR[2]){GEBI("SRV1").style.background='#F0D3D1'; GEBI("SRV2").style.background='#F0D3D1';}
 if(ARR[0]==ARR[2]){GEBI("SRV0").style.background='#F0D3D1'; GEBI("SRV2").style.background='#F0D3D1';}

 if(VERIFY_ALL_TABS(1) != true){   
   DO_IFRAME(1);
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
  GEBI("SL_langSrc_tr").value=FExtension.store.get("SL_langSrc_tr");
  GEBI("SL_langDst_tr").value=FExtension.store.get("SL_langDst_tr");
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
		var clr_deact="#BDBDBD";
		GEBI("SL_translate_container").style.filter=SL_DARK;
		GEBI("SL_save_button").style.filter=SL_DARK;
		var LBLS = document.getElementsByClassName("SL_BG_op");
		for(var i=0; i<LBLS.length; i++) LBLS[i].style.color=clr;
		var A = document.getElementsByTagName("a");
		for(var i=0; i<A.length; i++) A[i].style.color=clr;

		setTimeout(function() {
			var SL_lngSrc_opt = GEBI("SL_langSrc_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_lngSrc_opt = GEBI("SL_langDst_tr").getElementsByTagName("option");
			for(var j=0; j<SL_lngSrc_opt.length; j++) SL_lngSrc_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
			var SL_fnt_opt = GEBI("SL_Fontsize").getElementsByTagName("option");
			for(var j=0; j<SL_fnt_opt.length; j++) SL_fnt_opt[j].setAttribute("style", "background:"+bg+" !important;color:#fff;");
		}, 1000);
		
		if(GEBI("item-0")) GEBI("item-0").style.borderRight="10px solid "+clr;	
		if(GEBI("item-1")) GEBI("item-1").style.borderRight="10px solid "+clr;
		if(GEBI("item-2")) GEBI("item-2").style.borderRight="10px solid "+clr;
		if(GEBI("item-3")) GEBI("item-3").style.borderRight="10px solid "+clr;
		GEBI("SL_AUTOKEYS").style.filter=SL_DARK;	
	}
}