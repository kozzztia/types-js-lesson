console.log("start")
// first
// const a = "0,1";
// const b = "0,2";

// function correction(arg){
//     return +arg.split(",").join('.');
// }

// function sum(...args){
//     const result = +args.reduce((acc,item) => acc + correction(item),0).toFixed(1)
//     console.log(result)
// }

// sum(a,b)

// second
// const c = "1";
// const d = 2;

// console.log(+c + +d)
// console.log(Number(c) + Number(d))




// third
// function getsize(){
//     let data;
//     const fileSize = 820;
//     const translateToGb = 0.001;
//     data = prompt('insert memory size as GB')
//     if(!+data) {
//         alert("try inser only number")
//         getsize()
//     }else{
//         let result = Math.floor((data/translateToGb)/fileSize);
//         let resultSize = (result * fileSize)*translateToGb;
//         alert(`you can put ${result}and use ${resultSize.toFixed(2)}Gb`)
//     }
// }    
// getsize()

// function countChocolate() {
//     const cost = 15.5;
//     const money = prompt('how many money do you have?')
//     if (!+money) countChocolate()
//     else {
//        const chocolats = Math.trunc(money / cost);
//        const left = money -(chocolats * cost);

//        alert(`you cat buy ${chocolats} cocolats and left ${left}$`)
//     }

// }

// countChocolate()

// function doPolindrom(){
//     const number = prompt('insert three digit number');
//     // if (!number || isNaN(number) || number.length !== 3)doPolindrom();
//     if(!+number || number.length < 3)doPolindrom();
//     else {
//         const revesedNumber = number.split("").reverse().join("");
//         if(number === revesedNumber) {
//             alert(`your number is ${number}, it can be polindrome`);
//             alert('you are greate!!')
//         }
//         else  {
//             alert(`your number is ${number},  and we make this - ${revesedNumber}`);
//             doPolindrom()
//         };
//     };
// };

// doPolindrom();


// function getMoney(){
//     const money = prompt('insert your money');
//     const mounthes = 12
//     const procentForMonth = (+money * .05) / 12;
//     const result = +money + (procentForMonth * mounthes)
//     alert(`you can get ${result}`);
// }

// getMoney()

console.log( `${2 && 0 && 3}` + "first");
console.log(  `${2 || 0 || 3}` + "second");
console.log( `${2 && 0 || 3}` + "third");