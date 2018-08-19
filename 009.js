/**
 * @param {number} x
 * @return {boolean}
 */
// int to string
var isPalindrome = function(x) {
    if (x < 0) return false;
    else {
        s = x.toString();
        let i =0, j = s.length - 1;
        while (i <= j) {
            if (s[i] != s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
  34
  }
};
// reverse int
let isPalindrome = x => {
    if (x < 0) return false;
    else {
        let t = x, r = 0;
        while (t) {
            r = r * 10 + (t%10);
            t = parseInt(t/10);
        }
        return x == r;
    }
}