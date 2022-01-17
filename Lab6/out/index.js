"use strict";
function converterFromFahrenheitToCelcius(inputFar) {
    var numberVal = parseFloat(inputFar);
    var celView = document.getElementById("outputCelcius");
    if (celView != null)
        celView.innerHTML = "" + (numberVal - 32) * 5 / 9;
}
function converterFromCelciusToFahrenheits(inputCel) {
    var numberVal = parseFloat(inputCel);
    var farView = document.getElementById("outputFahrenheit");
    if (farView != null)
        farView.innerHTML = "" + ((numberVal * 5 / 9) + 32);
}
function addParagraphAfter5Seconds() {
    var addParagraph = function () {
        var i = "<p>Parafraph inserted after 5 seconds</p>";
        var tableView = document.getElementById("header");
        if (tableView != null)
            tableView.innerHTML = i;
    };
    var interval = window.setInterval(addParagraph, 5000);
}
function checkPasswordFormat() {
    var passwordView = document.getElementById("passwordInput");
    if (passwordView == null)
        throw new Error("There is no such ellemt");
    var passwordValue = passwordView.value;
    var passwordReturnStatus;
    if (isNaN(passwordValue)) {
        passwordView.style.color = "red";
        return false;
    }
    passwordView.style.color = "black";
    return true;
}
function checkEmailFormat() {
    var emailView = document.getElementById("emailInput");
    if (emailView == null)
        throw new Error("There is no such ellemt");
    var emailValue = emailView.value;
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue.match(pattern)) {
        emailView.style.color = "black";
        return true;
    }
    emailView.style.color = "red";
    return false;
}
function addTableRow() {
    var table = document.getElementById("table");
    if (table == null)
        return;
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Inserted cell";
    cell2.innerHTML = "Inserted cell";
}
addParagraphAfter5Seconds();
