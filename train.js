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