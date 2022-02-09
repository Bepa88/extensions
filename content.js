chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        alert(request.message);
        //if (request.message === "start") {
        //    start();
        //}
    }
);

function start() {
    alert("started");
}

////chrome.runtime.onMessage.addListener(message => {
////    if (message.environment) {
////        console.log(message.environment);
////    }
////});

//chrome.runtime.onMessage.addListener(function (request) {
//    console.log(request.environmentValue);
//    return true;
//});

//chrome.runtime.onMessage.addListener(
//    function (request, sender, sendResponse) {
//        if (request.message === "start") {
//            alert("started");
//        }
//    }
//);