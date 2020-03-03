var company_id = "iniline";
var product_id = "crosswebex";
var appid = 'kr.co.' + company_id + '.' + product_id;
var port = null;
var errormsg = "";

var managed_tabs = new Map();

chrome.runtime.onInstalled.addListener(
	function(details) {
		chrome.tabs.query({url: ['http://*/*', 'https://*/*']}, function(tabs) {
			for(var index = 0; index < tabs.length; index++)
			{
				try {
					chrome.tabs.executeScript(tabs[index].id, {
						file: "contentscript.js",
						allFrames:true
					}, function(){});
					if(details.reason == "install")
					{
						chrome.tabs.executeScript(tabs[index].id, {
							code: 'var event = new Event(\"__crosswebex_extension_installed__\");dispatchEvent(event);',
							allFrames:true
						}, function(){});
					}
				}catch(e)
				{
				}
			}
		});
	});
	
chrome.runtime.onSuspend.addListener(
	function() {
		if(port != null)
		{
			try {
				port.disconnect();
				port = null;
			} catch(e) {}
		}
	});
	
chrome.runtime.onConnect.addListener(
	function(port) {
		port.onDisconnect.addListener(function() {
			
		});
	});
	
chrome.runtime.onUpdateAvailable.addListener(
	function(new_version) {
		chrome.runtime.reload();
	});
	
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {

	if(request.cmd == "native" || request.cmd == "setcallback" || request.cmd == "init")
	{	
		if(port == null)
		{
			port = chrome.runtime.connectNative(appid);

			port.onMessage.addListener(function(response) {

				if(response.get_versions)
				{
					chrome.tabs.sendMessage(parseInt(response.tabid), 
						{
							"response":{
								"id":response.id, 
								"tabid":response.tabid, 
								"status":"TRUE", 
								"reply":response, 
								"callback":response.callback
							}
						}, function(res) {});
					
					if(response.reload == true)
					{
						port.disconnect();
						port = null;
					}

					// register tab info
					managed_tabs.set(response.tabid, response.tabid);
				}
				else
				{
					tabid = response.response.tabid;
					if(tabid == "")
					{
						chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
							chrome.tabs.sendMessage(tabs[0].id, response, function(res) {});
						});
					}
					else
					{
						chrome.tabs.sendMessage(parseInt(tabid), response, function(res) {});
					}
				}
			});
		} 
		
		var json = null;
		
		if(request.exfunc == "get_extension_version")
		{
			sendResponse(chrome.app.getDetails().version);
			chrome.runtime.requestUpdateCheck(function(status, details) 
				{ 
					if(status == "update_available")
					{
						chrome.runtime.reload();
					}
				});		
			return;
		}
		else if(request.exfunc == "get_version" || request.exfunc == "get_versions")
		{
			json = {"init": request.exfunc};
			if(request.m) json.m = request.m;
			if(request.lic) json.lic = request.lic;
			if(request.origin) json.origin = request.origin;
			if(request.id) json.id = request.id;
			if(request.pv) json.pv = request.pv;
		}	
		else
		{
			json = request;
		}
		
		json.tabid = sender.tab.id.toString();

		try {
			if(port != null)
			{
				port.postMessage(json);
			}
		} catch(e)
		{
			errormsg = e.message;
			console.log("Port Error: " + errormsg);
			var reply = errormsg;
			sendResponse({
					"id":json.id, 
					"tabid":json.tabid, 
					"status":"INTERNAL_ERROR", 
					"reply":reply, 
					"callback":json.callback
				});
			port = null;
		}
	}
});

function updateTab(tabid, changeInfo, tab) {
	if(changeInfo.status == "complete")
	{
		var _id = managed_tabs.get(tabid.toString());
		if(_id)
		{
			navigatePage(tabid, "update", tab);
		}
	}
	else 
	{
	}
}

function closeTab(tabid, removeInfo) {

	var _id = managed_tabs.get(tabid.toString());
	if(_id)	
	{
		managed_tabs.delete(tabid.toString());
		navigatePage(tabid, "close", null);
	}
	
	if(managed_tabs.size == 0)
	{
		if(port != null)
		{
			try {
				port.disconnect();
				port = null;
			} catch(e) {}
		}
	}
}

function ReplacedTab(addedTabId, removedTabId) {
	var _id = managed_tabs.get(removedTabId.toString());
	if(_id)
	{
		managed_tabs.delete(removedTabId.toString());
		navigatePage(_id, "close", null);
	}
}

function navigatePage(tabid, type, tab) {
	var request = {};

	request.id = product_id;
	request.module = "_all_";
	request.cmd = "native";
	request.origin = "";
	request.exfunc = {};
	request.callback = "";
	request.tabid = tabid.toString();
	
	request.exfunc.fname = "__tab_status__";
	request.exfunc.args = [];

	if(type == "update")
	{
		request.exfunc.args = ["move", tab.url];
	}
	else
	{
		// tab is null
		request.exfunc.args = ["close"];
	}
	try {
		if(port) port.postMessage(request);
	} catch(e)
	{
		port = null;
	}
}


chrome.tabs.onUpdated.addListener(updateTab);
chrome.tabs.onRemoved.addListener(closeTab);
chrome.tabs.onReplaced.addListener(ReplacedTab);

