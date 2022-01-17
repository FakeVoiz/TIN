"use strict";
var pathLib = require('path');
var bodyParserLib = require('body-parser');
var expressLib = require('express');
var expressApp = expressLib();
;
expressApp.use(bodyParserLib.urlencoded({ extended: true }));
expressApp.use(bodyParserLib.json());
expressApp.get('/', function (request, response) { return response.sendFile(pathLib.resolve('../res/index.html')); });
expressApp.post('/json', function (request, response) {
    var firstNumber = Number.parseFloat(request.body.FirstNumber);
    var secondNumber = Number.parseFloat(request.body.FirstNumber);
    var operation = request.body.Operation;
    var result = getResult(firstNumber, secondNumber, operation);
    response.json(({ "result": result }));
});
var getResult = function (firstNum, secondNum, operation) {
    switch (operation) {
        case "+" /* Addition */:
            return firstNum + secondNum;
        case "-" /* Subtraction */:
            return firstNum - secondNum;
        case "/" /* Division */:
            return firstNum / secondNum;
        case "*" /* Multiplication */:
            return firstNum * secondNum;
    }
    return NaN;
};
expressApp.listen(3000);
console.log("Server is listening on port 3000");
