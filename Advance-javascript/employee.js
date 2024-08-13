class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
    constructor(name, age, designation) {
        super(name, age); 
        this.designation = designation;
    }

    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }
}

const employee1 = new Employee('Charlie', 28, 'Software Engineer');
employee1.sayHello();     
employee1.getDetails();   
