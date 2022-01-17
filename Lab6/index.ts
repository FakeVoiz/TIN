function converterFromFahrenheitToCelcius(inputFar: string): void
{
  let numberVal: number = parseFloat(inputFar);
  let celView: any = document.getElementById("outputCelcius");

  if(celView != null)
    celView.innerHTML = `${(numberVal - 32) * 5 / 9}`;
}

function converterFromCelciusToFahrenheits(inputCel: string): void
{
  let numberVal: number = parseFloat(inputCel);
  let farView: any = document.getElementById("outputFahrenheit"); 

  if(farView != null)
    farView.innerHTML = `${(numberVal * 5 / 9) + 32}`;
}

function addParagraphAfter5Seconds(): void
{
  let addParagraph = (): void =>
  {
    let i: string = "<p>Parafraph inserted after 5 seconds</p>";
    let tableView: any = document.getElementById("header");

    if(tableView != null)
     tableView.innerHTML = i;
  }

  let interval = window.setInterval(addParagraph, 5000);
}

function checkPasswordFormat(): boolean
{
  let passwordView: any = document.getElementById("passwordInput");

  if(passwordView == null)
    throw new Error("There is no such ellemt");

  let passwordValue: number = passwordView.value;
  let passwordReturnStatus: string;

  if (isNaN(passwordValue))
  {
      passwordView.style.color = "red";
      return false;
  }

    passwordView.style.color = "black";
    return true;
}

function checkEmailFormat(): boolean
{
  let emailView: any = document.getElementById("emailInput");
  
  if(emailView == null)
    throw new Error("There is no such ellemt");

  let emailValue: string = emailView.value;
  let pattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.match(pattern))
  {
      emailView.style.color = "black";
      return true;
  } 
  
  emailView.style.color = "red";
  return false;
}

function addTableRow(): void
{
  let table: any = document.getElementById("table");
  if(table == null)
    return;

  let row: any = table.insertRow(0);
  let cell1: any = row.insertCell(0);
  let cell2: any = row.insertCell(1);
  cell1.innerHTML = "Inserted cell";
  cell2.innerHTML = "Inserted cell";
}

addParagraphAfter5Seconds();