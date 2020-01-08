/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let ans = '1';
    for (let i = 0; k < n - 1; i++) {
        let j = ans.length - 1, char = ans[j], count = 0, temp = '';
        while (j >= 0) {
            if (ans[j] == char) {
                count++
            } else {
                temp = '' + count + char + temp;
                char = ans[j];
                count = 1;
            }
            j--;
        }
        temp = '' + count + char + temp;
        ans = temp;
    }
    return ans;
};

function count (ans) {
    let char = ans[ans.length - 1], count = 1, temp = '';
    for (let j = ans.length - 2; j >= 0; j--) {
        if (ans[j] == char) {
            count++;
        } else {
            temp = '' + count + char + temp;
            char = ans[j];
            count = 1;
        }
    }
    temp = '' + count + char + temp;
    console.log(temp);
}

count('1211');