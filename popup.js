var environmentValue;
var brandValue;

document.getElementById("InitializationOfVariables").addEventListener("click", InitializationOfVariables);

function InitializationOfVariables() {

    environmentValue = document.querySelector('input[name=Environment]:checked').value;
    brandValue = document.querySelector('input[name=Brand]:checked').value;
    /*doPlayerLogin(environmentValue, brandValue);*/
    console.log("aaa");
    console.log(environmentValue, brandValue);
}



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