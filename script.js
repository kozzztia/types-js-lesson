console.log("start")

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

// const c = "1";
// const d = 2;

// console.log(+c + +d)
// console.log(Number(c) + Number(d))





function getsize(){
    let data;
    const fileSize = 820;
    const translateToGb = 0.001;
    data = prompt('insert memory size as GB')
    if(!+data) {
        alert("try inser only number")
        getsize()
    }else{
        let result = Math.floor((data/translateToGb)/fileSize);
        let resultSize = (result * fileSize)*translateToGb;
        alert(`you can put ${result}and use ${resultSize.toFixed(2)}Gb`)
    }
}    

getsize()
