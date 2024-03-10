function gcd(a, b) {
    // Euclidean algorithm to find the greatest common divisor (GCD)
    if (b === 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

function lcm(a, b) {
    // LCM of two numbers using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) / gcd(a, b);
}

function lcmOfThreeNumbers(num1, num2, num3) {
    // LCM of three numbers: LCM(a, b, c) = LCM(a, LCM(b, c))
    return lcm(num1, lcm(num2, num3));
}

// Taking input from the user
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));
const num3 = parseInt(prompt("Enter the third number:"));

// Calculating the LCM
const result = lcmOfThreeNumbers(num1, num2, num3);

// Displaying the result
console.log("The least common multiple of", num1 + ",", num2 + ", and", num3 + " is:", result);