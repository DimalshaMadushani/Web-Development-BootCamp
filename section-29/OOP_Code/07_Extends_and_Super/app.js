class Pet{
	constructor(name,age){
		this.name = name;
		this.age = age;
	}

	eat(){
		return `${this.name} is eating`;
	}

}

class Cat extends Pet {
	constructor(name,age,livesleft = 9){
		super(name,age);
		this.livesleft = livesleft;
	}
	meow(){
		return 'MEOWW!!'
	}
}

class Dog extends Pet{
	bark(){
		return 'WOOOFF!!'
	}

	//overwriting
	eat(){
		return `${this.name} scarfs his food!`
	}
}

const chuti = new Cat("chuti",2);
const rexi = new Dog("rexi",5);