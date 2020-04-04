let num;
let numArr;

let digit = [
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];

let digitOne = [
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];

let digitTwo = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

audit();

function audit() {
  for (; true; ) {
    num = prompt("Enter 2-digits number");

    numArr = num.split("");

    if (!isNaN(num) && numArr.length === 2 && numArr[0] !== "0") {
      break;
    } else {
      alert("Incorrect");
      continue;
    }
  }
}

function result(numArr, num, digit, digitOne, digitTwo) {
  let tmp = [];
  let tmpNumber;

  tmpNumber = +num;

  numArr.forEach((element) => {
    tmp.push(Number(element));
  });

  if (tmpNumber >= 10 && tmpNumber < 20) {
    return `Result: ${digit[tmp[1]]}`;
  } else if (tmpNumber >= 20 && tmpNumber < 100) {
    if (tmp[1] === 0) {
      return `Result: ${digitOne[tmp[0] - 2]}`;
    } else if (tmp[1] > 0) {
      return `Result: ${digitOne[tmp[0] - 2]} ${digitTwo[tmp[1] - 1]}`;
    }
  }
}

document.write(result(numArr, num, digit, digitOne, digitTwo));
