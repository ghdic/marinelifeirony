ImTranslatorBG = {
	/////////////
	ADVkey: 1,
	// 1 - show for all
	// 2 - show for new
	// 3 - show for old
	// 4 - do not show for all
	/////////////
	DIC_TRIGGER: 0,
        tempresp: "",
	seltext: null,
	myWindow: "",
	NORUN: 0,
	ImTranslator_URL: "http://translate.imtranslator.net/1/",
	TextTransLimit: 8000,
	ImTranslator_Wconst: 550,
	ImTranslator_Hconst: 550,
        THE_URL: "",
        URL: "",
	first_run: false,
	the_ID0: null,
	the_ID1: null,
	the_ID2: null,
	the_ID3: null,
	the_ID4: null,
	the_ID5: null,
	the_ID6: null,
	the_ID7: null,
	the_ID8: null,
	the_ID9: null,
        ALLvoices: "",
        BUBBLE_RESP: "",
        BUBBLE_DET: "",
        INLINE_RESP: "",
	SLIDL: "",
	TRIGGER: 0,
	IT_DetLang: "",
        TMP_HIST_SEG: "",
        TMP_IT_SEG: "",
        SL_Y_KEYS: "trnsl.1.1.20181102T213252Z.15973c8fd1497069.dfef0ce2d1d66c4b3a560986cfd349cc27adceef,trnsl.1.1.20181102T213332Z.79148d90f1c6e2d5.c05d93cb4000e5eb194a8cb0302a2577e1786456,trnsl.1.1.20181102T213412Z.b7d99cd224b50875.78b25ec3b559d218c468a15718d62aa9160a6775,trnsl.1.1.20181102T213431Z.541628d09094c1a3.ff27af10a741cd223c176acde97e02d088e5f924,trnsl.1.1.20181102T213450Z.93ccf977a373c675.e773350d58a6b56434efb4e1192683e45462d7e9,trnsl.1.1.20181102T213509Z.f880b66413c0aaf3.9571c4386c6aeb148626ba31ec284691dec1ccaf,trnsl.1.1.20181102T213527Z.eb68115e91aab47f.4da25db7117bff3b15b1dc06fababa6a3c3a8535,trnsl.1.1.20181102T213549Z.ae5a65262a8dcd37.6d7ca0bc28077563a22044c73982101d802110ce,trnsl.1.1.20181102T213613Z.0bad11f72f75fcfa.5a93be6a7aa651b1ef3a36f1fe4ca9af3ac7e32b,trnsl.1.1.20181102T213633Z.a390634b03f595d9.451e188304339141a5c73bcd8b5c25bc0afa4dd9,trnsl.1.1.20181102T213652Z.d9d75034bf77120a.1737bc1c6984c39aeccf2e3581077be809b09b45,trnsl.1.1.20181102T213710Z.8b323dc6d80bba83.f83adcebeaca98ce4445a3d0d328acb59fb577a4,trnsl.1.1.20181102T213729Z.d50920bce790c915.e87f433ef69c108970909acd514734b31556ca4b,trnsl.1.1.20181102T213749Z.3e2b20c226adc8f7.fa0e8f8179d9824864262c0df8d98a222bf06e95,trnsl.1.1.20181102T213808Z.9c3b0910f60f8844.d7a5174868016700c629708e491842a4ff7dfff4,trnsl.1.1.20181102T213936Z.7c005f281fd3959e.a88a3f0411a0b373f941de434e960ec512f1892b,trnsl.1.1.20181102T214014Z.c351b40bd641f99c.114eb8303466d0add7fbca0f7a661d75def7f4c9,trnsl.1.1.20181102T214042Z.77ed3fa8560a999d.9001ccdb59651617814c0720a35dfc1c4ca32bc1,trnsl.1.1.20181102T214151Z.8c6ed1edcf6b527c.7a505097fe32ea5711ff27d44fadd1f84d64e87f,trnsl.1.1.20181102T204954Z.06a524538afb5370.d7c3461460c2e788cb6f67da941b076d65ee49f4,trnsl.1.1.20181102T205629Z.8c5a5671b2c94734.1cebf2b46d03aa6f21a3aada2c6f0dea72b2bb7c,trnsl.1.1.20181102T205740Z.53924bf8bf038b66.1497238b25def89dc7ef38dc919556eb18419aee,trnsl.1.1.20181102T205833Z.6fa2c1193d34ae03.095847fc36981d0abbc9f2d08ff4f2209ce4cbc9,trnsl.1.1.20181102T205859Z.f48f25f673c18de8.2662ca40ff4d9276e19d1a751353976374eb5027,trnsl.1.1.20181102T205922Z.8fcd584cb97e7b7b.96635d8adeb31ac33d8af5f1b84b94bca7785a1b,trnsl.1.1.20181102T205943Z.c107053b80b3da23.33f28db3a836c230ab1fb2ec519c94e6b07f9375,trnsl.1.1.20181102T210007Z.3aba0562159ceb75.5ff0ac290dbd2d01a62023b130581f594c65bd62,trnsl.1.1.20181102T210030Z.48694ecb9d7aef4e.39aa18ca356b09014ce79c7b8cda4f56e7646f58,trnsl.1.1.20181102T210101Z.8ca38ca32d1eeae2.9cf56256c908fd101a9e0bceccaf2ffd729099c4,trnsl.1.1.20181102T210122Z.14226828ff16677d.e64bf54ba3da5fa26a43d522a979e11760cb878a,trnsl.1.1.20181102T210145Z.3ff15c7295b2dec4.252e06955b1265504be710c4871b1b829166f7e9,trnsl.1.1.20181102T210207Z.9c8d671f4e895030.90514dfd6b7cc782e3ff2bcbd046835a661106d1,trnsl.1.1.20181102T210233Z.acd76b1b0033dd87.f0d1034c8b9a9ebd5abd89a0beee582b34a3ee7a,trnsl.1.1.20181102T210309Z.084714f2e6d4c8d6.2113ff52f70e8edb8d15e5dc6b5edc04882d4847,trnsl.1.1.20181102T214252Z.c7d523a692f21cf9.f061c197cf868b9bb22fa1000ed73a131a87a241,trnsl.1.1.20181102T214324Z.68589c5b7b1beaca.4887133744773fe4890cd25061e8619d5817e545,trnsl.1.1.20181102T214351Z.a5f4ec70259dfcdd.e657e0c9a59f33274144633d7cf42475077afb67,trnsl.1.1.20181102T214416Z.cc1f850655586c0f.b6d2866d529d2e001a0318180bc7e9e715f0a5b5,trnsl.1.1.20181102T214444Z.24553e66aa23b466.be6804cb85f09c6f64c5c5f3a17720cf47dc9e86,trnsl.1.1.20181102T214947Z.dfd66bd7b21dd3af.275de56c2ea7a5109ddd1fbc43406a9f485cca65,trnsl.1.1.20181102T215052Z.ec57c48f3cb24691.54a8091b9c8f364af1a9277a7aeb642356476d87,trnsl.1.1.20181102T215122Z.af8710eead58551a.97f86308053dccb2d148577e2c023c0a13489b54,trnsl.1.1.20181102T215154Z.ae797e662ffc0055.af3030fcbd863a5cc71b24afd8a3122b5a6bc2b2,trnsl.1.1.20181102T215230Z.23c8ec80d3d564ee.0285f07c82e3d91e03c274b72d889701a7de7485,trnsl.1.1.20181102T215258Z.3d6142281267b1ee.ef871a7bae00682a9225f34f40c2084aa0cd1f51,trnsl.1.1.20181102T215327Z.b0324d3620775026.f61c65f8c6c31b2f45973397e86eeb4af8ef7bc9,trnsl.1.1.20181102T215356Z.e72ddaaa2e5d3029.fc6d21d8bf367760164caf2073be332b87e558c5,trnsl.1.1.20181102T215421Z.e7bb329825ab40c2.6b4368f077ab1f36aca314f1f5d3855de9b7ffb4,trnsl.1.1.20181102T215447Z.3d4324e2958136ff.8d6085bf3873f653c02d07433ad2f336de64c23f,trnsl.1.1.20181102T215517Z.c17384773f356575.be5756d5d3ede5b0823a865aa8b2a401d5b1cf8d,trnsl.1.1.20181102T215548Z.89db0ce5c7b3bef8.c8407a45bc8655af5ab12da309f504475756371b,trnsl.1.1.20181102T215618Z.c22f22948a0fdbd1.876a5521c7737b41b6a43ca9af0b66e3f8166ab6,trnsl.1.1.20181102T215641Z.fe52de1dc3618d73.740023052cbd6a0bc98bd5bf5ff05a55770350be,trnsl.1.1.20181102T215711Z.9c77c09515106e89.72841b56546a7f19ed8f77b27b91a6dee93a59b1,trnsl.1.1.20181102T215736Z.162caa5087e102a8.6f8bbfcf5ef76652dc6c1b3249c35fc7cd944d19,trnsl.1.1.20181102T215811Z.6e967911b314d9f2.040c8dc577ac16ddea33e33225a2b334b8fd0be3,trnsl.1.1.20181102T215859Z.467b4f132813ab8a.5c04bd040c0ddbccdb9fd1be799384e6826a5635,trnsl.1.1.20181102T220047Z.ad0e4a72ac465775.9f9a21610f30534627db70c35c2c1e453cbc7c36,trnsl.1.1.20181102T220117Z.09ce6c0292c9761c.8cc1dfc8f30b6c3bf30c8e356088ef2685f37d86",

	init: function(){

                FExtension.store.set("SL_GWPTHist", "");
		FExtension.browser.addOnRequestListener(function(request, sender, sendResponse)
		{
		    switch(request.message){
		        case 'setText':
		            window.seltext = request.data
		            break;
		        default:
		            sendResponse({data: 'Invalid arguments'});
		        	break;
		    }
		});


		if (!FExtension.store.get('ran_before')) {
			ImTranslatorBG.first_run = true;  
			FExtension.store.set('ran_before', '1');
		}


		var tmpDOM = FExtension.store.get("SL_DOM");
		if(tmpDOM==null) FExtension.store.set("SL_DOM", "auto");
		else {
			if(tmpDOM!="auto" && tmpDOM!="com" && tmpDOM!="com.hk" && tmpDOM!="com.tw" && tmpDOM!="co.jp" && tmpDOM!="co.kr" && tmpDOM!="com.tr" && tmpDOM!="com.ua" && tmpDOM!="com.vn" && tmpDOM!="co.in" && tmpDOM!="co.uk" && tmpDOM!="cn" && tmpDOM!="de" && tmpDOM!="fr" && tmpDOM!="it" && tmpDOM!="pl" && tmpDOM!="ru" ) FExtension.store.set("SL_DOM", "auto");
		}

	        var manifestData = chrome.app.getDetails();
        	var version = manifestData.version;
        	var ADV = 0;
		if(ImTranslatorBG.ADVkey==2 && FExtension.store.get("FRUN")==0) ADV = 1; 

		if(FExtension.store.get("SL_Version") != "0015.40"){
			if (ImTranslatorBG.first_run) { 
				ImTranslatorBG.setDefault();
				FExtension.browser.getVersion(function(version){
					FExtension.store.set("SL_Version", version);
					FExtension.store.set("ADV", 0);
					FExtension.store.set("FRUN", 1);
					ADV = 1;
				})			
			} else { 
                        	if(FExtension.store.get("SL_Version") != version){
					FExtension.store.set("SL_Version", version);
					FExtension.store.set("ADV", 0);
					ADV = 1;
				}
			}
		}

                if(FExtension.store.get("ADV") == 0 && ADV == 0){
			ImTranslatorBG.SL_RunWelcomePage(); 
			FExtension.store.set("ADV", 1);
		}                                               
			
		// RESET FORMER CS
			// PL TRANSLATOR
			FExtension.store.set("PLT_TTSvolume", 10);
			FExtension.store.set("PLT_PROV", "Google");
			FExtension.store.set("PLT_OLD_TS_TR", "");
			FExtension.store.set("PLT_TR_FIRSTRUN", "");
			FExtension.store.set("PLT_LOC", "");

			// PL DICTIONARY
			FExtension.store.set("PLD_TTSvolume", 10);
			FExtension.store.set("PLD_DPROV", "Google");
			FExtension.store.set("PLD_OLD_TS", "");
			FExtension.store.set("PLD_DIC_FIRSTRUN", "");
			FExtension.store.set("PLD_LOC", "");

			// OPTIONS
			FExtension.store.set("SL_anchor", "");
			FExtension.store.set("SL_sort", "");

		// RESET FORMER CS



		if(FExtension.store.get("SL_CM1")==1){
			ImTranslatorBG.the_ID0 = FExtension.browser.createContextMenus("ImTranslator",ImTranslatorBG.ContMenuClick, false);
		}

		if(FExtension.store.get("SL_CM1")==1){
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}

		if(FExtension.store.get("SL_CM2")==1){
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
	    	}
		if(FExtension.store.get("SL_CM3")==1){
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
	    	}

		if(FExtension.store.get("SL_CM7")==1){
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
	    	}


		if(FExtension.store.get("SL_CM4")==1){
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
	    	}
		if(FExtension.store.get("SL_CM5")==1){
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM6")==1){
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}


		if(FExtension.store.get("SL_ENABLE")=='false') ImTranslatorBG.SL_callbackRequestToChangeRightClickMenu(0);

		ImTranslatorBG.LOC_TABLE();
		
		ImTranslator_inliner.init();
/*
		var SL_TMPTMP1=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages').split(",");
		for (var i = 0; i < SL_TMPTMP1.length; i++) {
			var SL_TMPTMP2 = SL_TMPTMP1[i].split(":");
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst")) {
				FExtension.store.set("SL_langDst_name",SL_TMPTMP2[1]);
			}
			if (SL_TMPTMP2[0] == FExtension.store.get("SL_langDst_wpt")) {
				FExtension.store.set("SL_langDst_name_wpt",SL_TMPTMP2[1]);
			}
		}
*/		
		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.onMessage
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.ClearMessage
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.Status
			);

		FExtension.browser.addOnMessageListener(
				ImTranslatorBG.onMessage
		);



	        if(FExtension.store.get("SL_GVoices")=="1") ImTranslatorBG.ALLvoices=G_TTS;
	        else ImTranslatorBG.ALLvoices=SL_TTS;


	},


	NewTAB: function(url) {
	 FExtension.browser.openNewTab(url);
	},

	LOC_TABLE: function(){
          var loc = chrome.i18n.getUILanguage();

          var layers="en,zh,zt,cs,nl,tl,fr,de,el,hi,it,ja,ko,pl,pt,ro,ru,sr,es,sv,tr,uk,vi";
          if(FExtension.store.get("SL_LOCALIZATION")=="none" || FExtension.store.get("SL_LOCALIZATION")=="" || FExtension.store.get("SL_LOCALIZATION")==null){
             if(layers.indexOf(loc)==-1){
	          var tmp = loc.split("-");
        	  if(tmp.length>=2) loc = tmp[0];
	          if(loc=="fil") loc="tl";
	          if(loc=="en-US") loc="en";
	          if(loc=="en-AU") loc="en";
	          if(loc=="en-GB") loc="en";
	          if(loc=="pt-BR") loc="pt";
	          if(loc=="pt-PT") loc="pt";
	          if(loc=="es-419") loc="es";
	          if(loc=="zh-CN") loc="zh";
	          if(loc=="zh-TW") loc="zh";
	          if(layers.indexOf(loc)!=-1) FExtension.store.set("SL_LOCALIZATION",loc);
		  else FExtension.store.set("SL_LOCALIZATION","en");
	      } else FExtension.store.set("SL_LOCALIZATION",loc);
           } else {
                loc=FExtension.store.get("SL_LOCALIZATION");
	          var tmp = loc.split("-");
        	  if(tmp.length>=2) loc = tmp[0];
	          if(loc=="fil") loc="tl";
	          if(loc=="en-US") loc="en";
	          if(loc=="en-AU") loc="en";
	          if(loc=="en-GB") loc="en";
	          if(loc=="pt-BR") loc="pt";
	          if(loc=="pt-PT") loc="pt";
	          if(loc=="es-419") loc="es";
	          if(loc=="zh-CN") loc="zh";
	          if(loc=="zh-TW") loc="zh";
	          if(loc=="zt") loc="zt";
		if(layers.indexOf(loc)==-1) FExtension.store.set("SL_LOCALIZATION","en");
		else FExtension.store.set("SL_LOCALIZATION",loc);
	   }
	},


	Lexicon: function(LongLngName) {
	 LongLngName=LongLngName.replace("ька","ьку");
	 return LongLngName;
	},

	open_trans_www: function(state,lang) {
	 var EXT="";

	 if(state==1) EXT="&anno=2";
	 var URL_host=content.document.location.href;
	 var LEGO=URL_host.split("&u=");
	 if(LEGO.length>1){
	  var newLANG1=LEGO[0].split("&tl=");
	  var FINALline=newLANG1[0]+"&tl="+lang;
	  URL_host=FINALline+"&u="+LEGO[1];
	 }
	 var GOhead=0;

//	 if(URL_host.indexOf("https://")>-1) {alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;}
	 if(URL_host.indexOf("file:///")>-1) {alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;}
	 FExtension.store.set("SL_langDst_wpt", lang);

	 if(GOhead==0) ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD();

	},
	
	
	setDefault: function(){
        FExtension.store.setDefault();
	},
	

	ClearMessage: function(request, sender, sendResponse) {
	    if (request.greeting == "Clear")  ImTranslatorBG.SL_callbackRequestToAdd_Clear();
	    else{
		if(PLATFORM=="Chrome")  ImTranslatorBG.SL_callbackRequestToRemove_Clear();
	    }
	},


	onMessage: function(request, sender, sendResponse) {

		FExtension.browser.executeForSelectedTab(null, function(tab) { 
			if(tab){				
				FExtension.store.set("THE_URL", tab.url);				
			}
		});

//VK REQUEST 

		sendResponse({farewell: FExtension.store.get("SL_HKset")+"~"+FExtension.store.get("SL_HKset_inv")+"~"+FExtension.store.get("SL_langSrc_bbl")+"|"+FExtension.store.get("SL_langDst_bbl")+"|"+FExtension.store.get("SL_Fontsize_bbl")+"|"+FExtension.store.get("SL_show_button_bbl")+"|"+FExtension.store.get("SL_pin_bbl")+"|"+FExtension.store.get("SL_translation_mos_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl")+"|"+FExtension.store.get("SL_no_detect_bbl")+"|"+FExtension.store.get("SL_TS")+"|"+FExtension.store.get("SL_ENABLE")+"|"+FExtension.store.get("SL_TH_2")+"|"+FExtension.store.get("SL_TH_4")+"|"+FExtension.store.get("SL_translatorFK")+"|"+FExtension.store.get("SL_no_detect_it")+"|"+FExtension.store.get("SL_dict_bbl")+"|"+FExtension.store.get("SL_MOSHK_bbl2")+"|"+FExtension.store.get("SL_translatorFK_inv")+"~"+FExtension.store.get("SL_FK_box1")+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_shortcutInliner")+"~"+FExtension.store.get("SL_FK_box2")+"|"+FExtension.store.get("SL_inlinerFK2")+"|"+FExtension.store.get("SL_shortcutClean")+"|"+FExtension.store.get("SL_DBL_bbl")+"~"+FExtension.store.get("SL_HK_gt1")+"~"+FExtension.store.get("SL_HK_gt2")+"~"+FExtension.store.get("SL_HK_it1")+"~"+FExtension.store.get("SL_HK_it2")+"~"+FExtension.store.get("SL_HK_bb1")+"~"+FExtension.store.get("SL_other_bbl")+"~"+FExtension.store.get("SL_Timing")+"~"+FExtension.store.get("SL_Fontsize_bbl")+"~"+FExtension.store.get("SL_BBL_TS")+"~"+FExtension.store.get("SL_HK_wpt1")+"~"+FExtension.store.get("SL_HK_wpt2")+"~"+FExtension.store.get("SL_HK_opt")+"~"+FExtension.store.get("SL_HK_wptbox1")+"~"+FExtension.store.get("SL_HK_wptbox2")+"~"+FExtension.store.get("SL_HK_optbox")+"~"+FExtension.store.get("SL_langDst_wpt")+"~"+FExtension.store.get("SL_langSrc_wpt")+"~"+FExtension.store.get("SL_LOCALIZATION")+"~"+FExtension.store.get("SL_TS_LOC")+"~"+FExtension.store.get("SL_Flag")+"~"+FExtension.store.get("SL_GVoices")+"~"+FExtension.store.get("SL_SLVoices")+"~"+ImTranslatorBG.ALLvoices+"~"+FExtension.store.get("SL_SaveText_box_bbl")+"~"+FExtension.store.get("SL_LNG_LIST")+"~"+FExtension.store.get("SL_DOM")+"~"+FExtension.store.get("SL_GWPTHist")+"~BLANK~BLANK~"+FExtension.store.get("SL_GWPT_Show_Hide")+"~"+FExtension.store.get("SL_GWPT_Show_Hide_tmp")+"~"+FExtension.store.get("SL_wptDHist")+"~"+FExtension.store.get("SL_wptLHist")+"~"+FExtension.store.get("SL_wptGlobAuto")+"~"+FExtension.store.get("SL_wptGlobTb")+"~"+FExtension.store.get("SL_wptGlobTip")+"~"+FExtension.store.get("SL_wptGlobLang")+"~"+FExtension.store.get("SL_ALL_PROVIDERS_BBL")+"~"+FExtension.store.get("SL_DICT_PRESENT")+"~"+FExtension.store.get("SL_HK_bb2")+"~"+FExtension.store.get("SL_HK_bb2box")+"~"+FExtension.store.get("SL_BTN_X")+"~"+FExtension.store.get("SL_BTN_Y")+"~"+FExtension.store.get("SL_BBL_X")+"~"+FExtension.store.get("SL_BBL_Y")+"~"+FExtension.store.get("FORSEbubble")+"~"+ImTranslatorBG.BUBBLE_DET+"~"+ImTranslatorBG.BUBBLE_RESP+"~"+FExtension.store.get("TTSvolume")+"~"+FExtension.store.get("BL_D_PROV")+"~"+FExtension.store.get("BL_T_PROV")+"~"+FExtension.store.get("INLINEflip")+"~"+FExtension.store.get("SL_ALL_PROVIDERS_IT")+"~"+FExtension.store.get("THEMEmode")+"~"+FExtension.store.get("SL_Delay") });

		var RESP = request.greeting;

		setTimeout(function(){
               		if(ImTranslatorBG.TRIGGER==1){
				ImTranslatorBG.TRIGGER=0;
			}
		},1000);


		if (RESP != "" && RESP!="1" && RESP!=FExtension.store.getLocalStorage().length){
			RESP=(RESP + "").replace("{empty}",FExtension.store.get("SL_langSrc_wpt")+"|"+FExtension.store.get("SL_langDst_wpt"));
	                if(RESP.length && RESP.length>10 && RESP.indexOf("SAVE_D:>")==-1 && RESP.indexOf("SAVE_L:>")==-1 ) {

				if(request.greeting && request.greeting.indexOf("[i]") !=-1) {
				        var SAVE_I = request.greeting.replace("[i]","");
					if(ImTranslatorBG.TMP_HIST_SEG != SAVE_I){
		        	                if(RESP.indexOf('~~5^^') && FExtension.store.get("SL_TH_4")==1) FExtension.store.set("SL_History", SAVE_I + FExtension.store.get("SL_History"));
						ImTranslatorBG.TMP_HIST_SEG = SAVE_I;
					}
				}

				if(request.greeting && request.greeting.indexOf("[wp]") !=-1) {
				        var SAVE_WP = request.greeting.replace("[wp]","");
	        	                if(RESP.indexOf('~~4^^') && FExtension.store.get("SL_TH_3")==1) FExtension.store.set("SL_History", SAVE_WP + FExtension.store.get("SL_History"));
				}

				if(request.greeting && request.greeting.indexOf("[b]") !=-1) {
				        var SAVE_B = request.greeting.replace("[b]","");
	        	                if(RESP.indexOf('~~2^^') && FExtension.store.get("SL_TH_2")==1) FExtension.store.set("SL_History", SAVE_B + FExtension.store.get("SL_History"));
				}

			}
			if(request.greeting && request.greeting.indexOf("SAVE_D:>") !=-1) {
			        var SAVE_D = request.greeting.replace("SAVE_D:>","");

	                        var D_HIST = FExtension.store.get("SL_wptDHist");
                                if(D_HIST!="") {
	                                var D1 = D_HIST.split(":");
	                                var CNT1 = 0;
        	                        for(var I=0; I<D1.length; I++){
						var D2 = D1[I].split(",");
						if(SAVE_D.indexOf(D2[0])>-1){
							D_HIST = D_HIST.replace(D1[I],SAVE_D);
							FExtension.store.set("SL_GWPT_Show_Hide",D2[4]);
							FExtension.store.set("SL_GWPT_Show_Hide_tmp",D2[4]);
							CNT1++;
						}
					}
					if(CNT1==0) D_HIST = D_HIST +":"+ SAVE_D;
				} else D_HIST = SAVE_D;
			        FExtension.store.set("SL_wptDHist", D_HIST);

			}


			if(request.greeting && request.greeting.indexOf("SAVE_L:>") !=-1) {
			        var SAVE_L = request.greeting.replace("SAVE_L:>","");

	                        var L_HIST = FExtension.store.get("SL_wptLHist");
                                if(L_HIST!="") {
	                                var L1 = L_HIST.split(":");
	                                var CNT2 = 0;
        	                        for(var I=0; I<L1.length; I++){
						var L2 = L1[I].split(",");
						if(SAVE_L.indexOf(L2[0])>-1){
							L_HIST = L_HIST.replace(L1[I],SAVE_L);
							CNT2++;
						}
					}
					if(CNT2==0) L_HIST = L_HIST +":"+ SAVE_L;
				} else L_HIST = SAVE_L;
			        FExtension.store.set("SL_wptLHist", L_HIST);
			}


			if(request.greeting && request.greeting.indexOf("SAVE_COORD:>") !=-1) {
			        var COORDS = request.greeting.replace("SAVE_COORD:>","");
				var SAVE_COORDS = COORDS.split(",");
			        FExtension.store.set("SL_BBL_X", SAVE_COORDS[0]);
			        FExtension.store.set("SL_BBL_Y", SAVE_COORDS[1]);
			}

			if(request.greeting && request.greeting.indexOf("SAVE_DATA:>") !=-1) {
			        var TMPDATA = request.greeting.replace("SAVE_DATA:>","");
				var SAVE_TMPDATA = TMPDATA.split(":");
			        FExtension.store.set(SAVE_TMPDATA[0], SAVE_TMPDATA[1]);
			}

			if(request.greeting && request.greeting.indexOf("RCL:>") !=-1) {
//				ImTranslatorBG.RCL();
			}

			if(request.greeting && request.greeting.indexOf("CM_BBL:>") !=-1) {
			        var TMPDATA = request.greeting.replace("CM_BBL:>","");
                                ImTranslatorBG.SL_BBL_Reset(TMPDATA);
			}

			if(request.greeting && request.greeting.indexOf("IT:>") !=-1) {
			        var TMPDATA = request.greeting.replace("IT:>","");
				if(ImTranslatorBG.TMP_IT_SEG != TMPDATA){
					ImTranslatorBG.SL_INLINE(TMPDATA);
					ImTranslatorBG.TMP_IT_SEG = TMPDATA;
				}
			}

			if(request.greeting && request.greeting.indexOf("wpt1:>") !=-1) {
	        		var str = request.greeting.replace("wpt1:>","");
			        str = str.split("*");
				ImTranslatorBG.SL_WPT(chrome.info, chrome.tabs, str[0], str[1]);
			}
			if(request.greeting && request.greeting.indexOf("wpt2:>") !=-1) {
	        		var str = request.greeting.replace("wpt2:>","");
			        str = str.split("*");
				ImTranslatorBG.SL_WPT_MO(chrome.info, chrome.tabs, str[0], str[1]);
			}


		 if(ImTranslatorBG.SLIDL==""){

			if(request.greeting && request.greeting.indexOf("DET_GOOGLE:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("DET_GOOGLE:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_DET="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_GOOGLE_DETECT (TR_DATA[0],TR_DATA[1]);
				        var cnt=0;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){
						if(ImTranslatorBG.BUBBLE_DET!="" || cnt>25) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});                                        
						}else cnt++;
					    },50);  
	 		        	},50);  
				}
			}


			if(request.greeting && request.greeting.indexOf("TR_YANDEX:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("TR_YANDEX:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_RESP="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_YANDEX (TR_DATA[0],TR_DATA[1]);
				        var cnt=0;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){
						if(ImTranslatorBG.BUBBLE_RESP!="" || cnt>50) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});                                        
						}else cnt++;
					    },50);  
	 	        		},50);  
				}
			}


			if(request.greeting && request.greeting.indexOf("TR_GOOGLE:>") !=-1) {
			        var TR_DATA_all = request.greeting.replace("TR_GOOGLE:>","");
				var TR_DATA = TR_DATA_all.split(",");
				ImTranslatorBG.BUBBLE_RESP="";
				if(ImTranslatorBG.TRIGGER==0){
					ImTranslatorBG.TRIGGER=1;
					ImTranslatorBG.SL_GOOGLE (TR_DATA[0],TR_DATA[1]);
				        var cnt=0;
					setTimeout(function(){
					    ImTranslatorBG.SLIDL = setInterval(function(){ 						
					        var MaxTries = 25;
						if(ImTranslatorBG.BUBBLE_RESP!="" || cnt>MaxTries) {
							clearInterval(ImTranslatorBG.SLIDL);
							ImTranslatorBG.SLIDL="";
							FExtension.browser.executeForSelectedTab(null, function(tab) { 
								if(tab){
									ImTranslatorBG.SL_PopUpBubbleActivateResult(tab.info, tab);
								}
							});							
						}else{
							if (cnt==(MaxTries-1))ImTranslatorBG.BUBBLE_RESP="<#>";							
							cnt++;
						}
					    },50);  
	 	        		},50);  
				}
			}

		   }
		}
                if(FExtension.store.get("SL_TS_LOC")==1){
			FExtension.store.set("SL_TS_LOC",0);
		}
//VK REQUEST                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
	},


	Status: function(request, sender, sendResponse) {
	    if (request.method == "getStatus")	      sendResponse({status: FExtension.store.set("SL_Flag","TRUE")});
	},




        SL_callbackRequestToChangeRightClickMenu: function(st){
                if(st == 0){
			if(FExtension.store.get("SL_CM3")==1){
				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
			}
                }else{
			if(FExtension.store.get("SL_CM1")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
				ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
			}
			if(FExtension.store.get("SL_CM2")==1){
				FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
			}
			if(FExtension.store.get("SL_CM3")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
			}

			if(FExtension.store.get("SL_CM7")==1){
	                        FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
			}

		}

	},

        SL_callbackRequestToAdd_Clear: function(){	},

	SL_callbackRequestToRemove_Clear: function(){	},

	SL_callbackRequest: function(){		
		if(FExtension.store.get("SL_CM4")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID4);
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		}
		if(FExtension.store.get("SL_CM5")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM2")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
			ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
		}

	},

	SL_callbackRequest2: function(){
		if(FExtension.store.get("SL_CM1")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}
		if(FExtension.store.get("SL_CM3")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3);
			ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		}

	},


	SL_callbackRequest3: function(){
		setTimeout(function(){
			FExtension.browser.inlinerPostMessage({name:"shortcutInlinerSelectionValue", message:FExtension.store.get("SL_FK_box1")+"|"+FExtension.store.get("SL_inlinerFK1")+"|"+FExtension.store.get("SL_shortcutInliner")});
			FExtension.browser.inlinerPostMessage({name:"shortcutInlinerCleanValue", message:FExtension.store.get("SL_FK_box2")+"|"+FExtension.store.get("SL_inlinerFK2")+"|"+FExtension.store.get("SL_shortcutClean")});
		},3500);
	},

	SL_callbackRequest4: function(){
		if(FExtension.store.get("SL_CM6")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID6);
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}

	},

	SL_PopUpBubbleActivateResult: function(info, tab){
		 clearInterval(ImTranslatorBG.SLIDL);
		 chrome.tabs.executeScript(tab.id, {
		    code: "ImTranslatorDataEvent.mousedown();"
		 });
	},


	SL_PopUpBubble: function(info, tab){
		var ST = 0;
		if(tab.id==-1) ST=1;   
		if(tab.url.toLowerCase().indexOf("extension://")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf(".pdf")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("chrome://extensions/")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("addons.opera.com/")!=-1 && tab.url.indexOf("/extensions")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("addons.mozilla.org/")!=-1 && tab.url.indexOf("/firefox")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("mensuel.framapad.org")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("oasis.sandstorm.io")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("chrome.google.com/webstore/")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("etherpad.org")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("about:")!=-1 && tab.url.toLowerCase().indexOf("://")==-1) ST=1;
		if(tab.url.toLowerCase().indexOf("chrome://settings/")!=-1) ST=1;
		if(tab.url.toLowerCase().indexOf("file:///")!=-1) ST=1;

		if(ST==1){
                      ImTranslatorBG.ContMenuClick(info,tab);
		}else{
			 chrome.tabs.executeScript(tab.id, {
			    code: 'TranslatorIM.SL_BUBBLE_FROM_CM(window.e, 0);'
			 });
		}		
	},

	SL_InlineActivateResult: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: "TranslatorIM.InlineDataTransmitter('"+escape(ImTranslatorBG.INLINE_RESP)+"');"
		 });
	},

	SL_callbackRequest4LOC: function(){
		if(FExtension.store.get("SL_CM1")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID1);
			ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
		}

		if(FExtension.store.get("SL_CM4")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID4);
			ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		}
		if(FExtension.store.get("SL_CM5")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID5);
			ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
		}
		if(FExtension.store.get("SL_CM3")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID3); //4
			ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		}
		if(FExtension.store.get("SL_CM2")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID2);
			ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
		}
		if(FExtension.store.get("SL_CM6")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID6);
			ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
		}
		if(FExtension.store.get("SL_CM7")==1){
			FExtension.browser.removeContextMenus(ImTranslatorBG.the_ID7);
			ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
		}

	},


	GetLongLanguageName: function(code){
		var temp=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages').split(',');
		var lng="";
		var output="Spanish";
		for(var i=0; i<temp.length; i++){
			lng=temp[i].split(":");
		 	if(lng[0]==code) {
				output=lng[1]; 
				break;
			}
		}
		return (output);
       	},

	ContMenuClick: function(info, tab) {
	        var s="undefined";
        	if(typeof info != "undefined"){
	            s=String(info.selectionText);
	        } else {
        	    s=String(FExtension.browser.getSelectionText());
	        }

		s = decodeURIComponent(encodeURIComponent(s).replace(/%20%20%20/ig,"%0D%0D"));
		s = s.replace(/Â/ig,"");

		if(s!='undefined'){
	            FExtension.browser.sendMessageTabs({greeting: "hello2"}, function(response) {
        	    if(response){
		       // console.log(response.farewell);
                    }
		    });
		    setTimeout(function(){
			    window.blur();
			    s=s.replace(/(^[\s]+|[\s]+$)/g, '');
			    var theQ=s.split(" ").length;

			    if(s.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
			    if(FExtension.store.get("SL_dict")=="false") theQ=100;
	 		    if(s.match(/[\u3400-\u9FBF]/) && s.length>1) theQ=100;
	 		    if(ImTranslatorBG.DIC_TRIGGER != 0) theQ = 100;

	 		    if(FExtension.store.get("SL_SaveText_box_gt")==1) FExtension.store.set("SL_SavedText_gt",s);

			    if(theQ==1){
				ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../html/popup/dictionary.html", s);
			    } else {
				ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("../../html/popup/translator.html", s);			
			    }
			    if(ImTranslatorBG.myWindow)ImTranslatorBG.myWindow.focus(); 
	            },500);

		 }else{
		    setTimeout(function(){
		   	window.blur();
		   	if(!ImTranslatorBG.myWindow){
        		        FExtension.browser.sendMessageTabs({greeting: "hello"}, function(response) {
		                if(response){
                		       // console.log(response.farewell);
		                }
                		});

	                	setTimeout(function(){
	        	            ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("translator.html", s);
        	        	},500);
		   	}else {
				if(ImTranslatorBG.myWindow.name==""){
                		    FExtension.browser.sendMessageTabs({greeting: "hello"}, function(response) {
		                    if(response){
			     		 //   console.log(response.farewell);
                		    }
		                    });

		                    setTimeout(function(){
                		        ImTranslatorBG.myWindow = FExtension.browser.openPopUpByURL("translator.html", s);
		                    },500);
				}
		   	}	
		  	if(ImTranslatorBG.myWindow)ImTranslatorBG.myWindow.focus(); 
	            },500);
		 }
	},


	SL_WEB_PAGE_TRANSLATION_PRELOAD: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WPT(0);'
		 });		
	},

	SL_WEB_PAGE_TRANSLATION_MO_PRELOAD: function(info, tab){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WPT(1);'
		 });		
	},

	
	SL_WPT: function (info, tab, url, sl) {

		var URL_host= FExtension.browser.getCurrentUrl(tab);
		if (url!="") URL_host=url;
		var langS=FExtension.store.get("SL_langSrc_wpt");

		langS=sl;
		var langD=FExtension.store.get("SL_langDst_wpt");

		//FLIP
		if(langS == langD && FExtension.store.get("SL_langSrc_wpt")!="auto") langD = FExtension.store.get("SL_langSrc_wpt");

		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+langD;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;
		}

		if(GOhead==0){
			var dom = FExtension.store.get("SL_DOM");
			if(dom == "auto") dom = "com";
			ImTranslatorBG.THE_URL = "https://translate.google."+dom+"/translate?depth=1&hl="+chrome.i18n.getUILanguage()+"&rurl=translate.google.com&sl="+langS+"&tl="+langD+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=3;
				ImTranslatorBG.THE_URL = decodeURIComponent(ImTranslatorBG.THE_URL);
				URL_host = decodeURIComponent(URL_host);
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~"+langS+"|"+langD+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			FExtension.browser.openNewTab(ImTranslatorBG.THE_URL);
		}
	},

	SL_WPT_MO: function (info, tab, url, sl) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		if (url!="") URL_host=url;
		var langS=FExtension.store.get("SL_langSrc_wpt");

		langS=sl;

		var langD=FExtension.store.get("SL_langDst_wpt");
		//FLIP
		if(langS == langD && FExtension.store.get("SL_langSrc_wpt")!="auto") langD = FExtension.store.get("SL_langSrc_wpt");

		var LEGO=URL_host.split("&u=");
		if(LEGO.length>1){
			var newLANG1=LEGO[0].split("&tl=");
			var FINALline=newLANG1[0]+"&tl="+langD;
			URL_host=FINALline+"&u="+LEGO[1];
		}
		var GOhead=0;
/*
		if(URL_host.indexOf("https://")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert1'));GOhead=1;
		}
*/
		if(URL_host.indexOf("file:///")>-1) {
			alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extWPTalert2'));GOhead=1;
		}
		if(GOhead==0){
			var dom = FExtension.store.get("SL_DOM");
			if(dom == "auto") dom = "com";
			ImTranslatorBG.THE_URL = "https://translate.google."+dom+"/translate?depth=1&anno=2&hl="+chrome.i18n.getUILanguage()+"&rurl=translate.google.com&sl="+langS+"&tl="+langD+"&u="+URL_host;
			if (FExtension.store.get("SL_TH_3")==1){
				var SLnow = new Date();
				SLnow=SLnow.toString();
	            		var TMPtime=SLnow.split(" ");
	            		var CurDT=TMPtime[1]+" "+TMPtime[2]+" "+TMPtime[3]+", "+TMPtime[4];
	            		var tp=3;
				ImTranslatorBG.THE_URL = decodeURIComponent(ImTranslatorBG.THE_URL);
				URL_host = decodeURIComponent(URL_host);
	            		FExtension.store.set("SL_History", URL_host + "~~" + ImTranslatorBG.THE_URL + "~~"+langS+"|"+langD+"~~"+ ImTranslatorBG.THE_URL+"~~"+CurDT+"~~"+tp+"^^" + FExtension.store.get("SL_History"));
			}
			FExtension.browser.openNewTab(ImTranslatorBG.THE_URL);
		}
	},
	

	SL_WEB_PAGE_TRANSLATION: function(info, tab) {
		var URL_host= FExtension.browser.getCurrentUrl(tab);
		FExtension.store.set("SL_GWPTHist","");
		setTimeout(function(){
		 chrome.tabs.executeScript(tab.id, {
		    code: 'TranslatorIM.SL_WEB_PAGE_TRANSLATION_FROM_CM_AND_HK("'+FExtension.store.get("SL_wptGlobAuto")+'","reset");'
		 });
		},500);
	},


	
	SL_SET_TRANSLATION_LNG: function (info, tab){
		FExtension.browser.openNewTab(FExtension.browser.getPopUpURL("options-router.html", true));
	},


	SL_RunWelcomePage: function(){
	        if(ImTranslatorBG.ADVkey<4){
		 	//NEW PARAMS---------------------
		 	FExtension.store.loadNewParams();
		 	FExtension.browser.openNewTab("http://imtranslator.net/Translator-for-"+PLATFORM+"-Imtranslator.asp");
		}
	},

	Version: function(){
	        var manifestData = chrome.app.getDetails();
        	var version = manifestData.version;
        	return(version);
	},
/*
	SL_BGRequest: function(){

	  alert("ok");
	},
*/
	SL_WorkingSet: function(){
	     try{
		FExtension.store.save_LOC4CONTEXT();
		chrome.contextMenus.removeAll();

		var CNT=0;
		for(var i=1; i<=8; i++){
			CNT = CNT + FExtension.store.get("SL_CM"+i)*1;
		}
		if(CNT!=0){
			if(FExtension.store.get("SL_CM1")==1){
				ImTranslatorBG.the_ID0 = FExtension.browser.createContextMenus("ImTranslator",ImTranslatorBG.ContMenuClick, false);
			}

			if(FExtension.store.get("SL_CM1")==1){
				if(FExtension.store.get("SL_langDst2") != null && FExtension.store.get("SL_langDst2") != "" ){
					ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2"))),ImTranslatorBG.ContMenuClick, true);
				} else {
					ImTranslatorBG.the_ID1 = FExtension.browser.createContextMenus("ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick, true);
				}
			}

			if(FExtension.store.get("SL_CM2")==1){
				ImTranslatorBG.the_ID2 = FExtension.browser.createContextMenus("Inline Translator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " "+ ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_it"))),ImTranslator_inliner.inlinerContextOnClick, true);
	    		}
			if(FExtension.store.get("SL_CM3")==1){
				ImTranslatorBG.the_ID3 = FExtension.browser.createContextMenus("Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))),ImTranslatorBG.SL_PopUpBubble, true);
		    	}

			if(FExtension.store.get("SL_CM4")==1){
				ImTranslatorBG.the_ID4 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransPageTo')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION, false);
		    	}
			if(FExtension.store.get("SL_CM5")==1){
				ImTranslatorBG.the_ID5 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMMouseOverTransTo') + " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_wpt"))),ImTranslatorBG.SL_WEB_PAGE_TRANSLATION_MO_PRELOAD, false);
			}
			if(FExtension.store.get("SL_CM6")==1){
				ImTranslatorBG.the_ID6 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extOptions')+" ("+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMcl')+")",ImTranslatorBG.SL_SET_TRANSLATION_LNG, false);
			}

			if(FExtension.store.get("SL_CM7")==1){
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, false);
				ImTranslatorBG.the_ID7 = FExtension.browser.createContextMenus(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMct'),ImTranslator_inliner.inlinerContextClearOnClick, true);
			}

		}
	    } catch (ex){}	
	},


	SL_Planshet_Reset: function(){
	   try{
		FExtension.store.save_LOC4CONTEXT();
		if(FExtension.store.get("SL_CM1")==1){
			if(FExtension.store.get("SL_langDst2") != null && FExtension.store.get("SL_langDst2") != "" ){
				FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst2"))),ImTranslatorBG.ContMenuClick);
			} else {
				FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID1, "ImTranslator: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+ " " +ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst"))),ImTranslatorBG.ContMenuClick);
			}
		}
	    } catch (ex){}	
	},


	SL_BBL_Reset: function(TMPDATA){
	   try{
		FExtension.store.save_LOC4CONTEXT();
		        if (TMPDATA){
				if(FExtension.store.get("SL_CM3")==1){
					FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID3, "Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(TMPDATA)), ImTranslatorBG.SL_PopUpBubble);
				}
			}else{
				if(FExtension.store.get("SL_CM3")==1){
					FExtension.browser.updateContextMenus(ImTranslatorBG.the_ID3, "Pop-Up Bubble: "+ FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extCMTransSel')+" " + ImTranslatorBG.Lexicon(ImTranslatorBG.GetLongLanguageName(FExtension.store.get("SL_langDst_bbl"))), ImTranslatorBG.SL_PopUpBubble);
				}
			}
	    } catch (ex){}	
	},

	getHttpRequest: function() {
	    var ajaxRequest;
	    try {
        	ajaxRequest = new XMLHttpRequest();
	    } catch (e) {
        	try {
	            ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
        	} catch (e) {
	            try {
        	        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
	            } catch (e) {
        	        return false;
	            }
        	}
	    }
	    return ajaxRequest;
	},


	SL_INLINE: function(str){

	 var TMP = str.split(":|:");
	 if(TMP.length>=7){
		 var id = TMP[0];
		 var url = TMP[1];
		 var param = TMP[2];
		 var dictionary = TMP[3];
		 var text = TMP[4];
		 var langDst = TMP[5];
		 ImTranslatorBG.URL = TMP[6];
		 var INLINEflip = FExtension.store.get("INLINEflip");
		 var theQ=text.split(" ").length;
		 if(text.match(/[$-/‧·﹕﹗！：，。﹖？:-?!.,:{-~!"^_`\[\]]/g)!=null) theQ=100;
		 if (text.match(/[\u3400-\u9FBF]/) && text.length>1) theQ=100;
		 if(theQ<=1){

		    if(INLINEflip==1){
			    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
			    if(SL_langSrc!="auto"){
				    ImTranslatorBG.INLINE_DETECTOR (text);
				    var cnt = 0;
				    var tries = 15;
				    setTimeout(function() {
			        	var SL_INLid = setInterval(function(){
						cnt++;
						if(ImTranslatorBG.IT_DetLang!="") {
							clearInterval(SL_INLid);
							if(cnt>=tries) ImTranslatorBG.IT_DetLang="en";
                                                        ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);
						}
						if(cnt > tries) clearInterval(SL_INLid);
			        	}, 50);
				    }, 50);
			     } else ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);
		    } else ImTranslatorBG.INLINE_DICTIONARY(text,url,param,dictionary,langDst,INLINEflip);

		  } else {
		    if(INLINEflip==1){
			    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
			    if(SL_langSrc!="auto"){
				    ImTranslatorBG.INLINE_DETECTOR (text);
				    var cnt = 0;
				    var tries = 15;
				    setTimeout(function() {
			        	var SL_INLid = setInterval(function(){
						cnt++;
						if(ImTranslatorBG.IT_DetLang!="") {
							clearInterval(SL_INLid);
							var ln = langDst;
							if(cnt>=tries) ImTranslatorBG.IT_DetLang="en";
							if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
							ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln, 0);
						}
						if(cnt > tries) clearInterval(SL_INLid);
			        	}, 50);
				    }, 50);
			     } else 	ImTranslatorBG.GOOGLE_INLINE_TR_API(text, langDst, 0);
		    } else ImTranslatorBG.GOOGLE_INLINE_TR_API(text, langDst, 0);
		  }
	   }
	},

	INLINE_DICTIONARY: function(text,url,param,dictionary,langDst,INLINEflip){
		    var SL_langSrc=FExtension.store.get("SL_langSrc_it");
		    var xhr = ImTranslatorBG.getHttpRequest();
		    var ln = langDst;
		    if(INLINEflip==1){
			    if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
			    var  p1 = param.split("&tl=");
			    var  p2 = p1[1].split('&');
		    	    param=p1[0]+"&tl="+ln+"&"+p2[1]+"&"+p2[2]+"&"+p2[3]+"&"+p2[4]+"&"+p2[5]+"&"+p2[6]+"&"+p2[7]+"&"+p2[8];
		    }

		    url = url + "?" + param ;
		    ImTranslatorBG.INLINE_RESP="";
		    xhr.open("POST", url, true);
		    xhr.onreadystatechange = function () {
        		if (xhr.readyState == 4) {
		            var result = xhr.responseText;
			    if(dictionary=="true"){
			     if(result.indexOf('"terms":["')!=-1){
				 dictionary=false;
				 if(result.indexOf('"terms":["')!=-1){
					 var tmp = result.split('"terms":["');
					 var tmp2 = tmp[1].split('],"');
					 result = tmp2[0].replace(/"/ig,"");
					 result = result.replace(/,/ig,", ");
				 }
				 if(result=="") result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
				 if(result.indexOf("CaptchaRedirect")!=-1 || result.indexOf("<p><b>403.</b>")!=-1) ImTranslatorBG.GOOGLE_INLINE_TR_API(text,ln,0);
			    	 else result = ImTranslatorBG.translateCallBack(result, dictionary, text);
				 ImTranslatorBG.INLINE_RESP=result;
			         ImTranslatorBG.SaveTransToHistory(text,result,5);
				 FExtension.browser.executeForSelectedTab(null, function(tab) { 
					if(tab){
						ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
				 	}
				 });
			     }
			    }if(ImTranslatorBG.INLINE_RESP=="")ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln,1);
		        }else{
        		     if(xhr.readyState==4) ImTranslatorBG.GOOGLE_INLINE_TR_API(text, ln,1);
			} 
		    }
		    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		    xhr.send(param);

	},

	GOOGLE_INLINE_TR_API: function(text,ln,st){
		ImTranslatorBG.INLINE_RESP="";
  		var num = Math.floor((Math.random() * SL_GEO.length)); 
  		var theRegion = SL_GEO[num];

		var SL_langSrc=FExtension.store.get("SL_langSrc_it");
		var SL_langDst=FExtension.store.get("SL_langDst_it");
		var INLINEflip = FExtension.store.get("INLINEflip");
		ln = SL_langDst;	
		if(INLINEflip==1){
			    if(ImTranslatorBG.IT_DetLang==ln) ln = SL_langSrc;	
		}  

		var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/t';
		var SL_Params="client=dict-chrome-ex&sl=auto&tl="+ln+"&q="+encodeURIComponent(text) + "&tbb=1&ie=UTF-8&oe=UTF-8";    
  		baseUrl = baseUrl +"?"+ SL_Params;

		var ajaxRequest;	
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }
                  var resp = "";
		  ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;
                                var result="";
                                var Gr1=resp.split('"trans":"');
                                for(var h=1; h<Gr1.length; h++){
                                    var Gr2 = Gr1[h].split('","orig"');
                                    var Gr3 = Gr2[0].replace(/\\n/ig,"\n");
                                    Gr3 = Gr3.replace(/\\"/ig,"'");
                                    Gr3 = Gr3.replace(/\\u0026/ig,"&");
               	                    Gr3 = Gr3.replace(/\\u003c/ig,"<");
               	                    Gr3 = Gr3.replace(/\\u003e/ig,">");
               	                    Gr3 = Gr3.replace(/\\u0027/ig,"'");
				    Gr3 = Gr3.charAt(0).toUpperCase() + Gr3.slice(1);
                                    result=result+Gr3;
                                }

			        if(result!="") {
					var dictionary=false;				  
					result = ImTranslatorBG.translateCallBack(result, dictionary, text);
				        ImTranslatorBG.INLINE_RESP=result;
				        ImTranslatorBG.SaveTransToHistory(text,result,5);
					FExtension.browser.executeForSelectedTab(null, function(tab) { 
						if(tab){
							ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
				 		}
					});
	  			} else ImTranslatorBG.GOOGLE_INLINE_TR_REMOTE(text,ln,st);
			}else {
				if(ajaxRequest.readyState>=4)ImTranslatorBG.GOOGLE_INLINE_TR_REMOTE(text,ln,st);
			}
		  }

		  ajaxRequest.open("GET", baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  ajaxRequest.send(SL_Params);
	},


	GOOGLE_INLINE_TR_REMOTE: function (text,ln,st){
		ImTranslatorBG.INLINE_RESP="";
		var baseUrl = ImTranslator_theurl+"dotrans.php";

	//	if(st==0) var cgi = "dir="+ImTranslatorBG.IT_DetLang+"/"+ln+"&provider=google&text="+encodeURIComponent(text);
	//	else var cgi = "dir=auto/"+ln+"&provider=google&text="+encodeURIComponent(text);
		var cgi = "dir=auto/"+ln+"&provider=google&text="+encodeURIComponent(text);

		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){  
					alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
	            var result = ajaxRequest.responseText;      
		    if(result.indexOf('>Url Too Long<')!=-1 || result.indexOf('>Request URL Too Long<>')!=-1 || result.indexOf('>Error')!=-1 || result.indexOf('"ArgumentOutOfRangeException')!=-1) result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extlim2000').replace("XXX","4000");
		    if(result.indexOf('>404 Not Found<')!=-1) result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
		    var dictionary=false;				  
		    if(result=="") result=FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extnotrsrv');
		    result = ImTranslatorBG.translateCallBack(result, dictionary, text);
		    ImTranslatorBG.INLINE_RESP=result;
	            ImTranslatorBG.SaveTransToHistory(text,result,5);
			 FExtension.browser.executeForSelectedTab(null, function(tab) { 
				if(tab){
					ImTranslatorBG.SL_InlineActivateResult(tab.info, tab);
			 	}
		    });
		}
	      }	
	     ajaxRequest.open("POST", baseUrl, true);
	     ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	     ajaxRequest.send(cgi); 
	},


	translateCallBack: function(result, text, dictionary) {
	    var translation = "";
	    if (dictionary) {
        	try {
	            result = JSON.parse(result);
        	} catch (e) {
	        }
        	if (result.dict) {
	            var dict = result.dict;
        	    if (dict.length > 0 && dict[0].terms) {
                	translation = dict[0].terms.join(', ');
	            }
        	} else {
	   //         translation = result.sentences[0].trans;
	 	        translation = result;
        	}
	    } else {
        	translation = ImTranslatorBG.get_translation(result);
	    }
	    //translation = " " + translation;
	    return(translation)
	},


	SaveTransToHistory: function(text,historyText,view) {
	        if (FExtension.store.get("SL_TH_4") == 1){
		    var mySourceLang = FExtension.store.get("SL_langSrc_it");
	    	    var myTargetLang = FExtension.store.get("SL_langDst_it");
		    if(FExtension.store.get("INLINEflip")==0) mySourceLang = "auto"
		    else {
			    if(ImTranslatorBG.IT_DetLang==myTargetLang){
				var tmp = myTargetLang;
				myTargetLang = mySourceLang;
				mySourceLang = tmp;
			    }else mySourceLang = ImTranslatorBG.IT_DetLang;
		    }
	            var SLnow = new Date();
        	    SLnow = SLnow.toString();
	            var TMPtime = SLnow.split(" ");
        	    var CurDT = TMPtime[1] + " " + TMPtime[2] + " " + TMPtime[3] + ", " + TMPtime[4];

	            text=text.replace(/~/ig," ");
        	    historyText=historyText.replace(/~/ig," ");
		    FExtension.store.set("SL_History", text + "~~" + historyText + "~~" + mySourceLang + "|" + myTargetLang + "~~" + ImTranslatorBG.URL + "~~" + CurDT + "~~" + view + "^^" + FExtension.store.get("SL_History"));
	       }
	       ImTranslatorBG.IT_DetLang="";
	},



	get_translation:function (result){
	 if(result.indexOf('<span id')!=-1){
	    if (result.indexOf('<span id=result_box class="long_text">') > -1)   var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="long_text">');
	    else var ImtranslatorGoogleResult1 = result.split('<span id=result_box class="short_text">');
	    var ImtranslatorGoogleResult2 = ImtranslatorGoogleResult1[1].split('</span></div>');
	    var ImtranslatorGoogleResult3 = ImtranslatorGoogleResult2[0].replace(/<br>/ig, '@');
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&#39;/ig, "'");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&quot;/ig, "'");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/&amp;/ig, "&");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/(<([^>]+)>)/ig, "");
	    ImtranslatorGoogleResult3 = ImtranslatorGoogleResult3.replace(/@/ig, "<br>");
	    var ImtranslatorGoogleResult4 = ImtranslatorGoogleResult3.replace(/% 20/ig, " ");
	    return ImtranslatorGoogleResult4;
	 } else return result;
	},


	SL_YANDEX: function(baseUrl, text){
	                var aKEY = ImTranslatorBG.SL_Y_KEYS.split(",")
		        var num = Math.floor((Math.random() * aKEY.length)); 
	        	var theKEY = aKEY[num];
	        	baseUrl=baseUrl.replace("-theKey-",theKEY);
		        var cgi = JSON.stringify([{'text':text}]);
			var ajaxRequest;	
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						return false;
					}
				}
			}

			ajaxRequest.onreadystatechange = function(){
			        var resp = "";
				if(ajaxRequest.readyState == 4){
			            var resp = ajaxRequest.responseText;
		        	    resp=resp.replace(/\\"/ig,"'");
		        	    if(resp.indexOf('text":["')!=-1){
			    		var R1 = resp.split('text":["');
				    	var R2 = R1[1].split('"');
			    		var R3 = R2[0];
       	        		        R3 = R3.replace(/~/ig,"\n");
		 	                resp=R3.replace(/\n/ig,"@");
					ImTranslatorBG.BUBBLE_RESP=resp;
				   } else ImTranslatorBG.BUBBLE_RESP="<#>";
				   ImTranslatorBG.TRIGGER=0;
				}
			}
			ajaxRequest.open("GET", baseUrl, true);
			ajaxRequest.setRequestHeader("Access-Control-Allow-Headers", "*");
			ajaxRequest.setRequestHeader("Access-Control-Allow-Origin", "null");
			ajaxRequest.send(cgi);
	},

	SL_GOOGLE: function(baseUrl, SL_Params){
		var theQ=0;
		if(baseUrl.indexOf("translate_a/t")!=-1) theQ=1;
		var ajaxRequest;	
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
					return false;
				}
			}
		  }
		  ajaxRequest.onreadystatechange = function(){
                        var resp = "";
			if(ajaxRequest.readyState == 4 && ajaxRequest.status == 200){
	                        resp = ajaxRequest.responseText;
				if(resp.indexOf('[{"trans":"')!=-1){
					ImTranslatorBG.BUBBLE_RESP=resp;
				} else ImTranslatorBG.BUBBLE_RESP="<#>";
				ImTranslatorBG.TRIGGER=0;
			}

		  }
		  var METHOD = "GET";
		  if(theQ==1) baseUrl = baseUrl + "?" + SL_Params;
		  else METHOD = "POST";

		  ajaxRequest.open(METHOD, baseUrl, true);
		  ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		  //if(navigator.userAgent) ajaxRequest.setRequestHeader("User-Agent", navigator.userAgent);
		  ajaxRequest.send(SL_Params);
	},

	INLINE_DETECTOR: function(text){
		  if(DET==0) ImTranslatorBG.G_INLINE_DETECT(text);
		  else ImTranslatorBG.SL_INLINE_DETECT(text);
	},


	G_INLINE_DETECT: function(text){
			var ajaxRequest;  
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
	                        var resp = "";
				if(ajaxRequest.readyState == 4){
		                        resp = ajaxRequest.responseText;
					if(resp.indexOf('[{"trans":"')!=-1){
						var resp0 = resp.split('src":"');
						var resp1 = resp0[1].split('"');
						ImTranslatorBG.IT_DetLang=resp1[0];
					} else ImTranslatorBG.SL_INLINE_DETECT(text);
				} else ImTranslatorBG.SL_INLINE_DETECT(text);
			}

			var num = Math.floor((Math.random() * SL_GEO.length)); 
			var theRegion = SL_GEO[num];

			if(FExtension.store.get("SL_DOM")!="auto") theRegion=FExtension.store.get("SL_DOM");
			var baseUrl = 'https://translate.google.'+theRegion+'/translate_a/t';
			var SL_Params="client=dict-chrome-ex&sl=auto&tl=en&q="+encodeURIComponent(text) + "&tbb=1&ie=UTF-8&oe=UTF-8";    


			baseUrl = baseUrl +"?"+ SL_Params;
			ajaxRequest.open("GET", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			ajaxRequest.send(SL_Params);         
	},

	SL_INLINE_DETECT: function(text){
	  	var theLIMIT = 100;
		var SLDImTranslator_url = ImTranslator_theurl+"ld.php?tr=pl&text="+encodeURIComponent(text,theLIMIT);

		var ajaxRequest;  
		try{
			ajaxRequest = new XMLHttpRequest();
		} catch (e){
			try{
				ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try{
					ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e){
					SL_alert(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extError1'));
					return false;
				}
			}
		}
		ajaxRequest.onreadystatechange = function(){
			if(ajaxRequest.readyState == 4){
                        	var tmp = ajaxRequest.responseText;
                        	tmp = tmp.replace("zh","zh-CN");
                        	tmp = tmp.replace("zt","zh-TW");
				if(tmp.indexOf("#|#")!=-1){
				    var tmp2 = tmp.split("#|#");
		                    ImTranslatorBG.IT_DetLang="ru";
        		            if(tmp2[0].length>0 && tmp2[0].length<7) ImTranslatorBG.IT_DetLang=tmp2[0];
			    	} else ImTranslatorBG.IT_DetLang="en";
			}
		}
		ajaxRequest.open("POST", SLDImTranslator_url, true);
		ajaxRequest.send(null);                          
	},


	SL_GOOGLE_DETECT: function(baseUrl,SL_Params){
			var ajaxRequest;  
			try{
				ajaxRequest = new XMLHttpRequest();
			} catch (e){
				try{
					ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
				} catch (e) {
					try{
						ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
					} catch (e){
						TranslatorIM.SL_alert(FExtension.element(TranslatorIM.SL_LOC,"extError1"));
						return false;
					}
				}
			}
			ajaxRequest.onreadystatechange = function(){
	                        var resp = "";
				if(ajaxRequest.readyState == 4){
		                        resp = ajaxRequest.responseText;
					if(resp.indexOf('[{"trans":"')!=-1){
						ImTranslatorBG.BUBBLE_DET=resp;
					} else ImTranslatorBG.BUBBLE_DET="<#>";
					ImTranslatorBG.TRIGGER=0;
				}
			}
			baseUrl = baseUrl +"?"+ SL_Params;
			ajaxRequest.open("GET", baseUrl, true);
		        ajaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		        //ajaxRequest.setRequestHeader("Referer", "https://translate.google.com/");
			ajaxRequest.send(SL_Params);         
	}


}

if(FExtension.browser && FExtension.browser.isLocalStoragePreset()){
	ImTranslatorBG.init();
}

