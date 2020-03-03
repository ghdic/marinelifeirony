/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */

function launchApp(onFinish){
    chrome.storage.local.set({"windowSettings": {count: 0}}, function() {
        GLIFFY.IO.openTempGonDocuments(function(documents){
            var key, document = null, count = 0, keys = Object.keys(documents);

            // we use an iterator to hopefully not cause any conflicts when incrementing
            // the local storage window count on openAppWindow
            var iterator = function() {
                if (keys.length === 0) {
                    if(onFinish){
                        onFinish(count);
                    }
                } else {
                    key = keys.pop();
                    document = documents[key];

                    GLIFFY.desktopUtils.openAppWindow({
                        document:document
                    }, iterator);
                    count++;

                }
            }
            iterator();

        }, function(status, message){
            console.error(message);
            GLIFFY.desktopUtils.openAppWindow(); //open a blank window.
        });
    });

}

chrome.app.runtime.onLaunched.addListener(function(launchData) {

    //first add launch statistic...

    chrome.storage.local.get("statistics", function(result){
        result.statistics = result.statistics || {};
        if(result.statistics.launchCount){
            result.statistics.launchCount++;
        } else {
            result.statistics.launchCount = 1;
        }
        chrome.storage.local.set(result, function(){
            launchApp(function(count){
                //create a default blank window if there are no temp documents to open.
                if(count === 0){
                    GLIFFY.desktopUtils.openAppWindow();
                }
            });
        })
    });
});

chrome.runtime.onInstalled.addListener(function() {
    console.log('installed 1.0.29');
});

chrome.runtime.onSuspend.addListener(function() {
    // Do some simple clean-up tasks.
});

chrome.app.runtime.onRestarted.addListener(function(){
    launchApp();
});