/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var read4 = function (char) {
    if (char.length > 4) {
        return 4;
    } else {
        return char.length;
    }
}

var solution = function(read4) {
    var interbuff = [];
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Maximum number of characters to read
     * @return {number} The number of characters read
     */
    return function(buf, n) {
        console.log(interbuff);
        let result = 0, n_left = n, i = 0;
        while (n_left > 0) {
            let buf_left = buf.slice(i);
            if (buf_left.length == 0) {
                break;
            }
            result += read4(buf_left);
            i += 4;
            n_left -= 4;
        }
        // console.log('result: ',result);
        // console.log('n: ', n);
        // if (result > n) {
        //     return n;
        // } else {
        //     return result;
        // }
        return result > n ? n : result;
    };
};

let sol = solution(read4);
console.log(sol(['a','b','c','d','e','f','g','h','i','j','k'],21));

console.log(['a'].slice(0));