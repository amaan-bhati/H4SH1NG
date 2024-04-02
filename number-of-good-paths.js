
class UnionFind {
    constructor(n) {
        this.parent = new Array(n).fill().map((_, i) => i);
        this.rank = new Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
        return this.parent[x];
    }

    union(a, b) {
        const [rootA, rootB] = [this.find(a), this.find(b)];
        if (rootA === rootB) return;
        if (this.rank[rootA] > this.rank[rootB]) {
            this.parent[rootB] = rootA;
            this.rank[rootA] += this.rank[rootB];
        } else {
            this.parent[rootA] = rootB;
            this.rank[rootB] += this.rank[rootA];
        }
    }
}

var numberOfGoodPaths = function (vals, edges) {
    const n = vals.length;  
    const adj = new Array(n).fill().map(() => []);
    for (const [from, to] of edges) {
        adj[from].push(to);
        adj[to].push(from);
    }
    const valToNodes = new Map();
    for (let i = 0; i < n; i++) {
        if (!valToNodes.has(vals[i])) {
            valToNodes.set(vals[i], []);
        }
        valToNodes.get(vals[i]).push(i);
    }
    const uf = new UnionFind(n);
    let goodPaths = 0; 
    const sortedVals = Array.from(valToNodes.keys()).sort((a, b) => a - b);
    for (const val of sortedVals) {
        const nodes = valToNodes.get(val);
        for (const node of nodes) {
            for (const neighbor of adj[node]) {
                vals[neighbor] <= vals[node] && uf.union(node, neighbor);
            }
        }
        const groups = new Map();  
        for (const node of nodes) {
            const root = uf.find(node);
            groups.set(root, (groups.get(root) || 0) + 1);
        }
        for (const size of groups.values()) {
            goodPaths += Math.floor(size * (size + 1) / 2);
        }
    }
    return goodPaths;
};
