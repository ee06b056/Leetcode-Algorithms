/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => {
        return a.start - b.start;
    });
    let ans = [];
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i + 1].start > intervals[i].end) {
            ans.push(intervals[i]);
        } else {
            intervals[i + 1].start = intervals[i].start;
            intervals[i + 1].end = Math.max(intervals[i].end, intervals[i + 1].end);
        }
    }
    ans.push(intervals[intervals.length - 1]);
    return ans;
};
function Interval (start, end) {
    this.start = start;
    this.end = end;
}
