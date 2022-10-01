class Person {
    name:string;
    height:number = 0;
    age:number = 0;
    constructor(name: string, height:number,age:number){
        this.name = name;
        this.height = height;
        this.age = age;
    }

};

const ciudadano = new Person("juan",1.80,20);
console.log(ciudadano.name);