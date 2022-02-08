////chrome.runtime.onMessage.addListener(message => {
////    if (message.environment) {
////        console.log(message.environment);
////    }
////});

chrome.runtime.onMessage.addListener(function (request) {
    console.log(request.environmentValue);
    return true;
});