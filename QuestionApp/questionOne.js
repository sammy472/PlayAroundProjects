let obj=[
	{	question:"what's the capital of Morocco?",
		choiceOne:"Rabat",
		choiceTwo:"Marrakech",
		choiceThree:"Tangier",
		choiceFour:"Casablanca",
		answer:"Marrakech"
    },
	{   question:"How many subarrays can we derive from a parent array? n is the array/list size.",
		choiceOne:"n(n-1)/4",
		choiceTwo:"2",
		choiceThree:"100000",
		choiceFour:"n(n+1)/2",
		answer:"n(n+1)/2"
	},
	{
		question:"In how many ways can we arrange the word 'SMOKE' if repetitions are allowed?",
		choiceOne:"210",
		choiceTwo:"120",
		choiceThree:"32",
		choiceFour:"400",
		answer:"120"
	},
	{
		question:"who is the King of Morocco?",
		choiceOne:"Prince Tagoe",
		choiceTwo:"Samuel Boateng",
		choiceThree:"Mohammed V",
		choiceFour:"Nana Akuffo Addo",
		answer:"Mohammed V"
	},
	{
		question:"Can you breathe whilst under water?",
		choiceOne:"I don't know for now",
		choiceTwo:"Yes",
		choiceThree:"False",
		choiceFour:"Maybe",
		answer:"Yes"
	},
	{
		question:"Is Morocco part of AU?",
		choiceOne:"Nope",
		choiceTwo:"Maybe",
		choiceThree:"Skip, donnow",
		choiceFour:"Yes",
		answer:"Yes"
	},
	{
		question:"Are all introverts smart?",
		choiceOne:"Nope",
		choiceTwo:"Yes",
		choiceThree:"I don't know",
		choiceFour:"Maybe",
		answer:"Nope"
	},
	{
		question:"Binary number systems consist of only two digits, 0 and 1.",
		choiceOne:"It's 5 digits rather.",
		choiceTwo:"Yes.",
		choiceThree:"Nope.",
		choiceFour:"It's 10 ddigits.",
		answer:"Yes"
	},
	{
		question:"Binary number systems consist of only two digits, 0 and 1.",
		choiceOne:"It's 5 digits rather.",
		choiceTwo:"Yes.",
		choiceThree:"Nope.",
		choiceFour:"It's 10 ddigits.",
		answer:"Yes"
	},
	{
		question:"Binary number systems consist of only two digits, 0 and 1.",
		choiceOne:"It's 5 digits rather.",
		choiceTwo:"Yes.",
		choiceThree:"Nope.",
		choiceFour:"It's 10 ddigits.",
		answer:"Yes"
	}
	
];


//Select the navbar elements
var retake=document.getElementById("Retake");
var retry=document.getElementById("Retry");
var refresh=document.getElementById("Refresh");
var solution=document.getElementById("Solution");

//invoke the reload function on click
retake.addEventListener("click",()=>{
    location.reload();
});
refresh.addEventListener("click",()=>{
    location.reload();
});
retry.addEventListener("click",()=>{
    location.reload();
});


//Some initialisations
var elem=document.getElementById("myBar");
var width=0;
let scoreClicked=false;
let Marker=0;
let size=obj.length;
let timer=0;
let counter=0;
let myScore = 0;
//Get the elements by their ID
let questions=document.getElementById("questions");
let first=document.getElementById("first");
let second=document.getElementById("second");
let third=document.getElementById("third");
let fourth=document.getElementById("fourth");
let rad=document.querySelector(".rad");
//initialise the questions
questions.innerHTML=obj[0].question;
//initialise the choices
first.innerHTML=obj[0].choiceOne;
second.innerHTML=obj[0].choiceTwo;
third.innerHTML=obj[0].choiceThree;
fourth.innerHTML=obj[0].choiceFour;

//setting a timer
let start=setInterval(()=>{
	if(counter==size){
		myScore=(Marker/size)*100;
	    //Output the score
		if(myScore<50)
			questions.innerHTML=`Your score is ${myScore}% \nYou couldn't get the pass mark.\n Please try again by clicking on Retry`;
		if(myScore>=50)
			questions.innerHTML=`Your score is ${myScore}% \nYou have passed the quiz.\n Please you can take it again by clicking on Take Quiz`;
		//set the innerHTML of the div to null
		rad.innerHTML="";
        width=100;
        elem.style.width=width+"%";
        setTimeout(()=>{
            location.reload();
         },10000);
		}
	if(timer==59){
		timer=0;
		counter+=1;
		//initialise the questions
	    questions.innerHTML=obj[counter].question;
	    //initialise the choices
		first.innerHTML=obj[counter].choiceOne;
		second.innerHTML=obj[counter].choiceTwo;
		third.innerHTML=obj[counter].choiceThree;
		fourth.innerHTML=obj[counter].choiceFour;
		
	}
	timer+=1; 
	console.log(timer);
	if(scoreClicked)
		clearInterval(start);
},1000);

//dynamic progressive bar
var id=setInterval(()=>{
	if(width>=90)
		clearInterval(id);
	else{
		width+=10;
		elem.style.width=width+"%";
	}
},60000);


//select the buttons
let next=document.querySelector(".next");
let previous=document.querySelector(".previous");
let score=document.querySelector(".score");
//add eventListeners
next.addEventListener("click",(e)=>{
	e.preventDefault();
	width+=10;
	if(width>=100){
		width=100;
	}
	elem.style.width=width+"%";
	timer=0;
	if(counter==size){
		//initialise the questions
	    questions.innerHTML="Click Score to check your score please";
	    //initialise the choices
		rad.innerHTML="";
	}
	//select or check the answer
	if((document.getElementById("choiceOne").checked && document.getElementById("first").innerHTML===obj[counter].answer)
		|| (document.getElementById("choiceTwo").checked && document.getElementById("second").innerHTML===obj[counter].answer)
		|| (document.getElementById("choiceThree").checked && document.getElementById("third").innerHTML===obj[counter].answer)
		|| (document.getElementById("choiceFour").checked && document.getElementById("fourth").innerHTML===obj[counter].answer)){
		Marker+=1;
	}
	counter+=1;
	//initialise the questions
    questions.innerHTML=obj[counter].question;
    //initialise the choices
	first.innerHTML=obj[counter].choiceOne;
	second.innerHTML=obj[counter].choiceTwo;
	third.innerHTML=obj[counter].choiceThree;
	fourth.innerHTML=obj[counter].choiceFour;

	console.log(Marker);

});

previous.addEventListener("click",(e)=>{
	e.preventDefault();
	width-=10;
	if(width<0)
		width=0;
	elem.style.width=width+"%";
	timer=0;
	Marker-=1;
	if(Marker<0)
		Marker=0;
	counter-=1;
	if(counter<0)
		counter=0;
	//initialise the questions
    questions.innerHTML=obj[counter].question;
    //initialise the choices
	first.innerHTML=obj[counter].choiceOne;
	second.innerHTML=obj[counter].choiceTwo;
	third.innerHTML=obj[counter].choiceThree;
	fourth.innerHTML=obj[counter].choiceFour;

	console.log(Marker);


});
score.addEventListener("click",(e)=>{
	e.preventDefault();
	width=100;
	elem.style.width=width+"%";
	scoreClicked=true;
	timer=0;
	myScore=(Marker/size)*100;
	//initialise the questions
	if(myScore<50)
		questions.innerHTML=`${myScore}% \nYou couldn't get the pass mark.\n Please try again by clicking on Retry`;
	//initialise the choices
	rad.innerHTML="";
	if(myScore>=50)
		questions.innerHTML=`${myScore}% \nYou have passed the quiz.\n Please you can take it again by clicking on Take Quiz`;
    setTimeout(()=>{
        location.reload();
    },10000);

})









