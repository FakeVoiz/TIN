const pathLib: any = require('path');
const bodyParserLib: any = require('body-parser');
const expressLib: any = require('express');
const expressApp: any = expressLib();
const enum Operation
{
    Addition = `+`,
    Subtraction = `-`,
    Multiplication = `*`,
    Division = `/`
};

expressApp.use(bodyParserLib.urlencoded({extended: true}));
expressApp.use(bodyParserLib.json());
expressApp.get('/',(request: any, response: any) => response.sendFile(pathLib.resolve('../res/index.html')));
expressApp.post('/json',(request: any, response: any)=>
{
    let firstNumber: number = Number.parseFloat(request.body.FirstNumber);
    let secondNumber: number = Number.parseFloat(request.body.FirstNumber);
    let operation: Operation = request.body.Operation;

    let result = getResult(firstNumber, secondNumber, operation);

    response.json(({"result":result}));
});


const getResult : any = (firstNum : number, secondNum : number, operation : string) : number =>
{
    switch(operation){
        case Operation.Addition:
            return firstNum + secondNum;

        case Operation.Subtraction:
            return firstNum - secondNum;

        case Operation.Division:
            return firstNum / secondNum;

        case Operation.Multiplication:
            return firstNum * secondNum;
    }

    return NaN;
};

expressApp.listen(3000);
console.log(`Server is listening on port 3000`);