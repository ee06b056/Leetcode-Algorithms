/**
 * @param {number[]} prices
 * @return {number}
 */
// only calculate the total profit
var maxProfit = function(prices) {
    let total_profit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i+1]) {
            total_profit += (prices[i+1] - prices[i]);
        }
    }
    return total_profit;
};
