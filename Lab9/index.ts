const HTTP_OK: number = 200;
const AJAX_RESPONSE_READY = 4;

function sendRequest() : void
{
    const feedback: any = document.getElementById("Result");
    const firstNumberView: any = document.getElementById("FirstNumber");
    const secondNumberView: any = document.getElementById("LastNumber");
    const operationNumberView: any = document.getElementById("Operation");

    if(feedback == null || firstNumberView == null || secondNumberView == null || operationNumberView == null)
        throw new Error("There is no such element");

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "json/", true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
    xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8;");
    xhr.onreadystatechange = () =>
    {
        if(xhr.readyState == AJAX_RESPONSE_READY && xhr.status == HTTP_OK)
        {
            console.log(JSON.parse(xhr.response))
            feedback.innerHTML = JSON.parse(xhr.response).result;
        }
    };
    
    let firstNumber = firstNumberView.value;
    let secondNumber = secondNumberView.value;
    let operation = operationNumberView.value;

    xhr.send
    (
        JSON.stringify
        (
            { 
                "FirstNumber": firstNumber, 
                "LastNumber": secondNumber,
                "Operation": operation
            }
        )
    );
}