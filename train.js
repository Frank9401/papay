// const prices = [2, 1, 5, 30, 1, 3, 10];
// console.log("You should buy stock =>", buyStock(prices));

// function buyStock(stock_prices) {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let i = 0; i < stock_prices.length; i++) {
//     if (stock_prices[i] < minPrice) {
//       minPrice = stock_prices[i];
//     } else if (stock_prices[i] - minPrice > maxProfit) {
//       maxProfit = stock_prices[i] - minPrice;
//     }
//   }

//   return maxProfit;
// }

// const detail_list = [32, null, 5, null, 13, null, 48, -78,];
// const result1 = moveNullsKeepOrder(detail_list);

// console.log("result:", result1);
// function moveNullsKeepOrder(detail_list){
//   return detail_list.sort((a, b) => {
//   if (a === null) {
//     return 1;
//   }

//   if (b === null) {
//     return -1;
//   }

//   if (a === b) {
//     return 0;
//   }

//   return a < b ? -1 : 1;
// });

// }

// function Solution (n) {
//     let a = String(n);
//     const arr = [...a];
//     const arr2 =[];

//     arr.sort();
//     arr.reverse();

//     arr2.push(Number(arr.join('')));

//     return arr2[0];
// }

// Task-F
// F-Task: Shunday function tuzing, 
//unga string argument pass bolsin. 
//Function ushbu agrumentdagi faqat digitlarni yangi stringda 
//return qilsin!  
//   Masalan: findDigits('ad5we34jkf89') return qilishi kerak bolgan qiymat '53489'

//  function findDigits(str) {
//   let digits = '';

//   for (let i = 0; i < str.length; i++) {
//     const char = str.charAt(i);

//     if (/[0-9]/.test(char)) {
//       digits += char;
//     }
//   }

//   return digits;
// }

// console.log(findDigits('ad5we34jkf89'));


// const magazine = "Lorem kill ipsum dolor you";
// const note = "dolor kills you";
// const result = canMurderWrite(note, magazine);
// console.log("killer can write:", result);

// function canMurderWrite(note, magazine){
//   const noteArri = note.split('');
//   for (let i = 0; i < noteArri.length; i++){
//     const index = magazine.indexOf(noteArri);
//     if (index === -1){
//       return false;
//     } else {
//       magazine = magazine.slice(0, index) + magazine.slice(index + 1);
//     }
//   }
//   return true;
// };


// const magazine = "Lorem kill ipsum dolor sit amet, consecctuter adipiscing elit, yu sed do eid";
// const note = "dolor kill you";
// const result = canMurderWrite(note, magazine);
// console.log("Can the killer write the note?", result);

// function canMurderWrite(note, magazine) {
//   const noteLetters = note.replace(/[^a-z]/g, '');
//   const magazineLetters = magazine.replace(/[^a-z]/g, '').split('');

//   for (const letter of noteLetters) {
//     const index = magazineLetters.indexOf(letter);
//     if (index === -1) {
//       return false; 
//     }
//     magazineLetters.splice(index, 1);
//   }

//   return true; 
// };



console.log("Jack Ma maslaxatlari");
const list= [
  "yaxshi talaba buling",
  "tugri boshliq tanlang va kupro xato qiling",
  "uzingizga ishlashni boshlang",
  "siz kuychli narsalarni qiling",
  "yoshlarga investitsiya qiling",
  "endi dam oling, foydasi yuq endi",
];