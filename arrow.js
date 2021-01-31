function doubleIt1(num){
    return num * 2;
}
const result1 = doubleIt1(3);
console.log(result1);

const doubleIt2 = function dbl(num){
    return num * 2;
}
const result2 = doubleIt2(4);
console.log(result2);

const doubleIt3 = num => num * 2;
const result3 = doubleIt3(5);
console.log(result3);

const add = (x, y) => x + y;
const result4 = add (4, 5);
console.log(result4);

const give5 = () => 5;
const result5 = give5();
console.log(result5);

const big = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const total = sum * sub;
    return total;
}
const result6 = big(5, 3);
console.log(result6);