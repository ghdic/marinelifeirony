'use strict';
var SL_DARK="invert(95%)";
var SL_Languages = FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLanguages');
var THE_LIST="";

(function(){GEBI("SL_save_button").addEventListener("click",function(){save_options();},!1);} )();
(function(){GEBI("SL_save_button2").addEventListener("click",function(){save_options();},!1);} )();
(function(){GEBI("SL_form_closer").addEventListener("click",function(){SL_close();},!1);} )();
(function(){
    window.addEventListener('load',function(){
	GEBI('SL_translate_container').style.opacity="1";
	INIT();
	LINKS();
    },!1);
    window.addEventListener('click',function(e){
	var ID = e.target.id;
	if(ID.indexOf('BOX')!=-1){
		var CODE = ID.replace("BOX_","");
		if(GEBI(ID).className=="SL_BOX") GEBI(ID).className="SL_BOX_ACTIVE";
		else GEBI(ID).className="SL_BOX";
		LINKS();
	}
	if(ID.indexOf('SL_ALL')!=-1) SL_SELECT(0);
	if(ID.indexOf('SL_DEALL')!=-1) SL_SELECT(1);
    },!1);

})();

function LINKS(){
	var dh = GEBI('SL_canvas').getElementsByClassName('SL_BOX');
	var da = GEBI('SL_canvas').getElementsByClassName('SL_BOX_ACTIVE');
	if(da.length==0) GEBI('SL_ALL_LNKS').innerHTML="<table width=200><tr><td><div id='SL_ALL'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSelectAll')+"</div></td></tr></table>";
	if(dh.length==0) GEBI('SL_ALL_LNKS').innerHTML="<table width=200><tr><td><div id='SL_DEALL'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDeselectAll')+"</div></td></tr></table>";
	if(da.length!=0 && dh.length!=0) GEBI('SL_ALL_LNKS').innerHTML="<table width=200><tr><td><div id='SL_ALL'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSelectAll').replace(/\s/g,"&nbsp;")+"</div></td><td>&nbsp;&nbsp;&nbsp;</td><td><div id='SL_DEALL'>"+FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDeselectAll').replace(/\s/g,"&nbsp;")+"</div></td></tr></table>";
	ACTIVATE_THEME_LINKS(FExtension.store.get("THEMEmode"));
}

function SL_SELECT(ob){
        if(ob==0){
	 	var dh = GEBI('SL_canvas').getElementsByClassName('SL_BOX');
		for (var i=0; i<dh.length;) GEBI(dh[i].id).className="SL_BOX_ACTIVE";
	} else {
		
	 	var dh = GEBI('SL_canvas').getElementsByClassName('SL_BOX_ACTIVE');
		for (var i=0; i<dh.length;)	GEBI(dh[i].id).className="SL_BOX";
	}
	LINKS();
}

function CONSTRUCTOR(){
	GEBI('SL_save_button').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
	GEBI('SL_save_button2').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSaveButton')));
	GEBI('SL_h4').appendChild(document.createTextNode(FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extLangs')));
}



(function(){
	GEBI("SL_save_button").addEventListener("click",function(){
		save_options();
	},!1);
})();


function INIT(){
  CONSTRUCTOR();
  BUILDER();

  var OUT = FExtension.store.get("SL_LNG_LIST");

  if(OUT == "all"){
	var dh = GEBI('SL_canvas').getElementsByClassName('SL_BOX');
	for (var i=0; i<dh.length;) GEBI(dh[i].id).className="SL_BOX_ACTIVE";
  } else {
	var dh = OUT.split(",");
	for (var i=0; i<dh.length; i++) {
	    	GEBI("BOX_"+dh[i]).className="SL_BOX_ACTIVE";
	}
  }
  ACTIVATE_THEME(FExtension.store.get("THEMEmode"));
}

function BUILDER(){
	SL_Languages = SL_Languages.replace(/&#160;/ig," ");
	SL_Languages = SL_Languages.replace(/&nbsp;/ig," ");

	var ARR = SL_Languages.split(",");
	var STEP = 3;
	var W = Math.ceil(ARR.length/STEP);
	var L = W;

	var TBL = "<br><div class=SL_BOX_SET><div class=SL_BOXS><div class=SL_BOX id='BOX_auto'></div></div><div class=SL_BOX_TEXT id=SL_auto>" + FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extDetect_language_from_box') + "</div></div><br><table width=625 cellspacing=0 cellpadding=0 border=0><tr><td width="+W+" valign=top height=28>";
	for(var i=0; i<ARR.length; i++){
	 	var ARR2=ARR[i].split(":");
		var CODE = ARR2[0];

		var NAME = ARR2[1].replace(" ","&nbsp;");
		NAME = NAME.replace("(","");
		NAME = NAME.replace(")","");
		if(i!=L){
			TBL = TBL + "<div class=SL_BOX_SET><div class=SL_BOXS><div class=SL_BOX id='BOX_"+CODE+"'></div></div><div class=SL_BOX_TEXT>" + NAME + "</div></div>";
		}else{
			TBL = TBL + "</td><td width="+W+" valign=top height=28><div class=SL_BOX_SET><div class=SL_BOXS><div class=SL_BOX id='BOX_"+CODE+"'></div></div><div class=SL_BOX_TEXT>" + NAME + "</div></div>";
			L = L + W;
		}
	}
	TBL = TBL + "</td></tr></table>";
	GEBI('SL_canvas').innerHTML = TBL;
}


function save_options() {

	 	var dha = GEBI('SL_canvas').getElementsByClassName('SL_BOX_ACTIVE');
	 	var dhd = GEBI('SL_canvas').getElementsByClassName('SL_BOX');
	 	var OUT = "";

	 	if(dhd.length>0){
			for (var i=0; i<dha.length; i++){
				var CODE = GEBI(dha[i].id).id.replace("BOX_",""); 
				if(i<dha.length-1) OUT = OUT + CODE + ",";
				else OUT = OUT + CODE;
			}
		} else OUT = "all";


		if(dha.length<2) {alert (FExtension.element(FExtension.store.get("SL_LOCALIZATION"),'extSelect2langs')); return false;}
		


		THE_LIST = OUT;
		
		FExtension.store.set("SL_LNG_LIST",OUT);

		SL_Reset_Booxes(THE_LIST);

		FExtension.store.set("SL_Flag", "FALSE");
		FExtension.bg.ImTranslatorBG.SL_callbackRequest();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest2();
		FExtension.bg.ImTranslatorBG.SL_callbackRequest3();
	        FExtension.bg.FExtension.browser.refreshSettings();

                FExtension.AddHtmlToObj("SL_status","img","../../img/util/indicator.gif");
                FExtension.AddHtmlToObj("SL_status2","img","../../img/util/indicator.gif");
                FExtension.store.set("SL_GWPTHist", "");

		setTimeout(function() {
			new Date().getTime();
			FExtension.store.set("SL_TS_LOC", Date.now());
			FExtension.store.set("SL_TS", Date.now());
		}, 1000);


		setTimeout(function() { 
		   SL_status.innerText = "";
		   SL_status2.innerText = "";
		   SL_close();
		}, 2000);
}

function GEBI(id){ return document.getElementById(id);}

function SL_close(){  
	window.frames['parent'].GEBI('SL_AUTOKEYS').style.display='none';
        window.frames['parent'].location.reload();
}


function SL_Reset_Booxes(list){
	if(FExtension.store.get("SL_global_lng")=="true"){
		if(list != "all"){
                        var L1=list.split(",");
			var TRANS = GET_CASE(FExtension.store.get("SL_langSrc"),FExtension.store.get("SL_langDst"),list);
			switch(TRANS){
				case "00": 					
					FExtension.store.set("SL_langSrc", L1[0]);
					FExtension.store.set("SL_langSrc2", L1[0]);
					FExtension.store.set("SL_langDst", L1[1]);
					FExtension.store.set("SL_langSrc_it", L1[0]);
					FExtension.store.set("SL_langDst_it", L1[1]);
					FExtension.store.set("SL_langSrc_bbl", L1[0]);
					FExtension.store.set("SL_langDst_bbl", L1[1]);
					FExtension.store.set("SL_langSrc_wpt", L1[0]);
					FExtension.store.set("SL_langDst_wpt", L1[1]);
					break;
				case "10":
				        if(L1.length==2){
				        	if(L1[0]=="auto"){
							FExtension.store.set("SL_langSrc", L1[0])
							FExtension.store.set("SL_langSrc2", L1[0])
							FExtension.store.set("SL_langDst", L1[1]);
						}else{
							FExtension.store.set("SL_langDst", L1[0]);
						}
					}else{
						if(FExtension.store.get("SL_langDst") != L1[1] && FExtension.store.get("SL_langSrc") != L1[1]){
							FExtension.store.set("SL_langDst", L1[1]);
							FExtension.store.set("SL_langDst_it", L1[1]);
							FExtension.store.set("SL_langDst_bbl", L1[1]);
							FExtension.store.set("SL_langDst_wpt", L1[1]);
						} else {
							if(L1[0] != "auto"){
								FExtension.store.set("SL_langDst", L1[0]);
								FExtension.store.set("SL_langDst_it", L1[0]);
								FExtension.store.set("SL_langDst_bbl", L1[0]);
								FExtension.store.set("SL_langDst_wpt", L1[0]);
							} else { 
								FExtension.store.set("SL_langDst", L1[2]);
								FExtension.store.set("SL_langDst_it", L1[2]);
								FExtension.store.set("SL_langDst_bbl", L1[2]);
								FExtension.store.set("SL_langDst_wpt", L1[2]);
							}
						}
					}
					break;
				case "01":
					if(FExtension.store.get("SL_langSrc") != L1[0] && L1[0] != FExtension.store.get("SL_langDst")){
						FExtension.store.set("SL_langSrc", L1[0]);
						FExtension.store.set("SL_langSrc2", L1[0]);
						FExtension.store.set("SL_langSrc_it", L1[0]);
						FExtension.store.set("SL_langSrc_bbl", L1[0]);
						FExtension.store.set("SL_langSrc_wpt", L1[0]);
					} else {
						FExtension.store.set("SL_langSrc", L1[1]);
						FExtension.store.set("SL_langSrc2", L1[1]);
						FExtension.store.set("SL_langSrc_it", L1[1]);
						FExtension.store.set("SL_langSrc_bbl", L1[1]);
						FExtension.store.set("SL_langSrc_wpt", L1[1]);
					}
					break;

				case "11": break;
			}
     		}
     	} else {
		if(list != "all"){
                        var L1=list.split(",");
			var TRANS = GET_CASE(FExtension.store.get("SL_langSrc"),FExtension.store.get("SL_langDst"),list);
			switch(TRANS){
				case "00": 					
					FExtension.store.set("SL_langSrc", L1[0]);
					FExtension.store.set("SL_langSrc2", L1[0]);
					FExtension.store.set("SL_langDst", L1[1]);
					break;
				case "10":
				        if(L1.length==2){
					        if(L1[0]=="auto"){
							FExtension.store.set("SL_langSrc", L1[0]);
							FExtension.store.set("SL_langSrc2", L1[0]);
							FExtension.store.set("SL_langDst", L1[1]);
						}else{
							FExtension.store.set("SL_langDst", L1[0]);
						}
					}else{
						if(FExtension.store.get("SL_langDst") != L1[1] && FExtension.store.get("SL_langSrc") != L1[1]){
							FExtension.store.set("SL_langDst", L1[1]);
						} else {
							if(L1[0] != "auto"){
								FExtension.store.set("SL_langDst", L1[0]);
							} else { 
								FExtension.store.set("SL_langDst", L1[2]);
							}
						}
					}
					break;
				case "01":
					if(FExtension.store.get("SL_langSrc") != L1[0] && L1[0] != FExtension.store.get("SL_langDst")){
						FExtension.store.set("SL_langSrc", L1[0]);
						FExtension.store.set("SL_langSrc2", L1[0]);
					} else {
						FExtension.store.set("SL_langSrc", L1[1]);
						FExtension.store.set("SL_langSrc2", L1[1]);
					}
					break;
				case "11": break;
			}

			var TRANS_it = GET_CASE(FExtension.store.get("SL_langSrc_it"),FExtension.store.get("SL_langDst_it"),list);
			switch(TRANS_it){
				case "00": 					
					FExtension.store.set("SL_langSrc_it", L1[0]);
					FExtension.store.set("SL_langDst_it", L1[1]);
					break;
				case "10":
				        if(L1.length==2){
					        if(L1[0]=="auto"){
							FExtension.store.set("SL_langSrc_it", L1[0]);
							FExtension.store.set("SL_langDst_it", L1[1]);
						}else{
							FExtension.store.set("SL_langDst_it", L1[0]);
						}
					}else{
						if(FExtension.store.get("SL_langDst_it") != L1[1] && FExtension.store.get("SL_langSrc") != L1[1]){
							FExtension.store.set("SL_langDst_it", L1[1]);
						} else {
							if(L1[0] != "auto"){
								FExtension.store.set("SL_langDst_it", L1[0]);
							} else { 
								FExtension.store.set("SL_langDst_it", L1[2]);
							}
						}
					}
					break;
				case "01":
					if(FExtension.store.get("SL_langSrc_it") != L1[0] && L1[0] != FExtension.store.get("SL_langDst_it")){
						FExtension.store.set("SL_langSrc_it", L1[0]);
					} else {
						FExtension.store.set("SL_langSrc_it", L1[1]);
					}
					break;
				case "11": break;
			}

			var TRANS_bbl = GET_CASE(FExtension.store.get("SL_langSrc_bbl"),FExtension.store.get("SL_langDst_bbl"),list);
			switch(TRANS_bbl){
				case "00": 					
					FExtension.store.set("SL_langSrc_bbl", L1[0]);
					FExtension.store.set("SL_langDst_bbl", L1[1]);
					break;
				case "10":
				        if(L1.length==2){
					        if(L1[0]=="auto"){
							FExtension.store.set("SL_langSrc_bbl", L1[0]);
							FExtension.store.set("SL_langDst_bbl", L1[1]);
						}else{
							FExtension.store.set("SL_langDst_bbl", L1[0]);
						}
					}else{
						if(FExtension.store.get("SL_langDst_bbl") != L1[1] && FExtension.store.get("SL_langSrc") != L1[1]){
							FExtension.store.set("SL_langDst_bbl", L1[1]);
						} else {
							if(L1[0] != "auto"){
								FExtension.store.set("SL_langDst_bbl", L1[0]);
							} else { 
								FExtension.store.set("SL_langDst_bbl", L1[2]);
							}
						}
					}
					break;
				case "01":
					if(FExtension.store.get("SL_langSrc_bbl") != L1[0] && L1[0] != FExtension.store.get("SL_langDst_bbl")){
						FExtension.store.set("SL_langSrc_bbl", L1[0]);
					} else {
						FExtension.store.set("SL_langSrc_bbl", L1[1]);
					}
					break;
				case "11": break;
			}

			var TRANS_wpt = GET_CASE(FExtension.store.get("SL_langSrc_wpt"),FExtension.store.get("SL_langDst_wpt"),list);
			switch(TRANS_wpt){
				case "00": 					
					FExtension.store.set("SL_langSrc_wpt", L1[0]);
					FExtension.store.set("SL_langDst_wpt", L1[1]);
					break;
				case "10":
				        if(L1.length==2){
					        if(L1[0]=="auto"){
							FExtension.store.set("SL_langSrc_wpt", L1[0]);
							FExtension.store.set("SL_langDst_wpt", L1[1]);
						}else{
							FExtension.store.set("SL_langDst_wpt", L1[0]);
						}
					}else{
						if(FExtension.store.get("SL_langDst_wpt") != L1[1] && FExtension.store.get("SL_langSrc") != L1[1]){
							FExtension.store.set("SL_langDst_wpt", L1[1]);
						} else {
							if(L1[0] != "auto"){
								FExtension.store.set("SL_langDst_wpt", L1[0]);
							} else { 
								FExtension.store.set("SL_langDst_wpt", L1[2]);
							}
						}
					}
					break;
				case "01":
					if(FExtension.store.get("SL_langSrc_wpt") != L1[0] && L1[0] != FExtension.store.get("SL_langDst_wpt")){
						FExtension.store.set("SL_langSrc_wpt", L1[0]);
					} else {
						FExtension.store.set("SL_langSrc_wpt", L1[1]);
					}
					break;
				case "11": break;
			}


		}

     	}
}

function GET_CASE(f,t,l){
        var OUT = "";
	if(l.indexOf(f)!=-1) OUT="1";
 	else OUT = "0";
	if(l.indexOf(t)!=-1) OUT=OUT+"1";
 	else OUT = OUT + "0";
	return(OUT);
}


function ACTIVATE_THEME(st){
 	if(st==1){
		var clr="#BF7D44";
		GEBI("SL_body_options").style.filter="invert(0%)";
		GEBI("SL_save_button").style.filter=SL_DARK;
		GEBI("SL_save_button2").style.filter=SL_DARK;	
		GEBI("SL_h4").style.filter=SL_DARK;
		if(GEBI("SL_DEALL")) GEBI("SL_DEALL").style.filter=SL_DARK;
		if(GEBI("SL_ALL")) GEBI("SL_ALL").style.filter=SL_DARK;

		var CHK = document.getElementsByClassName("SL_BOX_ACTIVE");
		for(var i=0; i<CHK.length; i++) CHK[i].style="border-right: 2px solid " +clr+";border-bottom: 2px solid " + clr;
	}
}

function ACTIVATE_THEME_LINKS(st){
 	if(st==1){
		if(GEBI("SL_DEALL")) GEBI("SL_DEALL").style.filter=SL_DARK;
		if(GEBI("SL_ALL")) GEBI("SL_ALL").style.filter=SL_DARK;
	}
}