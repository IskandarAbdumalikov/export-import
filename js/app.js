import { ortaArifmetik } from "./methods.js"; 
let sonlar = [3,4,5,6]
console.log(ortaArifmetik(sonlar));//4,5

import { daraja } from "./methods.js";
console.log(daraja(5,3));//125

import { factorial } from "./methods.js";
console.log(factorial(5));//120

import { qisqaSoz } from "./methods.js";
let words = "salom Toshkent dasturlash"
console.log(qisqaSoz(words)); // 5

import { onlyStrings } from "./methods.js";
console.log(onlyStrings("m3eng24a da5s88tur90la9sh yo16qa98di8"));//menga dasturlash yoqadi

import { calculator } from "./methods.js";
console.log(calculator(5,"*", 3));//15

import { createWord } from "./methods.js";
let sentence = "Hello ello llo lo o";
console.log(createWord(sentence));//hello

import { randomNumber } from "./methods.js";
console.log(randomNumber(1, 100));//random for between startpoint and endpoint

import { randomTelNumber } from "./methods.js";
console.log(randomTelNumber());

import { findPrimeNumbersInRange } from "./methods.js";
console.log(findPrimeNumbersInRange(1, 10));// 1dan 10 gacha tub sonlar

import { sumDigits } from "./methods.js";
console.log(sumDigits(23634));// 2+3+6+3+4 = 18