import { Console } from "console";
import { copyFileSync } from "fs";
import { ClientRequest, IncomingMessage, Server, ServerResponse } from "http";

namespace Lab7
{
    enum Operations
    {
        Add = "+", 
        Substruct = "-",
        Multiply = "*",
        Divide = ":"
    }

    function add(a: number, b: number): number
    {
        return a + b;
    }

    function substract(a: number, b: number): number
    {
        return a - b;
    }

    function multiply(a: number, b: number): number
    {
        return a * b;
    }

    function divide(a: number, b: number): number
    {
        return a / b;
    }

    function processRequest(incomingMessage: IncomingMessage) : string
    {
        let request: string | undefined = incomingMessage.url;

        if(request == undefined)
            return "bad request\n";

        let symbols: string[] | undefined = request?.split('/');
        let a : number | undefined = symbols ? Number(symbols[1]) : undefined;
        let b : number | undefined = symbols ? Number(symbols[3]) : undefined;
        let operator : string | undefined = symbols ? symbols[2] : undefined;

        if(a == undefined || b == undefined)
            return "bad number\n";

        switch (operator)
        {
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

    let ip: string = "127.0.0.1";
    let port: number = 8000; 
    let http: any = require('http');
    let sever: Server = http.createServer((incomingMessage: IncomingMessage, response: ServerResponse) => 
    {
        response.writeHead(200, {"Content-type": "text/plain"});
        response.end(processRequest(incomingMessage));
    });

    sever.listen(port, ip);
    console.log(`Server is listening on ${ip}:${port}`);
}