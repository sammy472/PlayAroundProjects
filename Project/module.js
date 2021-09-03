exports.fact=function(number){
	let initial =1;
	for (var i=1;i<=number;i++) {
		initial=initial*i;
	}
	return initial;
}

exports.say=function(word){
	console.log(`you say ${word}`);
};

exports.mapped=function(array,doThis){
	return array.map(doThis);
};

