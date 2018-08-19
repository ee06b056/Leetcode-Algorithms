/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// recursion
var isMatch = function(s, p) {
    if (p == '') {
        return s == '';
    }
    if (s == '') {
        return p[1] == '*' && isMatch(s, p.slice(2));
    }
    if (p[1] == '*'){
        return isMatch(s, p.slice(2)) || ((p[0] == '.' || p[0] == s[0]) && isMatch(s.slice(1), p));
    } else {
        return (p[0] == '.' || p[0] == s[0]) && isMatch(s.slice(1), p.slice(1));
    }
};

// dp
