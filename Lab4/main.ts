console.log("factorialRecursive(5): " + factorialRecursive(5));
console.log("factorialIterative(5): " + factorialIterative(5));
console.log("fibonacci(10): " + fibonacci(10));
console.log("isPolidrome(\"aha\"): " + isPolidrome("aha"));
console.log("isPolidrome(\"word\"): " + isPolidrome("word"));
console.log("alphabeticalOrder(\"webmaster\"): " + alphabeticalOrder("webmaster"));
console.log("longestWord(\"ban banananananananana banana banans\"): "+ longestWord("ban banananananananana banana banans"));
console.log("isPrime(13): " + isPrime(13));
console.log("isPrime(16): " + isPrime(16));
console.log("getType(\"some string\"): " + getType("some string"));
console.log("getType(1221): " + getType(1221));
console.log("getSecondLowersAndSecondGreatestNumbers([1,3,6,7,11,10,2]): " + getSecondLowersAndSecondGreatestNumbers([1,3,6,7,11,10,2]));
console.log("amountToCoins(46, [25, 10, 5, 2, 1]): " + amountToCoins(46, [25, 10, 5, 2, 1]));
console.log("binarySearch([1,2,3,4,5,6,7,8,9], 7, 0, 9): " + binarySearch([1,2,3,4,5,6,7,8,9], 7, 0, 9));

function factorialRecursive(num : number) : number
{
    if(num == 1)
        return 1;

    return num * factorialRecursive(num - 1);
}

function factorialIterative(num : number) : number
{
    if(num == 1)
        return 1;
    
    let result : number = 1;
    for(let i : number = 1; i <= num; i++)
        result = result * i;

    return result;
}

function fibonacci(num : number) : number
{
    if (num < 2)
        return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

function isPolidrome(word : string) : boolean
{
    word = word.toLowerCase();
    let chars : string[] = word.split("");
    let inverseChars : string[] = word.split("").reverse();

    for(let i : number = 0; i < chars.length; i++)
    {
        if(chars[i] != inverseChars[i])
            return false;
    }

    return true;
}

function alphabeticalOrder(word : string) : string
{
    let chars : string[] = word.split("");
    chars.sort();

    return chars.toString();
}

function longestWord(sentace : string) : string
{
    let words = sentace.split(" ");
    words.sort((w1, w2) => w2.length - w1.length);

    return words[0];
}

function isPrime(num : number) : boolean
{
    num = Math.abs(num);

    if(num < 2)
        return false;

    for(let i : number = 2; i < num; i++)
        if(num % i == 0)
            return false;

    return true;
}

function getType(arg : any) : string
{
    return typeof(arg);
}

function getSecondLowersAndSecondGreatestNumbers(nums : number[]) : [number, number]
{
    nums = nums.sort((n1, n2) => n1 - n2);

    return [nums[1], nums[nums.length - 2]];
}

function amountToCoins(ammountOfMoney : number, coins : number[]) : number[]
{
    coins = coins.sort((n1, n2) => n2 - n1);
    
    function calculateReminder(money : number, coins : number[]) : number 
    {
        if(coins == null || coins.length < 1)
            return money;

        return money - coins.reduce((n1, n2) => n1 + n2);
    }
    let result : number[] = [];
    let coinIndex : number = 0;
    let reminder : number = calculateReminder(ammountOfMoney, result);

    while((reminder = calculateReminder(ammountOfMoney, result)) > 0)
    {
        while(reminder < coins[coinIndex])
        {
            if(coinIndex >= coins.length)
                throw new Error("Given set of coins cannot describe such amount");

            coinIndex++;
        }

        result.push(coins[coinIndex]);
    }

    return result;
}

function binarySearch(nums : number[], numberToFind: number, leftPos : number, rightPos : number) : number
{
    if(rightPos >= leftPos)
    {
        let center : number = leftPos + (rightPos - leftPos) / 2;
        center = Math.round(center);

        if(nums[center] == numberToFind)
            return center;

        if(nums[center] > numberToFind)
            return binarySearch(nums, numberToFind, leftPos, center - 1);

        return binarySearch(nums, numberToFind, center + 1, rightPos);
    }

    throw new Error("there is no such number ${numberToFind} in array");
}