// ? Chapter 38 to 42
// ! Ans 01
function power(a, b) {
let result = 1;
for (let i = 1; i <= b; i++) {
result *= a;
}
return result;
}

let base = 2; 
let exponent = 3;
let result = power(base, exponent);

document.write("<h2>Custom Power Function (Using let)</h2>");
document.write(base + " raised to the power of " + exponent + " is " + result);
// ! Ans 02
function isLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
return true;
} else {
        return false;
       }
}

var yearToCheck = parseInt(prompt("Enter a year:"));
if (!isNaN(yearToCheck)) {
    if (isLeapYear(yearToCheck)) {
        document.write("<h2>Leap Year Check</h2>");
        document.write(yearToCheck + " is a leap year.");
    } else {
        document.write("<h2>Leap Year Check</h2>");
        document.write(yearToCheck + " is not a leap year.");
    }
} else {
    alert("Invalid input. Please enter a valid year.");
}
// ! Ans 03
function calculateTriangleArea(a, b, c) {

    let S = (a + b + c) / 2;

    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

let sideA = 5; 
let sideB = 6; 
let sideC = 7; 

let triangleArea = calculateTriangleArea(sideA, sideB, sideC);

document.write("<h2>Triangle Area Calculation</h2>");
document.write("Side 'a': " + sideA + "<br>");
document.write("Side 'b': " + sideB + "<br>");
document.write("Side 'c': " + sideC + "<br>");
document.write("Area of the triangle: " + triangleArea.toFixed(2));
// ! Ans 04
function calculateAverage(subject1, subject2, subject3) {
    return (subject1 + subject2 + subject3) / 3;
}

function calculatePercentage(subject1, subject2, subject3, totalMarks) {
    return ((subject1 + subject2 + subject3) / totalMarks) * 100;
}

function mainFunction() {
var subject1Marks = 85; 
var subject2Marks = 90; 
var subject3Marks = 78; 

var totalMarks = 300; 

var average = calculateAverage(subject1Marks, subject2Marks, subject3Marks);
var percentage = calculatePercentage(subject1Marks, subject2Marks, subject3Marks, totalMarks);

document.write("<h2>Student Marks Calculation</h2>");
document.write("Subject 1 Marks: " + subject1Marks + "<br>");
document.write("Subject 2 Marks: " + subject2Marks + "<br>");
document.write("Subject 3 Marks: " + subject3Marks + "<br>");
document.write("Average Marks: " + average.toFixed(2) + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
}

mainFunction();
// ! Ans 05
function calculateSum(a, b) {
    var sum = a + b;
    return sum;
}

var num1 = 5; 
var num2 = 3; 

var ans = calculateSum(num1, num2);

document.write("<h2>Sum Calculation</h2>");
document.write("Number 1: " + num1 + "<br>");
document.write("Number 2: " + num2 + "<br>");
document.write("Sum: " + ans);
//  ! Ans 06
function deleteVowels(sentence) {
    if (sentence.length > 25) {
        return "Sentence is too long. Maximum length is 25 characters.";
    }
var vowelsRegex = /[aeiouAEIOU]/g;
var result = sentence.replace(vowelsRegex, "");

    return result;
}

var inputSentence = "Hello, World!"; 

var Result = deleteVowels(inputSentence);

document.write("<h2>Delete Vowels from Sentence</h2>");
document.write("Original Sentence: " + inputSentence + "<br>");
document.write("Modified Sentence: " + Result);
// ! Ans 07
function countSuccessiveVowelsOccurrences(text) {
    text = text.toLowerCase(); 
    var vowelCount = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text.charAt(i);
        var nextChar = text.charAt(i + 1);

        switch (currentChar + nextChar) {
            case 'ae':
            case 'ai':
            case 'ea':
            case 'ei':
            case 'ia':
            case 'ie':
            case 'io':
            case 'iu':
            case 'oa':
            case 'oi':
            case 'ou':
            case 'ua':
            case 'ue':
            case 'ui':
                vowelCount++;
                break;
            default:
                break;
        }
    }

    return vowelCount;
}

var inputText = "Pleases read this application and give me gratuity"; // Replace with your text
var occurrenceCount = countSuccessiveVowelsOccurrences(inputText);

document.write("<h2>Count Successive Vowels Occurrences</h2>");
document.write("Text: " + inputText + "<br>");
document.write("Number of Successive Vowels Occurrences: " + occurrenceCount);
// ! Ans 09
function calculateOvertimePay(hoursWorked) {
var regularHours = 40;
var overtimeRate = 12.00;
var overtimeHours = Math.max(0, hoursWorked - regularHours);
var overtimePay = overtimeHours * overtimeRate;

    return overtimePay;
}

var hoursWorked = 45;

var overtimePay = calculateOvertimePay(hoursWorked);

document.write("<h2>Overtime Pay Calculation</h2>");
document.write("Hours Worked: " + hoursWorked + " hours<br>");
document.write("Overtime Pay: Rs. " + overtimePay.toFixed(2));
// ! Ans 10

