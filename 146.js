// linked hash map

/**
 * @param {number} key
 * @param {number} value
 */
var Nodee = function (key, value) {
    this.key = key;
    this.value = value;
    this.pre = null;
    this.fol = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.current_capacity = 0;
    this.cache = new Map();
    this.head = null;
    this.tail = null;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let res = this.cache.get(key);
    if (!res) {
        return -1;
    } else {
        if (!res.pre) {
            return res.value;
        } else if (!res.fol) {
            res.pre.fol = null;
            this.tail = res.pre;
            res.pre = null;
            res.fol = this.head;
            this.head.pre = res;
            this.head = res;
        } else {
            res.pre.fol = res.fol;
            res.fol.pre = res.pre;
            res.pre = null;
            res.fol = this.head;
            this.head.pre = res;
            this.head = res;
        }
        return res.value;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.get(key) >= 0) {
        console.log('key = ',key);
        console.log('value = ',value);
        this.cache.get(key).value = value;
    } else if (!this.current_capacity) {
        let node = new Nodee(key,value);
        this.head = node;
        this.tail = node;
        this.cache.set(key, node);
        this.current_capacity++;        
    } else if (this.current_capacity < this.capacity) {
        let node = new Nodee(key, value);
        node.fol = this.head;
        this.head.pre = node;
        this.head = node;
        this.cache.set(key, node);
        this.current_capacity++;
    } else {
        let node = new Nodee(key, value);
        node.fol = this.head;
        this.head.pre = node;
        this.head = node;
        let temp = this.tail;
        this.tail = temp.pre;
        this.tail.fol = null;
        temp.pre = null;
        this.cache.delete(temp.key);
        this.cache.set(key, node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */