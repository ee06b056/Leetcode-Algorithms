/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    function _numDecodings(s, n) {
        // console.log(n);
        if (n == s.length - 1) {
            if (s[n] == '0') {
                return 0;
            } else {
                return 1;
            }
        } else if (n >= s.length) {
            return 1;
        }
        let key = parseInt(s.slice(n,n+2));

        // console.log('key is : ',key);
        if (key == 10 || key == 20) {
            return _numDecodings(s, n+2); 
        } else if (key < 10) {
            return 0;
        } else if (key > 26) {
            return _numDecodings(s, n+1);
        }else {
            return _numDecodings(s, n+1) + _numDecodings(s, n+2);
        }
    }
    if (s == '') return 0;
    return _numDecodings(s, 0);
};

console.log(numDecodings("4673351343232714528787622144828949686814115978657763689251918941228645575658338815495647817194659920"));

var numDecodings = function (s) {
    let l = s.length;
    let counts = Array(l + 1);
    counts[l] = 1;
    if (s[l-1] == '0') {
        counts[l-1] = 0;
    } else {
        counts[l-1] = 1;
    }

    for (let i = l - 2; i >= 0; i--) {
        if (s[i] == '0') {
            counts[i] = 0;
        } else if (parseInt(s.slice(i, i + 2)) <=26) {
            counts[i] = counts[i+1] + counts[i + 2];
        } else {
            counts[i] = counts[i+1];
        }
    }
    return counts[0];
}

console.log(numDecodings("12"));

var numDecodings = function (s) {
    if (s[0] == '0') {
        return 0;
    } else if (s.length == 1) {
        return 1;
    }
    let count1 = 1, count2 = 1, result = 0;
    for (let i = 1; i < s.length; i++) {
        let key = parseInt(s.slice(i-1,i+1));
        if (s[i] == '0') {
            if (key == 10 || key == 20) {
                count1 = 0;
                result = count2;
            } else {
                return 0;
            } 
        } else if (key <= 26) {
            result = count1 + count2;
        } else if (key > 26) {
            count2 = 0;
            result = count1;
        }
        count2 = count1;
        count1 = result;
    }
    return result;
}

console.log(numDecodings('101'))