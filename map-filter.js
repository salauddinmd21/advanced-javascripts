 const num =[3, 4, 5, 5,6,7,];
// const output = [];
//  for (let i = 0; i < num.length; i++) {
//      const element = num[i];
//      const result = element * element;
//      output.push (result);
     
//  }
// function squre (element){
//     return element* element;
// }

// //  const result = num.map(function(element){
// //     return element * element;
// // })
// const squre = element => element * element;
// const squre = x => x * x;
//  const result = num.map(x => x * x);
//  console.log(result);

const bigger = num.filter(x=> x> 3);
const findOne = num.find( x=> x> 5);
console.log(findOne);