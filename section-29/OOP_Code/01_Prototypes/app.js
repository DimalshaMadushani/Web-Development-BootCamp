//this referes to the string that the method is called
String.prototype.yell = function() {
	console.log(this.toUpperCase());
}

Array.prototype.pop = function() {
	return 'Sorry I want that element, I will never pop it off';
}