/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    let i = 0, inserted = false, ans = [];
    while (i < intervals.length) {
        if (!inserted) {
            if (intervals[i].end < newInterval.start) {
                ans.push(intervals[i]);
                i++;
            } else if (newInterval.start < intervals[i].start) {
                ans.push(newInterval);
                inserted = true;
            } else {
                ans.push(intervals[i]);
                intervals[i] = newInterval;
                inserted = true;
            }
        } else {
            let lastInterval = ans[ans.length - 1];
            if (lastInterval.end < intervals[i].start) {
                return ans.concat(intervals.slice(i));
            } else {
                lastInterval.end = Math.max(lastInterval.end, intervals[i].end);
                i++;
            }
        }
    }
    if (!inserted) {
        ans.push(newInterval);
    } 
    return ans;
};

function Interval (start, end) {
    this.start = start;
    this.end = end;
}

let intervals = [new Interval(1, 2), new Interval(3, 5), new Interval(6,7), new Interval(8, 10), new Interval(12, 16)], newInterval = new Interval(4, 8);
console.log(insert(intervals, newInterval));