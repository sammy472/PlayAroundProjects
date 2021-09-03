"use strict";
/*console.log("start");

function playAround(name,callback){
	setTimeout(()=>{
		console.log("it's now ready");
		callback({myNmae:name});
	},3000);
}

function getName(callback){
	setTimeout(()=>{
		console.log("this is the name:");
		callback(user.myNmae);
	},5000);
}


playAround("samuel kwabena boateng",show=>console.log(show.myNmae));

console.log("last");
function test(message,callback){
	if(message==="i love Lydia"){
		callback();
	}else{
		callback(n-1);
	}
}

test("i love Lydia",()=>console.log("Nice to hear this"));*/

/*let thePromise=new Promise((resolve,reject)=>{
		console.log("it's fucking coming");

		resolve({userEmail:"samuelboateng@gmail.com"});
});

thePromise.then((show)=>{
	console.log(show);
})*/

/*let number=5;

let promise=Promise.resolve(test("i love Lydia",number=>number));
promise.then((show)=>console.log(show));*/


function first(name,callback){
	setTimeout(()=>callback(name),6000);
};

function second(email,callback){
	setTimeout(()=>callback(email),3000);
};

function third(id,callback){
	setTimeout(()=>callback(id),4000);
};


async function showAll(){
	await first("samuel",show=>console.log(show));
	await second("samuelboateng@gmail.com",show=>console.log(show));
	await third(12354423434,show=>console.log(show));
};

showAll();

Promise.resolve("Done").then(show=>console.log(show));
console.log("Me first!");



let expression=/^b/g;
console.log(expression.exec("boateng"));

function theArray(name,callback){
	let array=[];
	let expression=/^\w+$/i;
	if(expression.test(name)){
		for(let i=1;i<=10;i++){
			array.push(i);
		}
	}
	callback(array);
}
theArray("samuel",it=>console.log(it.map((it,i)=>it+i)));



let obj={
	name:"samuel",
	email:"samuelboateng@gmail.com",
	number:"0435346756"
};
console.log(Array.from(Object.values(obj)));

let something="school";
console.log(something.slice(2));
console.log(/^[^\s(),#"]+/.exec(something));
