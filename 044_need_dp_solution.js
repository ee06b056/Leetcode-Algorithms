/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// var isMatch = function(s, p) {
//     let temp = '';
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] == '*' && p[i -1] == '*') {
//             continue;
//         } else {
//             temp += p[i];
//         }
//     }
//     p = temp;
//     // console.log(p);
//     if (s == '') {
//         return p == '' || (p[0] == '*' && isMatch(s, p.slice(1)));
//     }
//     if (p == '') {
//         return s == '';
//     }
//     if (p[0] == '*') {
//         return isMatch(s, p.slice(1)) || isMatch(s.slice(1), p);
//     } else if (p[0] == '?') {
//         return isMatch(s.slice(1), p.slice(1));
//     } else {
//         return s[0] == p[0] && isMatch(s.slice(1), p.slice(1));
//     }
// };

// two pointer solution
var isMatch = function (s, p) {
    let [s1, s2, p1, p2] = [0, 0, 0, -1];
    while (s1 < s.length) {
        if (p1 < p.length && (p[p1] == '?' || s[s1] == p[p1])) {
            s1++;
            p1++;
        } else if (p1 < p.length && p[p1] == '*') {
            s2 = s1;
            p2 = p1;
            p1++;
        } else if (p2 != -1) {
            p1 = p2 + 1;
            s2++;
            s1 = s2;
        } else {
            return false;
        }
    }
    while (p1 < p.length) {
        if (p[p1] == '*') {
            p1++;
        } else {
            break;
        }
    }
    return p1 == p.length;
};

let s = "ho", p = "*a**";
console.log(isMatch(s, p));