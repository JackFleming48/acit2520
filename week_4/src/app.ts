import process from "process";

const firstVal = process.argv[2];
const secondVal = process.argv[3];



function sum(n1: number, n2: number){
    console.log(n1 + n2);
};

sum(5,4)
// sum(5,"4") --- err

sum(Number(firstVal), Number(secondVal))