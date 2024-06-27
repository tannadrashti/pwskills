// 1. Use the Object.preventExtensions method to prevent and further additions of
// properties to the student object in beginnner level code

const student1 = {
  name: "John Doe",
  age: 20,
  course: "Computer Science"
};

console.log("Initial student object:", student1);

Object.preventExtensions(student1);

student1.grade = "A"; 

console.log("After attempting to add a new property:", student1);

// 2.Use the Object.isEatensible method to check if the student object is eatensible. Store the result in a variable
//called eatensibleStatus.

const student2 = {
  name: "John Doe",
  age: 20,
  course: "Computer Science"
};

const extensibleStatus = Object.isExtensible(student2);

console.log("Is the student object extensible?", extensibleStatus);

// 3.Create a new object called teacher with a 'subject' property set to 'Math'.

const teacher = {
    subject: "Math"
};

console.log(teacher);

// 4.Use the Object.seal method to seal the teacher object, preventing and additions or deletions of properties.

Object.seal(teacher);

// preventing and additions or deletions of properties.
teacher.name = "radha";

delete teacher.subject;

console.log("After attempting to add and delete properties:", teacher);

// 5.Use the Object.isSealed method to check if the teacher object is sealed. Store the result in a variable called
//sealedStatus.

const sealedStatus = Object.isSealed(teacher);
console.log("Is the teacher object sealed?", sealedStatus);

// 6.Print the extensibleStatus and sealedStatus to the console.
console.log(extensibleStatus);
console.log(sealedStatus);