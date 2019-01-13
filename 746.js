/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const dp = [0, 0];
    dp.push(cost[0] < cost[1] ? cost[0] : cost[1]);
    for (let i = 2; i < cost.length; i++) {
        dp.push(Math.min(dp[1] + cost[i - 1], dp[2] + cost[i]));
        dp.shift();
    }
    return dp[2];
};