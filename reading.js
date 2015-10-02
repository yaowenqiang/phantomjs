// url we want to load
//var url = 'http://www.packtpub.com/';
var url = 'http://bbs.3dmgame.com/forum-1635-1.html';
// load webpage module
var page = require('webpage').create();
//error handling
phantom.onError = function (msg,trace) {
    var msgStack = ['PHANTOM ERROR: ' + msg ];
    if (trace && trace.length) {
        msgStack.push("TRACE:");
        trace.forEach(function(t){
            msgStack.push(' -> ' + (t.file || t.sourceURL) + ": " + t.line +
            (t.function?'(in function ' + t.function + ')':''))
        });
    }
    console.error(msgStack.join('\n'));
    phantom.exit(1)

};
page.open(url,function(status){
    console.log('************************************************************');
    console.log('Opened ' + url + 'with status  ' + status);
    var bestsellerList = page.evaluate(function(){
        var bestsellerElements = document.querySelectorAll(
            //'#featured-books .book-block-title'
            //'tbody[id^=normal] th.common a.xst[onclick]'
            'tbody[id^=normal] a.xst[onclick]'
        );
        if (!bestsellerElements) {
            throw new Error('No match content found!');
        }
        var bestsellerData = [];
        for (var i = 0; i < bestsellerElements.length; i ++) {
            bestsellerData.push(bestsellerElements[i].innerHTML.trim());
        }
        // browser context
        return bestsellerData;
    });
    for (var i = 0; i < bestsellerList.length;i ++) {
        console.log((i + 1) + ' | ' + bestsellerList[i]);
    }
    // exit PhantomJS
    phantom.exit();
});
