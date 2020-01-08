/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    if (n <= 1) return n;
    const row = new Array(n).fill(0);
    const matrix = new Array(n);
    const unvisited_node = new Set();
    for (let i = 0; i < n; i++) {
        matrix[i] = row.slice();
        matrix[i][i] = 1;
        unvisited_node.add(i);
    }
    for (let edge of edges) {
        matrix[edge[0]][edge[1]] = 1;
        matrix[edge[1]][edge[0]] = 1;
    }
    let count = 0;

    do {
        const queue = new Array();
        const visited = new Set();
        let start_node = unvisited_node.entries().next().value[0];
        queue.push(start_node);
        do {
            let current = queue.shift();
            unvisited_node.delete(current);
            visited.add(current);
            for (let i = 0; i < n; i++) {
                if (matrix[current][i] == 1 && !visited.has(i)) {
                    queue.push(i);
                }
            }
        } while (queue.length != 0);
        count++;
    } while (unvisited_node.size != 0);
    return count;
};

let n = 5, edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
console.log(countComponents(n, edges));