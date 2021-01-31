const ages1 = [10, 11, 12, 13, 14];
const ages2 = [15, 16, 17, 18, 19];
const ages3 = [20, 21, 22, 23, 24];
const allAges1 = ages1.concat(ages2).concat([25]).concat(ages3);
console.log(allAges1);
const allAges2 = [...ages1, ...ages2, 25, ...ages3];
console.log(allAges2);

const num1 = 5;
const num2 = 6;
const num3 = 7;
const max1 = Math.max(num1, num2, num3);
console.log(max1);
const nums = [3, 4, 5];
const max2 = Math.max(...nums);
console.log(max2);