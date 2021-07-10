let num = 10;

function sum(a,b){
    return a+b;
}


class P{
    constructor() {
        this.age = 10;
    }
}


// exports.num = num;
// exports.sum = sum;
// exports.P = P;

module.exports = {
    num,
    sum,
    P
}
