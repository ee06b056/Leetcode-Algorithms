/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let ans = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i] == 0) {
            continue;
        }
        if (ans.length == 0) {
            ans.push(asteroids[i]);
            continue;
        }
        let cur = ans.pop();
        let next = asteroids[i];
        if (cur < 0 || (cur > 0 && next > 0)) {
            ans.push(cur);
            ans.push(next);
            continue;
        } else if (cur + next == 0) {
            continue;
        } else if (cur + next > 0) {
            ans.push(cur);
            continue;
        } else if (cur + next < 0) {
            i--;
            continue;
        }
    }
    return ans;
};