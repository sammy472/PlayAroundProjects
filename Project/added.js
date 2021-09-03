"use strict";
/*import modules from modules.js*/
const {fact,mapped,say}= require("./module.js");
console.log(fact(6));


/*play with the Map() object,students and their level*/
let students=new Map();
students.set("samuel",200);
students.set("boateng",200);
students.set("kwabena",300);
console.log(students.get("samuel"));
/*error handling and exception*/
let dont=new Error();
function power(integer,exponent){
	let count=1;
	if (!Number.isNaN(integer) && !Number.isNaN(integer)) {
		throw new Error("None");
	} else {
		for(let j=0;j<exponent;j++){
			count=count*integer;
		}
	}
	return count;
};

let see=function(x,y){
	try{
		console.log(power(x,y));
	}
	catch(error){
		console.log("ahh"+error);
	}
}
see("two","sdf");
setTimeout(()=>console.log("Tick"),5000);
console.log("samuel");




