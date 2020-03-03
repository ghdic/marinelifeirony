var PLATFORM = "Chrome";
//var PLATFORM = "Opera";

var SL_GEO = new Array ("com","es","de","it","fr","rs","pn","ps","sn","so");
var DET = 0;
// 0 - G
// 1 - SL
var _TP = "chr-ImTranslator"
var _FOLDER = "extensions";
var _CGI = "/"+_FOLDER+"/?tp="+_TP;
var SL_TTS = "en,es,ru,de,pt,fr,it,ko,ja,zh-CN,zh-TW";             
var G_TTS = "ar,cs,da,nl,fi,el,hi,hu,no,pl,sk,sv,th,tr,la,bn,id,km,uk,vi";
    G_TTS = G_TTS+","+SL_TTS;

var LISTofPRpairsDefault=",af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu";
var LISTofPR = new Array ("Google","Microsoft","Translator","Yandex");
var LISTofLANGsets = new Array (",af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,ja,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu",",af,ar,bg,bn,bs,zh-CN,zh-TW,ca,cs,cy,da,nl,en,et,fa,fi,fr,de,el,ht,iw,hi,hr,hmn,hu,id,is,it,ja,ko,lv,lt,mg,ms,mt,no,pl,pt,ro,ru,sm,sk,sl,sr,es,sw,sv,ta,th,tl,tr,uk,ur,vi","en/fr,en/de,en/pt,en/ru,en/es,fr/en,fr/ru,fr/es,de/en,de/ru,pt/en,ru/en,ru/fr,ru/de,ru/es,es/en,es/fr,es/ru,en/en,fr/fr,ru/ru,es/es,pt/pt,de/de",",af,sq,am,ar,hy,az,eu,be,bn,bs,bg,ca,ceb,zh-CN,hr,cs,da,nl,en,eo,et,fi,fr,gl,ka,de,el,gu,ht,iw,hi,hu,is,id,ga,it,ja,jw,kn,kk,km,ko,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,ne,no,fa,pl,pt,pa,ro,ru,gd,sr,si,sk,sl,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi");

var LISTofPRpairs = new Array ();
for (var SL_I = 0 ; SL_I < LISTofPR.length; SL_I++){
    switch(LISTofPR[SL_I]){
	case "Google": LISTofPRpairs[SL_I]=LISTofLANGsets[0];break;
	case "Microsoft": LISTofPRpairs[SL_I]=LISTofLANGsets[1];break;
	case "Translator": LISTofPRpairs[SL_I]=LISTofLANGsets[2];break;
	case "Yandex": LISTofPRpairs[SL_I]=LISTofLANGsets[3];break;
    }	
}

var ImTranslator_theurl = "https://webmail.smartlinkcorp.com/";

var FExtension = {
	config: {
		debugIsEnabled: true
	},

	extend: function(parentPrototype, child) {
		function CloneInternal(){};
		CloneInternal.prototype = parentPrototype;
		child.prototype.constructor = child;
		return new CloneInternal();
	},

	element: function(loc,msg){
                return SL_SETCHROMELOC(msg,loc);
	},

	AddHtmlToObj: function(obj,tag,htm){
	      var container = GEBI(obj);
		while (container.firstChild) {
		  container.removeChild(container.firstChild);
		}
	      var eUL = document.createElement(tag);
	      var st = document.createAttribute("src");
	      st.value = htm;
	      eUL.setAttributeNode(st);
      	container.appendChild(eUL); 
	},

       		
};

FExtension.alert_debug = function(msg) {
//	if (FExtension.config.debugIsEnabled)
//		window.alert(msg);
};


function SL_SETCHROMELOC(name,CLloc){

    if(chrome.i18n.getUILanguage()){
	 var BRloc=chrome.i18n.getUILanguage();
	 name=name.replace("ext","_");
	 if(BRloc==CLloc){
	  var BRloc=BRloc.substr(0,2);
	  return chrome.i18n.getMessage(BRloc+name);
	 } else { 
		return chrome.i18n.getMessage(CLloc+name);
	 }	
    }
}

