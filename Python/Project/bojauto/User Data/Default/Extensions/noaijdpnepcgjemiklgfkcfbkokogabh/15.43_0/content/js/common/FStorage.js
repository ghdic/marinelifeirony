try{
FExtension.store = {
    SL_BR_LN: "en",
    profile_Folder: "ImTranslator",
    cl_Profile_Name: "profile.imt",
    global_pref_data: {},
    domStorageManager: null,
    domStorageUri: null,
    ioService: null,
    scriptSecManager: null,
    scriptSecPrincipal: null,
    localStorage: (FExtension.browser.isLocalStoragePreset()) ? localStorage : null,
    cachedSbDomainName: (FExtension.browser.isLocalStoragePreset()) ? "imtranslator.net" : null,
    initialized: FExtension.browser.isLocalStoragePreset(),
    getLocalStorage: function() {
        if (FExtension.browser.isLocalStoragePreset() || FExtension.store.initialized){
            return FExtension.store.localStorage;
        }else{
            if(Object.keys(FExtension.store.global_pref_data).length == 0){
                FExtension.store.loadPrefs();
            }
            FExtension.store.global_pref_data.length = Object.keys(FExtension.store.global_pref_data).length;
            return FExtension.store.global_pref_data;
        }        
    },
    SL_CUR_LANG: function(){
		var BRloc=chrome.i18n.getUILanguage().substr(0,2);
		if(BRloc!=""){
		   var BRlanguage="en"
		   var Arr = LISTofPRpairsDefault.split(",")
		   for(var I=0; I<Arr.length; I++){
	        	var lng = Arr[I].replace("zh-TW","zh");
		        lng = lng.replace("zh-CN","zh");
		   	if(BRloc==lng){
			  BRlanguage=lng;
			  break;
			}
		   }
		}
	 return(BRlanguage);	
    },


    loadNewParams : function(){
//            FExtension.store.SL_BR_LN=FExtension.store.SL_CUR_LANG();
            //--------------------NEW HOTKEYS-------------------------------------------------------
            if(FExtension.store.get("SL_HK_gt1")==null){
                if(FExtension.store.get("SL_HK2")==null){
                         var mySL_HKset = localStorage["SL_HKset"].split("|");
                         var tmp0 = " + " + String.fromCharCode(mySL_HKset[1]);
                         if(mySL_HKset[1]==13) tmp0 = "";
			 var tmp1 = "Ctrl + Alt" + tmp0;
			 FExtension.store.set("SL_HK_gt1", tmp1);
		}
	    }
            if(FExtension.store.get("SL_HK_gt2")==null) FExtension.store.set("SL_HK_gt2", "Alt + Z");

            if(FExtension.store.get("SL_HK_it1")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_it1", "Ctrl + Alt + C");
		else FExtension.store.set("SL_HK_it1", "Alt + C");
            } else {
                 if(FExtension.store.SL_isLinux()==true && FExtension.store.get("SL_HK_it1") == "Alt + C") FExtension.store.set("SL_HK_it1", "Ctrl + Alt + C");
	    }

            if(FExtension.store.get("SL_HK_it2")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_it2", "Ctrl + Alt + X");
		else FExtension.store.set("SL_HK_it2", "Alt + X");
            } else {
                 if(FExtension.store.SL_isLinux()==true && FExtension.store.get("SL_HK_it2") == "Alt + X") FExtension.store.set("SL_HK_it2", "Ctrl + Alt + X");
	    }

            if(FExtension.store.get("SL_HK_bb1")==null){
                if(FExtension.store.get("SL_HK2")==null){
			 var tmp2 = FExtension.store.get("SL_MOSHK_bbl");
			 if(tmp2=="None") tmp2="";
			 FExtension.store.set("SL_HK_bb1", tmp2);
		}
	    }
            if(FExtension.store.get("SL_HK_bb1")=="Alt" && FExtension.store.SL_isLinux()==true) FExtension.store.set("SL_HK_bb1", "Ctrl + Alt");

            if(FExtension.store.get("SL_HK_bb2")==null) FExtension.store.set("SL_HK_bb2", "Escape");
            if(FExtension.store.get("SL_HK_bb2box")==null) FExtension.store.set("SL_HK_bb2box", "true");



            if(FExtension.store.get("SL_HK_wptbox1")==null) FExtension.store.set("SL_HK_wptbox1", "true");

            if(FExtension.store.get("SL_HK_wpt1")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_wpt1", "Ctrl + Alt + P");
		else FExtension.store.set("SL_HK_wpt1", "Alt + P");
            } else {
                 if(FExtension.store.SL_isLinux()==true && FExtension.store.get("SL_HK_wpt1") == "Alt + P") FExtension.store.set("SL_HK_wpt1", "Ctrl + Alt + P");
	    }



            if(FExtension.store.get("SL_HK_wptbox2")==null) FExtension.store.set("SL_HK_wptbox2", "true");

            if(FExtension.store.get("SL_HK_wpt2")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_wpt2", "Ctrl + Alt + M");
		else FExtension.store.set("SL_HK_wpt2", "Alt + M");
            } else {
                 if(FExtension.store.SL_isLinux()==true && FExtension.store.get("SL_HK_wpt2") == "Alt + M") FExtension.store.set("SL_HK_wpt2", "Ctrl + Alt + M");
	    }

            if(FExtension.store.get("SL_HK_optbox")==null) FExtension.store.set("SL_HK_optbox", "true");
            if(FExtension.store.get("SL_HK_opt")==null) FExtension.store.set("SL_HK_opt", "Ctrl + Alt + O");

            if(FExtension.store.get("SL_HK_btnbox")==null) FExtension.store.set("SL_HK_btnbox", "true");


            if(FExtension.store.get("SL_HK_btn")==null) FExtension.store.set("SL_HK_btn", "Ctrl + Alt + A");
            else {
                 if(FExtension.store.SL_isMacintosh()==true && FExtension.store.get("SL_HK_btn") == "Alt + A"){
                  	FExtension.store.set("SL_HK_btn", "Ctrl + Alt + A");
		 }
	    }

            if(FExtension.store.get("SL_Fontsize")==null) FExtension.store.set("SL_Fontsize", "17px");
            else {
                 if(FExtension.store.get("SL_Fontsize") == "14px"){
                  	FExtension.store.set("SL_Fontsize", "17px");
		 }
	    }


            //--------------------NEW PARAM IN GT----------------------------------------------------
            if(FExtension.store.get("SL_HKset_inv")==null) FExtension.store.set("SL_HKset_inv", "3|90|true");

            //--------------------NEW PARAM IN BBL---------------------------------------------------
            if(FExtension.store.get("SL_langDst_name_bbl")==null) FExtension.store.set("SL_langDst_name_bbl", "Spanish");
            if(FExtension.store.get("SL_DBL_bbl")==null) FExtension.store.set("SL_DBL_bbl", "false");

            //--------------------NEW PARAMS IN IT---------------------------------------------------
            if(FExtension.store.get("SL_langSrc_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_langSrc_it", FExtension.store.get("SL_langSrc"));
		else FExtension.store.set("SL_langSrc_it", "auto");		
	    }
            if(FExtension.store.get("SL_langDst_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_langDst_it", FExtension.store.get("SL_langDst"));
		else FExtension.store.set("SL_langDst_it", FExtension.store.SL_BR_LN);
	    }
            if(FExtension.store.get("SL_global_lng_it")==null){
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_global_lng_it", FExtension.store.get("SL_global_lng"));
		else FExtension.store.set("SL_global_lng_it", "false");		
	    }
            if(FExtension.store.get("SL_style")==null) FExtension.store.set("SL_style", "239e23");
            if(FExtension.store.get("SL_inject_brackets")==null) FExtension.store.set("SL_inject_brackets", "true");
            if(FExtension.store.get("SL_inject_before")==null) FExtension.store.set("SL_inject_before", "false");
            if(FExtension.store.get("SL_line_break")==null) FExtension.store.set("SL_line_break", "false");
            if(FExtension.store.get("SL_whole_word")==null) FExtension.store.set("SL_whole_word", "true");
            if(FExtension.store.get("SL_hide_translation")==null) FExtension.store.set("SL_hide_translation", "false");
            if(FExtension.store.get("SL_dictionary")==null){ 
		if(FExtension.store.get("SL_global_lng")=="true") FExtension.store.set("SL_dictionary", FExtension.store.get("SL_dict"));
		else FExtension.store.set("SL_dictionary", "true"); 
	    }	
            if(FExtension.store.get("SL_no_detect_it")==null) FExtension.store.set("SL_no_detect_it", "true");
            if(FExtension.store.get("SL_langDst_name_it")==null) FExtension.store.set("SL_langDst_name_it", "Spanish");
            if(FExtension.store.get("SL_FK_box1")==null) FExtension.store.set("SL_FK_box1", "true");
            if(FExtension.store.get("SL_FK_box2")==null) FExtension.store.set("SL_FK_box2", "true");

            //--------------------NEW PARAM Tr HISTORY-----------------------------------------------
            if(FExtension.store.get("SL_TH_4")==null) FExtension.store.set("SL_TH_4", "0");
            //--------------------NEW PARAM FOR BALLOON----------------------------------------------
            if(FExtension.store.get("SL_Timing")==null) FExtension.store.set("SL_Timing", "3");
            if(FExtension.store.get("SL_Delay")==null) FExtension.store.set("SL_Delay", "0");

            //--------------------NEW PARAMS OTHER TRANSLATORs---------------------------------------
            if(FExtension.store.get("SL_other_gt")==null) FExtension.store.set("SL_other_gt", "1");
            if(FExtension.store.get("SL_other_bbl")==null) FExtension.store.set("SL_other_bbl", "1");
            if(FExtension.store.get("SL_other_it")==null) FExtension.store.set("SL_other_it", "1");
            if(FExtension.store.get("SL_other_wpt")==null) FExtension.store.set("SL_other_wpt", "1");

            //--------------------NEW PARAMS PROVIDERs---------------------------------------
            if(FExtension.store.get("SL_pr_gt")==null) FExtension.store.set("SL_pr_gt", "1");
            if(FExtension.store.get("SL_pr_bbl")==null) FExtension.store.set("SL_pr_bbl", "1");

            //--------------------NEW PARAMS LOCALSs---------------------------------------
            if(FExtension.store.get("SL_show_back2")==null) FExtension.store.set("SL_show_back2", FExtension.store.set("SL_show_back"));
            if(FExtension.store.get("SL_BBL_TS")==null) FExtension.store.set("SL_BBL_TS", 0);

            if(FExtension.store.get("SL_TS_LOC")==null) FExtension.store.set("SL_TS_LOC", Date.now());
            if(FExtension.store.get("SL_LOCALIZATION")==null) ImTranslatorBG.LOC_TABLE();

            if(FExtension.store.get("SL_Dtext")==null) FExtension.store.set("SL_Dtext", "");

            //--------------------NEW PARAMS ADVANCED---------------------------------------
            if(FExtension.store.get("SL_GVoices")==null) FExtension.store.set("SL_GVoices", "1");
            if(FExtension.store.get("SL_SLVoices")==null) FExtension.store.set("SL_SLVoices", "0");
            //--------------------NEW PARAMS ADVANCED---------------------------------------

            if(FExtension.store.get("SL_SaveText_box_gt")==null) FExtension.store.set("SL_SaveText_box_gt", "1");
            if(FExtension.store.get("SL_SavedText_gt")==null) FExtension.store.set("SL_SavedText_gt", "");
            if(FExtension.store.get("SL_SaveText_box_bbl")==null) FExtension.store.set("SL_SaveText_box_bbl", "0");

            if(FExtension.store.get("SL_LNG_LIST")==null) FExtension.store.set("SL_LNG_LIST", "all");

            if(FExtension.store.get("SL_BACK_VIEW")==null) FExtension.store.set("SL_BACK_VIEW", 2);
	    if(FExtension.store.get("SL_show_back")=="true") FExtension.store.set("SL_BACK_VIEW", 1);

	    if(FExtension.store.get("SL_PrefTrans")==null) FExtension.store.set("SL_PrefTrans", "1");
	    if(FExtension.store.get("SL_CM1")==null) FExtension.store.set("SL_CM1", "1");
	    if(FExtension.store.get("SL_CM2")==null) FExtension.store.set("SL_CM2", "1");
	    if(FExtension.store.get("SL_CM3")==null) FExtension.store.set("SL_CM3", "1");
	    if(FExtension.store.get("SL_CM4")==null) FExtension.store.set("SL_CM4", "1");
	    if(FExtension.store.get("SL_CM5")==null) FExtension.store.set("SL_CM5", "1");
	    if(FExtension.store.get("SL_CM6")==null) FExtension.store.set("SL_CM6", "1");
	    if(FExtension.store.get("SL_CM7")==null) FExtension.store.set("SL_CM7", "1");
             
	    if(FExtension.store.get("SL_DOM")==null) FExtension.store.set("SL_DOM", "auto");

	    if(FExtension.store.get("SL_wptDHist")==null) FExtension.store.set("SL_wptDHist", "");
	    if(FExtension.store.get("SL_wptLHist")==null) FExtension.store.set("SL_wptLHist", "");
	    if(FExtension.store.get("SL_wptGlobAuto")==null) FExtension.store.set("SL_wptGlobAuto", "0");
	    if(FExtension.store.get("SL_wptGlobTb")==null) FExtension.store.set("SL_wptGlobTb", "1");	
	    if(FExtension.store.get("SL_wptGlobTip")==null) FExtension.store.set("SL_wptGlobTip", "1");	
	    if(FExtension.store.get("SL_wptGlobLang")==null) FExtension.store.set("SL_wptGlobLang", FExtension.store.SL_BR_LN);	

	    var LIST_PR_BBL = "Google,Microsoft,Translator,Yandex";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_BBL")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_BBL", LIST_PR_BBL);
	    } else {
		var ARR_BBL = FExtension.store.get("SL_ALL_PROVIDERS_BBL").split(",");
		var OUT_BBL = "";
		for (var Xbbl=0; Xbbl<ARR_BBL.length; Xbbl++){
		    if(LIST_PR_BBL.indexOf(ARR_BBL[Xbbl])!=-1) OUT_BBL=OUT_BBL+ARR_BBL[Xbbl]+",";
		}
		OUT_BBL = OUT_BBL.substring(0, OUT_BBL.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_BBL", OUT_BBL);
	    }

	    var LIST_PR_GT = "Google,Microsoft,Translator,Yandex";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_GT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_GT", LIST_PR_GT);
	    } else {
		var ARR_GT = FExtension.store.get("SL_ALL_PROVIDERS_GT").split(",");
		var OUT_GT = "";
		for (var Xgt=0; Xgt<ARR_GT.length; Xgt++){
		    if(LIST_PR_GT.indexOf(ARR_GT[Xgt])!=-1) OUT_GT=OUT_GT+ARR_GT[Xgt]+",";
		}
		OUT_GT = OUT_GT.substring(0, OUT_GT.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_GT", OUT_GT);
	    }
	    if(FExtension.store.get("SL_DICT_PRESENT")==null) FExtension.store.set("SL_DICT_PRESENT", "Google:1,Microsoft:0,Translator:0,Yandex:0");

	    var LIST_PR_IT = "Google,Microsoft";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_IT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_IT", LIST_PR_IT);
	    } else {
		var ARR_IT = FExtension.store.get("SL_ALL_PROVIDERS_IT").split(",");
		var OUT_IT = "";
		for (var Xgt=0; Xgt<ARR_IT.length; Xgt++){
		    if(LIST_PR_IT.indexOf(ARR_IT[Xgt])!=-1) OUT_IT=OUT_IT+ARR_IT[Xgt]+",";
		}
		OUT_IT = OUT_IT.substring(0, OUT_IT.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_IT", OUT_IT);
	    }

	    //COORDINATES
	    if(FExtension.store.get("SL_BTN_X")==null) FExtension.store.set("SL_BTN_X", 0);
	    if(FExtension.store.get("SL_BTN_Y")==null) FExtension.store.set("SL_BTN_Y", 0);
	    if(FExtension.store.get("SL_BBL_X")==null) FExtension.store.set("SL_BBL_X", 0);
	    if(FExtension.store.get("SL_BBL_Y")==null) FExtension.store.set("SL_BBL_Y", 0);

	    //FORSE BUBBLE
	    if(FExtension.store.get("FORSEbubble")==null) FExtension.store.set("FORSEbubble", 0);

	    //FORMER BBL CS
	    if(FExtension.store.get("TTSvolume")==null) FExtension.store.set("TTSvolume", 10);
	    if(FExtension.store.get("BL_D_PROV")==null) FExtension.store.set("BL_D_PROV", "Google");
	    if(FExtension.store.get("BL_T_PROV")==null) FExtension.store.set("BL_T_PROV", "Google");


	    //INLINE FLIP
	    if(FExtension.store.get("INLINEflip")==null) FExtension.store.set("INLINEflip", 0);

	    //THEME MODE
	    if(FExtension.store.get("THEMEmode")==null) FExtension.store.set("THEMEmode", 0);

	    //ADV
	    if(FExtension.store.get("ADV")==null) FExtension.store.set("ADV", 0);
	    if(FExtension.store.get("FRUN")==null) FExtension.store.set("FRUN", 0);

	    //FORMER PLANSHET DIC CS
	    if(FExtension.store.get("PLD_TTSvolume")==null) FExtension.store.set("PLD_TTSvolume", 10);
	    if(FExtension.store.get("PLD_DPROV")==null) FExtension.store.set("PLD_DPROV", "Google");
	    if(FExtension.store.get("PLD_OLD_TS")==null) FExtension.store.set("PLD_OLD_TS", "");
	    if(FExtension.store.get("PLD_DIC_FIRSTRUN")==null) FExtension.store.set("PLD_DIC_FIRSTRUN", "");
	    if(FExtension.store.get("PLD_LOC")==null) FExtension.store.set("PLD_LOC", "");

	    //FORMER PLANSHET TRANSLATOR CS
	    if(FExtension.store.get("PLT_TTSvolume")==null) FExtension.store.set("PLT_TTSvolume", 10);
	    if(FExtension.store.get("PLT_PROV")==null) FExtension.store.set("PLT_PROV", "Google");
	    if(FExtension.store.get("PLT_OLD_TS_TR")==null) FExtension.store.set("PLT_OLD_TS_TR", "");
	    if(FExtension.store.get("PLT_TR_FIRSTRUN")==null) FExtension.store.set("PLT_TR_FIRSTRUN", "");
	    if(FExtension.store.get("PLT_LOC")==null) FExtension.store.set("PLT_LOC", "");

	    //FORMER OPTIONS CS
	    if(FExtension.store.get("SL_anchor")==null) FExtension.store.set("SL_anchor", "");
	    if(FExtension.store.get("SL_sort")==null) FExtension.store.set("SL_sort", "");


    },

    set : function(key, value){              // Storing key function
        var obj = false;
        if (typeof(value) == 'object'){
            value = JSON.stringify(value);
            obj = true;
        }
        FExtension.store.getLocalStorage().setItem(key, obj ? 'obj_'+value : value+'');
    },
    get : function(key){                  // Retrieving key function
        //var val = localStorage[key];
        var val = null;
        val = FExtension.store.getLocalStorage().getItem(key);

        if (val && val.indexOf('obj_') == 0){
            val = val.slice(4,val.length);
            val = JSON.parse(val);
        }
        return val;
    },
    clearKey : function(key,removing){
        if (removing) {
            FExtension.store.getLocalStorage().removeItem(key);
            return;
        }
        if (FExtension.store.getLocalStorage()) { //localStorage){
            FExtension.store.getLocalStorage().setItem(FExtension.config.keyPrefix + key, '');
        }
    },
    loadPrefs : function(){
        var file = Components.classes["@mozilla.org/file/directory_service;1"].
            getService(Components.interfaces.nsIProperties).
            get("ProfD", Components.interfaces.nsIFile);

        file.append(FExtension.store.profile_Folder);
        if( !file.exists() || !file.isDirectory() ) {   // if it doesn't exist, create
            return null;
        }
        file.append(FExtension.store.cl_Profile_Name);

        var is = Components.classes["@mozilla.org/network/file-input-stream;1"]
            .createInstance( Components.interfaces.nsIFileInputStream );
        is.init(file, 0x01, 00004, null);

        var sis = Components.classes["@mozilla.org/scriptableinputstream;1"]
            .createInstance( Components.interfaces.nsIScriptableInputStream );
        sis.init( is );
        var output_data = sis.read( sis.available() );

        var data = output_data.split(";");
        var result = {};

        for(var i = 0; i < data.length; i++){
            result = FExtension.store.getValueByIndex("ran_before", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Version", i, data, result);

 	    //------------------------------- History ------------------------------------
	    result = FExtension.store.getValueByIndex("SL_History", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_1", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_2", i, data, result);
	    result = FExtension.store.getValueByIndex("SL_TH_3", i, data, result);
            result = FExtension.store.getValueByIndex("SL_TH_4", i, data, result);

            //------------------------------- option gt ----------------------------------
            result = FExtension.store.getValueByIndex("SL_global_lng", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Fontsize", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect", i, data, result);
            result = FExtension.store.getValueByIndex("SL_other_gt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dict", i, data, result);



            result = FExtension.store.getValueByIndex("SL_show_back", i, data, result);
            result = FExtension.store.getValueByIndex("SL_show_back2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HKset", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HKset_inv", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Flag", i, data, result);

            //------------------------------- option bbl ---------------------------------
            result = FExtension.store.getValueByIndex("SL_ENABLE", i, data, result);
            result = FExtension.store.getValueByIndex("SL_show_button_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_global_lng_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Fontsize_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_other_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dict_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_translation_mos_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_pin_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_TS", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_DBL_bbl", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Timing", i, data, result);
            result = FExtension.store.getValueByIndex("SL_Delay", i, data, result);

            //------------------------------- option it ----------------------------------
            result = FExtension.store.getValueByIndex("SL_langSrc_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_global_lng_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_style", i, data, result);
            result = FExtension.store.getValueByIndex("SL_inject_brackets", i, data, result);
            result = FExtension.store.getValueByIndex("SL_inject_before", i, data, result);
            result = FExtension.store.getValueByIndex("SL_line_break", i, data, result);
            result = FExtension.store.getValueByIndex("SL_whole_word", i, data, result);
            result = FExtension.store.getValueByIndex("SL_hide_translation", i, data, result);
            result = FExtension.store.getValueByIndex("SL_dictionary", i, data, result);
            result = FExtension.store.getValueByIndex("SL_no_detect_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_other_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_it", i, data, result);
            result = FExtension.store.getValueByIndex("SL_FK_box1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_FK_box2", i, data, result);

            //------------------------------- option wpt ---------------------------------
            result = FExtension.store.getValueByIndex("SL_global_lng_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_other_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langSrc_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_wpt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_langDst_name_wpt", i, data, result);

            //--------------------NEW PARAMS PROVIDERs---------------------------------------
            result = FExtension.store.getValueByIndex("SL_pr_gt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_pr_bbl", i, data, result);

	    //-----------------------HK for All Translators-------------------------------
            result = FExtension.store.getValueByIndex("SL_HK_gt1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_gt2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_it1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_it2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_bb1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_bb2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_HK_bb2box", i, data, result);


            //********************HOTKEYS FOR WPT, Tr Button & OPTIONS****************************
            result = FExtension.store.getValueByIndex("SL_HK_wptbox1", i, data, result);//Web Page Translation box
            result = FExtension.store.getValueByIndex("SL_HK_wpt1", i, data, result); 	//Web Page Translation
            result = FExtension.store.getValueByIndex("SL_HK_wptbox2", i, data, result);//Web Page Translation box MO
            result = FExtension.store.getValueByIndex("SL_HK_wpt2", i, data, result); 	//Web Page Translation MO
            result = FExtension.store.getValueByIndex("SL_HK_optbox", i, data, result); //Options box
            result = FExtension.store.getValueByIndex("SL_HK_opt", i, data, result); 	//Options
            result = FExtension.store.getValueByIndex("SL_HK_btnbox", i, data, result); //Tr Button box
            result = FExtension.store.getValueByIndex("SL_HK_btn", i, data, result); 	//Tr Button


            //********************WINDOW POSITION ON STARTUP****************************
            result = FExtension.store.getValueByIndex("WSP1x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP1y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP2x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP2y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP3x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP3y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP4x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP4y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP5x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP5y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP6x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP6y", i, data, result);
            result = FExtension.store.getValueByIndex("WSP7x", i, data, result);
            result = FExtension.store.getValueByIndex("WSP7y", i, data, result);

            //********************SET OF THE CONTEXT MENU****************************
            result = FExtension.store.getValueByIndex("Context1", i, data, result);
            result = FExtension.store.getValueByIndex("Context2", i, data, result);
            result = FExtension.store.getValueByIndex("Context3", i, data, result);
            result = FExtension.store.getValueByIndex("Context4", i, data, result);
            result = FExtension.store.getValueByIndex("Context5", i, data, result);
            result = FExtension.store.getValueByIndex("Context6", i, data, result);
            //********************SET OF THE CONTEXT MENU****************************

            result = FExtension.store.getValueByIndex("SL_LOCALIZATION", i, data, result);
            result = FExtension.store.getValueByIndex("SL_TS_LOC", i, data, result);

            result = FExtension.store.getValueByIndex("SL_Dtext", i, data, result);

            //********************SET OF THE ADVANCES****************************
            result = FExtension.store.getValueByIndex("SL_GVoices", i, data, result);
            result = FExtension.store.getValueByIndex("SL_SLVoices", i, data, result);
            //********************SET OF THE ADVANCES****************************

            result = FExtension.store.getValueByIndex("SL_SaveText_box_gt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_SavedText_gt", i, data, result);
            result = FExtension.store.getValueByIndex("SL_SaveText_box_bbl", i, data, result);

            result = FExtension.store.getValueByIndex("SL_LNG_LIST", i, data, result);

            result = FExtension.store.getValueByIndex("SL_BACK_VIEW", i, data, result);

            result = FExtension.store.getValueByIndex("SL_PrefTrans", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM1", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM2", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM3", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM4", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM5", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM6", i, data, result);
            result = FExtension.store.getValueByIndex("SL_CM7", i, data, result);

            result = FExtension.store.getValueByIndex("SL_DOM", i, data, result);

            result = FExtension.store.getValueByIndex("SL_wptDHist", i, data, result);
            result = FExtension.store.getValueByIndex("SL_wptLHist", i, data, result);
            result = FExtension.store.getValueByIndex("SL_wptGlobAuto", i, data, result);
            result = FExtension.store.getValueByIndex("SL_wptGlobTb", i, data, result);
            result = FExtension.store.getValueByIndex("SL_wptGlobTip", i, data, result);
            result = FExtension.store.getValueByIndex("SL_wptGlobLang", i, data, result);

            result = FExtension.store.getValueByIndex("SL_ALL_PROVIDERS_BBL", i, data, result);
            result = FExtension.store.getValueByIndex("SL_ALL_PROVIDERS_GT", i, data, result);
            result = FExtension.store.getValueByIndex("SL_ALL_PROVIDERS_IT", i, data, result);

            result = FExtension.store.getValueByIndex("SL_DICT_PRESENT", i, data, result);

	    //COORDINATES
            result = FExtension.store.getValueByIndex("SL_BTN_X", i, data, result);
            result = FExtension.store.getValueByIndex("SL_BTN_Y", i, data, result);
            result = FExtension.store.getValueByIndex("SL_BBL_X", i, data, result);
            result = FExtension.store.getValueByIndex("SL_BBL_Y", i, data, result);

	    //FORSE BUBBLE
            result = FExtension.store.getValueByIndex("FORSEbubble", i, data, result);

	    //FORMER BBL CS
            result = FExtension.store.getValueByIndex("TTSvolume", i, data, result);
            result = FExtension.store.getValueByIndex("BL_D_PROV", i, data, result);
            result = FExtension.store.getValueByIndex("BL_T_PROV", i, data, result);


	    //INLINE FLIP
            result = FExtension.store.getValueByIndex("INLINEflip", i, data, result);

	    //THEME MODE
            result = FExtension.store.getValueByIndex("THEMEmode", i, data, result);

	    //ADV
            result = FExtension.store.getValueByIndex("ADV", i, data, result);
            result = FExtension.store.getValueByIndex("FRUN", i, data, result);


	    //FORMER PLANSHET DIC CS
            result = FExtension.store.getValueByIndex("PLD_TTSvolume", i, data, result);
            result = FExtension.store.getValueByIndex("PLD_DPROV", i, data, result);
            result = FExtension.store.getValueByIndex("PLD_OLD_TS", i, data, result);
            result = FExtension.store.getValueByIndex("PLD_DIC_FIRSTRUN", i, data, result);
            result = FExtension.store.getValueByIndex("PLD_LOC", i, data, result);

	    //FORMER PLANSHET TRANSLATOR CS
            result = FExtension.store.getValueByIndex("PLT_TTSvolume", i, data, result);
            result = FExtension.store.getValueByIndex("PLT_PROV", i, data, result);
            result = FExtension.store.getValueByIndex("PLT_OLD_TS_TR", i, data, result);
            result = FExtension.store.getValueByIndex("PLT_TR_FIRSTRUN", i, data, result);
            result = FExtension.store.getValueByIndex("PLT_LOC", i, data, result);

	    //FORMER OPTIONS CS
            result = FExtension.store.getValueByIndex("SL_anchor", i, data, result);
            result = FExtension.store.getValueByIndex("SL_sort", i, data, result);

        }


        if(Object.keys(result).length == 0){
            result = FExtension.store.setDefault();
        }
        
        for(var prop in result){
            FExtension.store.global_pref_data[prop] = result[prop];
        }
    },
    getValueByIndex: function(name, i, data, result){
        if(data[i].indexOf(name + ":")!=-1){
            var data_array = data[i].split(":");
            result[name] = data_array[1];
        }
        return result;
    },
    setDefault: function(){
            FExtension.store.SL_BR_LN=FExtension.store.SL_CUR_LANG();
            var manifestData = chrome.app.getDetails();
            FExtension.store.set("SL_Version", manifestData.version);
            FExtension.store.set("ran_before", "1");

 	    //------------------------------- History ------------------------------------
  	    FExtension.store.set("SL_History", "");
            FExtension.store.set("SL_TH_1", "0");
            FExtension.store.set("SL_TH_2", "0");
            FExtension.store.set("SL_TH_3", "0");
            FExtension.store.set("SL_TH_4", "0");


            //------------------------------- option gt ----------------------------------
            FExtension.store.set("SL_global_lng", "true");
            FExtension.store.set("SL_Fontsize", "17px");
            FExtension.store.set("SL_langSrc", "auto");
            FExtension.store.set("SL_langDst", FExtension.store.SL_BR_LN);
            FExtension.store.set("SL_no_detect", "true");
            FExtension.store.set("SL_other_gt", "1");
            FExtension.store.set("SL_dict", "true");
            FExtension.store.set("SL_show_back", "false");
            FExtension.store.set("SL_show_back2", "false");
            FExtension.store.set("SL_HKset", "3|90|true");
            FExtension.store.set("SL_HKset_inv", "3|90|true");
            FExtension.store.set("SL_langDst_name", "Spanish");
            FExtension.store.set("SL_Flag", "FALSE");

            //------------------------------- option bbl ---------------------------------
            FExtension.store.set("SL_ENABLE", "true");
            FExtension.store.set("SL_show_button_bbl", "true");
            FExtension.store.set("SL_global_lng_bbl", "true");
            FExtension.store.set("SL_Fontsize_bbl", "14px");
            FExtension.store.set("SL_langSrc_bbl", "auto");
            FExtension.store.set("SL_langDst_bbl", FExtension.store.SL_BR_LN);
            FExtension.store.set("SL_no_detect_bbl", "true");
            FExtension.store.set("SL_other_bbl", "1");
            FExtension.store.set("SL_dict_bbl", "true");
            FExtension.store.set("SL_translation_mos_bbl", "true");
            FExtension.store.set("SL_pin_bbl", "false");
            FExtension.store.set("SL_TS", "0");
            FExtension.store.set("SL_langDst_name_bbl", "Spanish");
            FExtension.store.set("SL_DBL_bbl", "false");
            FExtension.store.set("SL_Timing", "3");
            FExtension.store.set("SL_Delay", "0");

            //------------------------------- option it ----------------------------------
            FExtension.store.set("SL_langSrc_it", "auto");
            FExtension.store.set("SL_langDst_it", FExtension.store.SL_BR_LN);
            FExtension.store.set("SL_global_lng_it", "true");
            FExtension.store.set("SL_style", "239e23");
            FExtension.store.set("SL_inject_brackets", "true");
            FExtension.store.set("SL_inject_before", "false");
            FExtension.store.set("SL_line_break", "false");
            FExtension.store.set("SL_whole_word", "true");
            FExtension.store.set("SL_hide_translation", "false");
            FExtension.store.set("SL_dictionary", "true");
            FExtension.store.set("SL_no_detect_it", "true");
            FExtension.store.set("SL_other_it", "1");
            FExtension.store.set("SL_langDst_name_it", "Spanish");
            FExtension.store.set("SL_FK_box1", "true");
            FExtension.store.set("SL_FK_box2", "true");

            //------------------------------- option wpt ---------------------------------
            FExtension.store.set("SL_global_lng_wpt", "true");
            FExtension.store.set("SL_langSrc_wpt", "auto");
            FExtension.store.set("SL_langDst_wpt", FExtension.store.SL_BR_LN);
            FExtension.store.set("SL_other_wpt", "1");
            FExtension.store.set("SL_langDst_name_wpt", "Spanish");

	    //-----------------------HK for All Translators-------------------------------

            if(FExtension.store.get("SL_HK_gt1")==null) FExtension.store.set("SL_HK_gt1", "Ctrl + Alt + Z");
            if(FExtension.store.get("SL_HK_gt2")==null) FExtension.store.set("SL_HK_gt2", "Alt + Z");

            if(FExtension.store.get("SL_HK_it1")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_it1", "Ctrl + Alt + C");
		else FExtension.store.set("SL_HK_it1", "Alt + C");
            }

            if(FExtension.store.get("SL_HK_it2")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_it2", "Ctrl + Alt + X");
		else FExtension.store.set("SL_HK_it2", "Alt + X");
            }

            if(FExtension.store.get("SL_HK_bb1")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_bb1", "Ctrl + Alt");
		else FExtension.store.set("SL_HK_bb1", "Alt");
            }

            if(FExtension.store.get("SL_HK_bb2")==null) FExtension.store.set("SL_HK_bb2", "Escape");
            if(FExtension.store.get("SL_HK_bb2box")==null) FExtension.store.set("SL_HK_bb2box", "true");


            if(FExtension.store.get("SL_HK_wptbox1")==null) FExtension.store.set("SL_HK_wptbox1", "true");

            if(FExtension.store.get("SL_HK_wpt1")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_wpt1", "Ctrl + Alt + P");
		else FExtension.store.set("SL_HK_wpt1", "Alt + P");
            }


            if(FExtension.store.get("SL_HK_wptbox2")==null) FExtension.store.set("SL_HK_wptbox2", "true");

            if(FExtension.store.get("SL_HK_wpt2")==null){
		if(FExtension.store.SL_isLinux()==true)	FExtension.store.set("SL_HK_wpt2", "Ctrl + Alt + M");
		else FExtension.store.set("SL_HK_wpt2", "Alt + M");
            }

            if(FExtension.store.get("SL_HK_optbox")==null) FExtension.store.set("SL_HK_optbox", "true");
            if(FExtension.store.get("SL_HK_opt")==null) FExtension.store.set("SL_HK_opt", "Ctrl + Alt + O");

            if(FExtension.store.get("SL_HK_btnbox")==null) FExtension.store.set("SL_HK_btnbox", "true");


            if(FExtension.store.get("SL_HK_btn")==null) FExtension.store.set("SL_HK_btn", "Ctrl + Alt + A");
            else {
                 if(FExtension.store.SL_isMacintosh()==true && FExtension.store.get("SL_HK_btn") == "Alt + A"){
                  	FExtension.store.set("SL_HK_btn", "Ctrl + Alt + A");
		 }
	    }

            //--------------------NEW PARAMS PROVIDERs---------------------------------------
            if(FExtension.store.get("SL_pr_gt")==null) FExtension.store.set("SL_pr_gt", "1");
            if(FExtension.store.get("SL_pr_bbl")==null) FExtension.store.set("SL_pr_bbl", "1");


	    //-----------------------LOCALIZATION-------------------------------
            if(FExtension.store.get("SL_TS_LOC")==null) FExtension.store.set("SL_TS_LOC", Date.now());
            if(FExtension.store.get("SL_LOCALIZATION")==null) ImTranslatorBG.LOC_TABLE();

            FExtension.store.set("SL_Dtext", "");

            //********************SET OF THE ADVANCES****************************
            if(FExtension.store.get("SL_GVoices")==null) FExtension.store.set("SL_GVoices", "1");
            if(FExtension.store.get("SL_SLVoices")==null) FExtension.store.set("SL_SLVoices", "0");
            //********************SET OF THE ADVANCES****************************

            if(FExtension.store.get("SL_SaveText_box_gt")==null) FExtension.store.set("SL_SaveText_box_gt", "1");
            if(FExtension.store.get("SL_SavedText_gt")==null) FExtension.store.set("SL_SavedText_gt", "");
            if(FExtension.store.get("SL_SaveText_box_bbl")==null) FExtension.store.set("SL_SaveText_box_bbl", "0");

            if(FExtension.store.get("SL_LNG_LIST")==null) FExtension.store.set("SL_LNG_LIST", "all");

            if(FExtension.store.get("SL_BACK_VIEW")==null) FExtension.store.set("SL_BACK_VIEW", 2);
	    if(FExtension.store.get("SL_show_back")=="true") FExtension.store.set("SL_BACK_VIEW", 1);

	    if(FExtension.store.get("SL_PrefTrans")==null) FExtension.store.set("SL_PrefTrans", "1");
	    if(FExtension.store.get("SL_CM1")==null) FExtension.store.set("SL_CM1", "1");
	    if(FExtension.store.get("SL_CM2")==null) FExtension.store.set("SL_CM2", "1");
	    if(FExtension.store.get("SL_CM3")==null) FExtension.store.set("SL_CM3", "1");
	    if(FExtension.store.get("SL_CM4")==null) FExtension.store.set("SL_CM4", "1");
	    if(FExtension.store.get("SL_CM5")==null) FExtension.store.set("SL_CM5", "1");
	    if(FExtension.store.get("SL_CM6")==null) FExtension.store.set("SL_CM6", "1");
	    if(FExtension.store.get("SL_CM7")==null) FExtension.store.set("SL_CM7", "1");

	    if(FExtension.store.get("SL_DOM")==null) FExtension.store.set("SL_DOM", "auto");

	    if(FExtension.store.get("SL_wptDHist")==null) FExtension.store.set("SL_wptDHist", "");
	    if(FExtension.store.get("SL_wptLHist")==null) FExtension.store.set("SL_wptLHist", "");
	    if(FExtension.store.get("SL_wptGlobAuto")==null) FExtension.store.set("SL_wptGlobAuto", "0");
	    if(FExtension.store.get("SL_wptGlobTb")==null) FExtension.store.set("SL_wptGlobTb", "1");	
	    if(FExtension.store.get("SL_wptGlobTip")==null) FExtension.store.set("SL_wptGlobTip", "1");	
	    if(FExtension.store.get("SL_wptGlobLang")==null) FExtension.store.set("SL_wptGlobLang", FExtension.store.SL_BR_LN);	

	    var LIST_PR_BBL = "Google,Microsoft,Translator,Yandex";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_BBL")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_BBL", LIST_PR_BBL);
	    } else {
		var ARR_BBL = FExtension.store.get("SL_ALL_PROVIDERS_BBL").split(",");
		var OUT_BBL = "";
		for (var Xbbl=0; Xbbl<ARR_BBL.length; Xbbl++){
		    if(LIST_PR_BBL.indexOf(ARR_BBL[Xbbl])!=-1) OUT_BBL=OUT_BBL+ARR_BBL[Xbbl]+",";
		}
		OUT_BBL = OUT_BBL.substring(0, OUT_BBL.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_BBL", OUT_BBL);
	    }

	    var LIST_PR_GT = "Google,Microsoft,Translator,Yandex";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_GT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_GT", LIST_PR_GT);
	    } else {
		var ARR_GT = FExtension.store.get("SL_ALL_PROVIDERS_GT").split(",");
		var OUT_GT = "";
		for (var Xgt=0; Xgt<ARR_GT.length; Xgt++){
		    if(LIST_PR_GT.indexOf(ARR_GT[Xgt])!=-1) OUT_GT=OUT_GT+ARR_GT[Xgt]+",";
		}
		OUT_GT = OUT_GT.substring(0, OUT_GT.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_GT", OUT_GT);
	    }
	    if(FExtension.store.get("SL_DICT_PRESENT")==null) FExtension.store.set("SL_DICT_PRESENT", "Google:1,Microsoft:0,Translator:0,Yandex:0");

	    var LIST_PR_IT = "Google,Microsoft";
	    if(FExtension.store.get("SL_ALL_PROVIDERS_IT")==null) {
		FExtension.store.set("SL_ALL_PROVIDERS_IT", LIST_PR_IT);
	    } else {
		var ARR_IT = FExtension.store.get("SL_ALL_PROVIDERS_IT").split(",");
		var OUT_IT = "";
		for (var Xgt=0; Xgt<ARR_IT.length; Xgt++){
		    if(LIST_PR_IT.indexOf(ARR_IT[Xgt])!=-1) OUT_IT=OUT_IT+ARR_IT[Xgt]+",";
		}
		OUT_IT = OUT_IT.substring(0, OUT_IT.length-1);
		FExtension.store.set("SL_ALL_PROVIDERS_IT", OUT_IT);
	    }

	    if(FExtension.store.get("SL_BTN_X")==null) FExtension.store.set("SL_BTN_X", 0);
	    if(FExtension.store.get("SL_BTN_Y")==null) FExtension.store.set("SL_BTN_Y", 0);
	    if(FExtension.store.get("SL_BBL_X")==null) FExtension.store.set("SL_BBL_X", 0);
	    if(FExtension.store.get("SL_BBL_Y")==null) FExtension.store.set("SL_BBL_Y", 0);

	    //FORSE BUBBLE
	    if(FExtension.store.get("FORSEbubble")==null) FExtension.store.set("FORSEbubble", 0);

	    //FORMER BBL CS
	    if(FExtension.store.get("TTSvolume")==null) FExtension.store.set("TTSvolume", 10);
	    if(FExtension.store.get("BL_D_PROV")==null) FExtension.store.set("BL_D_PROV", "Google");
	    if(FExtension.store.get("BL_T_PROV")==null) FExtension.store.set("BL_T_PROV", "Google");

	    //INLINE FLIP
	    if(FExtension.store.get("INLINEflip")==null) FExtension.store.set("INLINEflip", 0);

	    //THEME MODE
	    if(FExtension.store.get("THEMEmode")==null) FExtension.store.set("THEMEmode", 0);

	    //ADV
	    if(FExtension.store.get("ADV")==null) FExtension.store.set("ADV", 0);
	    if(FExtension.store.get("FRUN")==null) FExtension.store.set("FRUN", 0);

	    //FORMER PLANSHET DIC CS
	    if(FExtension.store.get("PLD_TTSvolume")==null) FExtension.store.set("PLD_TTSvolume", 10);
	    if(FExtension.store.get("PLD_DPROV")==null) FExtension.store.set("PLD_DPROV", "Google");
	    if(FExtension.store.get("PLD_OLD_TS")==null) FExtension.store.set("PLD_OLD_TS", "");
	    if(FExtension.store.get("PLD_DIC_FIRSTRUN")==null) FExtension.store.set("PLD_DIC_FIRSTRUN", "");
	    if(FExtension.store.get("PLD_LOC")==null) FExtension.store.set("PLD_LOC", "");

	    //FORMER PLANSHET TRANSLATOR CS
	    if(FExtension.store.get("PLT_TTSvolume")==null) FExtension.store.set("PLT_TTSvolume", 10);
	    if(FExtension.store.get("PLT_PROV")==null) FExtension.store.set("PLT_PROV", "Google");
	    if(FExtension.store.get("PLT_OLD_TS_TR")==null) FExtension.store.set("PLT_OLD_TS_TR", "");
	    if(FExtension.store.get("PLT_TR_FIRSTRUN")==null) FExtension.store.set("PLT_TR_FIRSTRUN", "");
	    if(FExtension.store.get("PLT_LOC")==null) FExtension.store.set("PLT_LOC", "");

	    //FORMER OPTIONS CS
	    if(FExtension.store.get("SL_anchor")==null) FExtension.store.set("SL_anchor", "");
	    if(FExtension.store.get("SL_sort")==null) FExtension.store.set("SL_sort", "");

    },


    save_LOC4CONTEXT: function(){
          var tmp = FExtension.element(FExtension.store.get('SL_LOCALIZATION'),'extLanguages').split(",")
	  var bbl = FExtension.store.get("SL_langDst_bbl");
	  var it = FExtension.store.get("SL_langDst_it");
	  var wpt = FExtension.store.get("SL_langDst_wpt");
	  var gt = FExtension.store.get("SL_langDst");
	  var tmp2;
	  for (var i=0; i<tmp.length; i++){
	      tmp2 = tmp[i].split(":");
	      if(tmp2[0]==bbl) FExtension.store.set("SL_langDst_name_bbl", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==it) FExtension.store.set("SL_langDst_name_it", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==wpt) FExtension.store.set("SL_langDst_name_wpt", encodeURIComponent(tmp2[1]));
	      if(tmp2[0]==gt) FExtension.store.set("SL_langDst_name", encodeURIComponent(tmp2[1]));
	  }
    },

    SL_isMacintosh: function() {
	  return navigator.platform.indexOf('Mac') > -1;
    },

    SL_isLinux: function() {
        var OSName = false;
	if (navigator.appVersion.indexOf("X11")!=-1) OSName=true;
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName=true;
	return OSName;
    }

};

}catch(ex){
//	FExtension.alert_debug(ex);
}