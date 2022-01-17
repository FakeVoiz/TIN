"use strict";
console.log("factorialRecursive(5): " + factorialRecursive(5));
console.log("factorialIterative(5): " + factorialIterative(5));
console.log("fibonacci(10): " + fibonacci(10));
console.log("isPolidrome(\"aha\"): " + isPolidrome("aha"));
console.log("isPolidrome(\"word\"): " + isPolidrome("word"));
console.log("alphabeticalOrder(\"webmaster\"): " + alphabeticalOrder("webmaster"));
console.log("longestWord(\"ban banananananananana banana banans\"): " + longestWord("ban banananananananana banana banans"));
console.log("isPrime(13): " + isPrime(13));
console.log("isPrime(16): " + isPrime(16));
console.log("getType(\"some string\"): " + getType("some string"));
console.log("getType(1221): " + getType(1221));
console.log("getSecondLowersAndSecondGreatestNumbers([1,3,6,7,11,10,2]): " + getSecondLowersAndSecondGreatestNumbers([1, 3, 6, 7, 11, 10, 2]));
console.log("amountToCoins(46, [25, 10, 5, 2, 1]): " + amountToCoins(46, [25, 10, 5, 2, 1]));
console.log("binarySearch([1,2,3,4,5,6,7,8,9], 7, 0, 9): " + binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7, 0, 9));
function factorialRecursive(num) {
    if (num == 1)
        return 1;
    return num * factorialRecursive(num - 1);
}
function factorialIterative(num) {
    if (num == 1)
        return 1;
    var result = 1;
    for (var i = 1; i <= num; i++)
        result = result * i;
    return result;
}
function fibonacci(num) {
    if (num < 2)
        return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
function isPolidrome(word) {
    word = word.toLowerCase();
    var chars = word.split("");
    var inverseChars = word.split("").reverse();
    for (var i = 0; i < chars.length; i++) {
        if (chars[i] != inverseChars[i])
            return false;
    }
    return true;
}
function alphabeticalOrder(word) {
    var chars = word.split("");
    chars.sort();
    return chars.toString();
}
function longestWord(sentace) {
    var words = sentace.split(" ");
    words.sort(function (w1, w2) { return w2.length - w1.length; });
    return words[0];
}
function isPrime(num) {
    num = Math.abs(num);
    if (num < 2)
        return false;
    for (var i = 2; i < num; i++)
        if (num % i == 0)
            return false;
    return true;
}
function getType(arg) {
    return typeof (arg);
}
function getSecondLowersAndSecondGreatestNumbers(nums) {
    nums = nums.sort(function (n1, n2) { return n1 - n2; });
    return [nums[1], nums[nums.length - 2]];
}
function amountToCoins(ammountOfMoney, coins) {
    coins = coins.sort(function (n1, n2) { return n2 - n1; });
    function calculateReminder(money, coins) {
        if (coins == null || coins.length < 1)
            return money;
        return money - coins.reduce(function (n1, n2) { return n1 + n2; });
    }
    var result = [];
    var coinIndex = 0;
    var reminder = calculateReminder(ammountOfMoney, result);
    while ((reminder = calculateReminder(ammountOfMoney, result)) > 0) {
        while (reminder < coins[coinIndex]) {
            if (coinIndex >= coins.length)
                throw new Error("Given set of coins cannot describe such amount");
            coinIndex++;
        }
        result.push(coins[coinIndex]);
    }
    return result;
}
function binarySearch(nums, numberToFind, leftPos, rightPos) {
    if (rightPos >= leftPos) {
        var center = leftPos + (rightPos - leftPos) / 2;
        center = Math.round(center);
        if (nums[center] == numberToFind)
            return center;
        if (nums[center] > numberToFind)
            return binarySearch(nums, numberToFind, leftPos, center - 1);
        return binarySearch(nums, numberToFind, center + 1, rightPos);
    }
    throw new Error("there is no such number ${numberToFind} in array");
}
