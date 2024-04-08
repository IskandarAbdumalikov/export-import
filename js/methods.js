export let ortaArifmetik = (sonlar) => {
  let sum = 0;
  for (let i = 0; i < sonlar.length; i++) {
    sum += sonlar[i];
  }
  return sum / sonlar.length;
};

export let daraja = (son, daraja) => {
  return son ** daraja;
};

export function factorial(n) {
  if (n < 0 || n > 12) {
    throw new Error("Input must be between 0 and 12");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

export function qisqaSoz(sozlar) {
  let soz = sozlar.split(" ");
  let shortestLength = soz[0].length;
  for (let i = 1; i < soz.length; i++) {
    if (soz[i].length < shortestLength) {
      shortestLength = soz[i].length;
    }
  }

  return shortestLength;
}

export let onlyStrings = (s) => {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isNaN(parseInt(char))) {
      result += char;
    }
  }
  return result;
};

export let calculator = (numFirst, amal, numSecond) => {
  let sum = 0;
  switch (amal) {
    case "/":
      sum += numFirst / numSecond;
      break;
    case "*":
      sum += numFirst * numSecond;
      break;
    case "-":
      sum += numFirst - numSecond;
      break;
    case "+":
      sum += numFirst + numSecond;
      break;
    default:
      break;
  }
  return sum;
};

export function createWord(sentence) {
  let words = sentence.split(" ");
  let createdWord = "";
  for (let i = 0; i < words.length; i++) {
    createdWord += words[i][0];
  }
  return createdWord;
}

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomTelNumber() {
  let code = "+998";
  let number = "";
  for (let i = 0; i < 7; i++) {
    number += Math.floor(Math.random() * 10);
  }
  let phoneNumber = `${code} ${number.slice(0, 2)} ${number.slice(
    2,
    5
  )} ${number.slice(5)}`;
  return phoneNumber;
}

export function findPrimeNumbersInRange(start, end) {
  let primeNumbers = [];
  for (let number = start; number <= end; number++) {
    if (number <= 1) continue; // 1 dan kichik sonlar tub emas
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(number);
    }
  }
  return primeNumbers;
}

export function sumDigits(number) {
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

//
export let CATEGORY = "changeCategory";