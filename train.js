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

 function findDigits(str) {
  let digits = '';

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (/[0-9]/.test(char)) {
      digits += char;
    }
  }

  return digits;
}

console.log(findDigits('ad5we34jkf89'));
