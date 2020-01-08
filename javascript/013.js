/**
 * @param {string} s
 * @return {number}
 */
// hash table
var romanToInt = function(s) {
    let values = {'I':1, 'V':5, 'X':10,'L':50,'C':100,'D':500,'M':1000,'IV':4,'IX':9,'XL':40,'XC':90,'CD':400,'CM':900};
    let ans = 0, i = 0, p;
    while(i < s.length) {
        if (i == s.length - 1) {
            ans += values[s[i]];
            i++;
        } else if (values[s[i]+s[i+1]]) {
            ans += values[s[i]+s[i+1]];
            i += 2;
        } else {
            ans += values[s[i]];
            i++;
        }
    }
    return ans;
};

// switch
var romanToInt = function(s) {
    let c,next,res = 0;
    for (let i = 0; i < s.length; i++) {
        c = s[i]; 
        next = s[i+1];
        switch (c) {
            case 'M':
                res += 1000;
                break;
            case 'D':
                res += 500;
                break;
            case 'C':
                switch (next) {
                    case 'M':
                    case 'D':
                        res -= 100;
                        break
                    default:
                        res += 100;
                }
                break;
            case 'L':
                res += 50;
                break;
            case 'X':
                switch (next) {
                    case 'L':
                    case 'C':
                        res -= 10;
                        break
                    default:
                        res += 10;
                }
                break;
            case 'V':
                res += 5;
                break;
            case 'I':
            console.log(next);
                switch (next) {
                    case 'V':
                    case 'X':
                        res -= 1;
                        break
                    default:
                        res += 1;
                }
                break;
        }
    }
    return res;
};

console.log(romanToInt('IX'));