/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (!graph) return null;
    class UndirectedGraphNode {
        constructor (label) {
            this.label = label;
            this.neigbors = [];
        }
    }

    const to_be_visited = [graph];
    const visited = new Set();
    const new_nodes = new Map();
    do {
        const current_old = to_be_visited.shift();
        visited.add(current_old.label);
        if (!new_nodes.has(current_old.label)) {
            new_nodes.set(current_old.label, new UndirectedGraphNode(current_old.label));
        }
        const current_new = new_nodes.get(current_old.label);
        if (!current_old.neigbors) {
            continue;
        }
        for (let neigbor of current_old.neigbors) {
            if (!visited.has(neigbor.label)) {
                to_be_visited.push(neigbor);
            }
            if (!new_nodes.has(neigbor.label)) {
                new_nodes.set(neigbor.label, new UndirectedGraphNode(neigbor.label));
            }
            const neigbor_new = new_nodes.get(neigbor.label);
            current_new.neigbors.push(neigbor_new);
        }
    } while (to_be_visited.length != 0);
    return new_nodes.get(graph.label);
};