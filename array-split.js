const nums =[1, 2,3, 4, 5, 6, 9,10];
const part = nums.slice(2, 5);
// console.log(part);
// console.log(nums);
const removed = nums.splice(2,3, 44);

const together = nums.join(" ami");
console.log(removed);
console.log(together);
