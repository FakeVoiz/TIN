"use strict";
var HTTP_OK = 200;
var AJAX_RESPONSE_READY = 4;
function sendRequest() {
    var feedback = document.getElementById("Result");
    var firstNumberView = document.getElementById("FirstNumber");
    var secondNumberView = document.getElementById("LastNumber");
    var operationNumberView = document.getElementById("Operation");
    if (feedback == null || firstNumberView == null || secondNumberView == null || operationNumberView == null)
        throw new Error("There is no such element");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "json/", true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8;");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == AJAX_RESPONSE_READY && xhr.status == HTTP_OK) {
            console.log(JSON.parse(xhr.response));
            feedback.innerHTML = JSON.parse(xhr.response).result;
        }
    };
    var firstNumber = firstNumberView.value;
    var secondNumber = secondNumberView.value;
    var operation = operationNumberView.value;
    xhr.send(JSON.stringify({
        "FirstNumber": firstNumber,
        "LastNumber": secondNumber,
        "Operation": operation
    }));
}
