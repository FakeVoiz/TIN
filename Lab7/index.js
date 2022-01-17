"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lab7;
(function (Lab7) {
    let Operations;
    (function (Operations) {
        Operations["Add"] = "+";
        Operations["Substruct"] = "-";
        Operations["Multiply"] = "*";
        Operations["Divide"] = ":";
    })(Operations || (Operations = {}));
    function add(a, b) {
        return a + b;
    }
    function substract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    function processRequest(incomingMessage) {
        let request = incomingMessage.url;
        if (request == undefined)
            return "bad request\n";
        let symbols = request === null || request === void 0 ? void 0 : request.split('/');
        let a = symbols ? Number(symbols[1]) : undefined;
        let b = symbols ? Number(symbols[3]) : undefined;
        let operator = symbols ? symbols[2] : undefined;
        if (a == undefined || b == undefined)
            return "bad number\n";
        switch (operator) {
            case Operations.Add:
                return `${a + b}\n`;
            case Operations.Substruct:
                return `${a - b}\n`;
            case Operations.Multiply:
                return `${a * b}\n`;
            case Operations.Divide:
                return `${a / b}\n`;
            default:
                return "bad operator\n";
        }
    }
    let ip = "127.0.0.1";
    let port = 8000;
    let http = require('http');
    let sever = http.createServer((incomingMessage, response) => {
        response.writeHead(200, { "Content-type": "text/plain" });
        response.end(processRequest(incomingMessage));
    });
    sever.listen(port, ip);
    console.log(`Server is listening on ${ip}:${port}`);
})(Lab7 || (Lab7 = {}));
