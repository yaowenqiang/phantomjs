console.log('hello world');
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
    console.log('jo');
    phantom.exit(1)

}
throw new Error('Something bad happened');
//phantom.exit1();
phantom.exit();
