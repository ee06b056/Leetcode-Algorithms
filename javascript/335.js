/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function(x) {
    class square {
        constructor () {
            this.points = new Array(6);
            for (let i = 0; i < 6; i++) {
                this.points[i] = [0, 0];
            }
        }
        
        move (step, dir) {
            const x0 = this.points[0][0], x1 = this.points[1][0], x2 = this.points[2][0], x3 = this.points[3][0], x5 = this.points[5][0];
            const y0 = this.points[0][1], y1 = this.points[1][1], y2 = this.points[2][1], y3 = this.points[3][1], y5 = this.points[5][1];
            let x6, y6;
            switch (dir) {
                case 'N':
                    if ((x5 >= x0 && x5 <= x1 && y0 >= y5 && y0 <= y5 + step && x0 != x1) || (x5 >= x3 && x5 <= x2 && y2 >= y5 && y2 <= y5 + step && x3 != x2)) {
                        return true;
                    }
                    x6 = x5, y6 = y5 + step;
                    break;
                case 'W':
                    if ((y5 >= y0 && y5 <= y1 && x0 >= x5 - step && x0 <= x5 && y0 != y1) || (y5 >= y3 && y5 <= y2 && x2 >= x5 - step && x2 <= x5 && y2 != y3)) {
                        return true;
                    }
                    x6 = x5 - step, y6 = y5;
                    break;
                case 'S':
                    if ((x5 >= x1 && x5 <= x0 && y1 >= y5 - step && y1 <= y5 && x0 != x1) || (x5 >= x2 && x5 <= x3 && y2 >= y5 - step && y2 <= y5 && x3 != x2)) return true;
                    x6 = x5, y6 = y5 - step;
                    break;
                case 'E':
                    if ((y5 >= y1 && y5 <= y0 && x0 >= x5 && x0 <= x5 + step && y0 != y1) || (y5 >= y2 && y5 <= y3 && x2 >= x5 && x2 <= x5 + step && y2 != y3)) return true;
                    x6 = x5 + step, y6 = y5;
                    break;
            }
            for (let p of this.points) {
                if (x6 == p[0] && y6 == p[1]) return true;
            }
            this.points.push([x6, y6]);
            this.points.shift();
            console.log(this.points);
            return false;
        }
    }

    const directions = ['N', 'W', 'S', 'E'];
    const s = new square();
    for (let i = 0; i < x.length; i++) {
        if (s.move(x[i], directions[i % 4])) {
            return true;
        }
    }
    return false;
};

let x = [1,1,2,1,1]
console.log(isSelfCrossing(x));