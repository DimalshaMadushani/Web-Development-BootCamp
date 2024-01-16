//This functions makes and returns an object every time it is called.
// The resulting objects all follow the same "recipe"
function makeColor(r, g, b) {
	//create a new object
	const color = {};
	//define some properties on that object
	color.r = r;
	color.g = g;
	color.b = b;
	//define some methods on that object
	color.rgb = function(){
		const {r, g, b} = this;
		return `rgb(${r}, ${g}, ${b})`;
	}

	color.hex = function(){
		const {r, g, b} = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}
	
	return color;
}	

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
