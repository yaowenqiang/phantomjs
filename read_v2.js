var page = require('webpage').create();
testindex = 0,
loadInProgress = false;
page.onConsoleMessage = function (msg) {
    console.log(msg);
};
page.onLoadStarted = function () {
    loadInProgress = true;
    console.log('load started');
};

page.onLoadFinished = function () {
    loadInProgress = false;
    console.log('load finished');
};

var steps = [
    function () {
        //load Login Page
        page.open('https://www.baidu.com/');
    },
    function () {
        //Enter Credentials
        page.evaluate(function () {
            document.getElementById('kw').value = 'phantomjs';
            return;
        });
    },
    function () {
        // submit
        page.evaluate(function () {
            document.getElementById('form').submit();
        })
    },
    function () {
        //Output content of page to stdout after from has been submitted
        page.evaluate(function () {
            //console.log(document.querySelectorAll('html')[0].outerHTML);
            var resultElements = document.querySelectorAll('div.result h3 a');
            var i = 0;
            for(i;i < resultElements.length;i++){
                console.log(i + ' | ' + resultElements[i].innerText);
            }
        });
    }
];
interval = setInterval(function () {
    if (!loadInProgress && typeof steps[testindex] == 'function') {
        console.log('step ' + (testindex + 1));
        steps[testindex]();
        testindex++;
    }
    if (typeof steps[testindex] != 'function') {
        console.log('test complete!');
        phantom.exit();
    }
}, 50);
