class Color {
	constructor(r,g,b,name){
		this.r = r;
		this.g = g;
		this.b = b;
		this.name = name;
	}

	greet() {
		return `Hello from ${this.name}!`;
	}

	innerRGB(){
		// Destructure the object so we don't have to type this.r, this.g, this.b
		const {r,g,b} = this;
		return `${r}, ${g}, ${b}`;

	}

	rgb() {
		return `rgb(${this.innerRGB()})`;
	}

	rgba(a=0.2) {
		return `rgba(${this.innerRGB()},${a})`
	}

	hex(){
		const{r,g,b} = this;
		return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

	}
}



const c1 = new Color(255, 67, 89, 'tomato');
const white = new Color(255, 255, 255, 'white');
white.greet(); //"Hello from white!"
