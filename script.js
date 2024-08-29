console.log("start")

const a = "0,1";
const b = "0,2";

function correction(arg){
    return +arg.split(",").join('.');
}

function sum(...args){
    const result = +args.reduce((acc,item) => acc + correction(item),0).toFixed(1)
    console.log(result)
}

sum(a,b)