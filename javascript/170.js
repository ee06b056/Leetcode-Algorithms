/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    this.nums = {}
};

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (!this.nums[number]) {
        this.nums[number] = 1
    } else {
        this.nums[number]++
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let i in this.nums) {
        console.log('value: '+value, 'i: '+i);
        console.log(this.nums);
        if (value - i == i && this.nums[i] >= 2) {
            return true;
        } else if (value - i != i && this.nums[value - i]) {
            return true;
        }
    }
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

var obj = new TwoSum();
obj.add(1);
obj.add(2);
obj.add(3);
// obj.add(5);
console.log(obj.nums);

console.log(obj.find(1))
console.log(obj.find(2))
console.log(obj.find(3))
console.log(obj.find(4))
console.log(obj.find(5))
console.log(obj.find(6))

