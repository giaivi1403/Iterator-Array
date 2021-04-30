Array.prototype.forEach2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], +index, this);
        }
    }
};

Array.prototype.map2 = function (callback) {
    const output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], +index, this);
            this[index] = callback(this[index], +index, this);
            output.push(this[index]);
        }
    }
    return output;
};

Array.prototype.filter2 = function (callback) {
    const output = [];
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], +index, this)) output.push(this[index]);
        }
    }
    return output;
};

Array.prototype.reduce2 = function (callback, init) {
    let sum = init;
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            sum = callback(sum, this[index], this);
        }
    }
    return sum;
};

Array.prototype.every2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (!callback(this[index], +index, this)) return false;
        }
    }
    return true;
};

Array.prototype.some2 = function (callback) {
    for (let index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], +index, this)) return true;
        }
    }
    return false;
};
