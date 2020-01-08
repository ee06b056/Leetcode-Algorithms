/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let front = '', back = '';
    let i = 0, j = s.length - 1;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    while (i < j) {
        if (!vowels.includes(s[i])) {
            front = front + s[i];
            i++;
            continue;
        }
        if (!vowels.includes(s[j])) {
            back = s[j] + back;
            j--;
            continue;
        }
        front = front + s[j];
        back = s[i] + back;
        i++;
        j--;
    }
    if (i == j) {
        return front + s[i] + back;
    }
    
    return front + back;
};