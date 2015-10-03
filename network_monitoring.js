//load system module
//=> CommonJS

var system = require('system');
var os     = system.os;

// read out system arguments
var args = system.args;
var scriptname = args[0];
var url = args[1];
var page = require( 'webpage').create();
// counter for recognized image requests
var counter = 0;
//error handling
phantom.onError = function (msg,trace) {
    // build up error message stack
    var msgStack = ['PHANTOM ERROR: ' + msg ];
    //if a stack trace is available push formated messages to msgStack
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
// check for correct execution
if (args.length < 2) {
    throw new Error('Name argument is missing.');
}
console.log(
    'Hey ' + name + ',how are you doing?\n' +
    'You are on a ' +  os.architecture + ' ' + os.name + ' machine.\n' +
    'You executed ' + scriptname + '.'

);
/**
 * Header for received resources
 *
 * @ param {object} response response
 */
page.onResourceReceived = function (response) {
    if (
        (
            response.contentType === 'image/jpeg' ||
            response.contentType === 'image/png'  ||
            response.contentType === 'image/gif'
        ) && response.stage === 'start'
    ) {
        //console.log(response.contentType);
        console.log('LOADED: '  + response.url);

        // increment counter
        counter++;
    }
}
/**
 * React to page load
 */
page.onLoadFinished = function (){
    console.log('******************************');
    console.log('Page loaded ' + counter + ' images.');
    phantom.exit();

}
page.open(url);
