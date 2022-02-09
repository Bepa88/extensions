var environmentValue = document.querySelector('input[name=Environment]:checked').value;
var brandValue = document.querySelector('input[name=Brand]:checked').value;

document.getElementById("InitializationOfVariables").addEventListener("click", InitializationOfVariables);

function InitializationOfVariables() {
    //Want to Pass this variable.
    environmentValue = document.querySelector('input[name=Environment]:checked').value;
    brandValue = document.querySelector('input[name=Brand]:checked').value;

    //chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //    var activeTab = tabs[0];
    //    chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
    //});


    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, environmentValue)
    });


    //chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    //    chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' }, () => {
    //        chrome.tabs.sendMessage(tabs[0].id, { environment: environmentValue });
    //    });
    //});
}

function popup() {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "message": environmentValue });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("InitializationOfVariables").addEventListener("click", popup);
});

//function InitializationOfVariables() {

//    environmentValue = document.querySelector('input[name=Environment]:checked').value;
//    brandValue = document.querySelector('input[name=Brand]:checked').value;
//    /*doPlayerLogin(environmentValue, brandValue);*/
//    console.log("aaa");
//    console.log(environmentValue, brandValue);
//}



function doPlayerLogin(envType, brandId) {
    var elUsername = document.getElementById("user");
    var elPassword = document.getElementById("password");
    var elButtonLogin = document.getElementById("submit");
    //var brandId = getBrandId();
    var eventChange = new Event('change');
    var eventBlur = new Event('blur');
    elUsername.value = "viktorl22-" + brandId + "@" + envType + ".com";
    elUsername.dispatchEvent(eventChange);
    elUsername.dispatchEvent(eventBlur);
    elPassword.value = "Test1234";
    elPassword.dispatchEvent(eventChange);
    elPassword.dispatchEvent(eventBlur);
    elButtonLogin.click();

    /*function getBrandId() {
        var url = new URL(window.location.href);
        return url.searchParams.get("BrandId");
    }*/
}