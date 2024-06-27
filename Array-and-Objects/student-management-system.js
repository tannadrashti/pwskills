const students = [
    {
        id: 1, firstname: "Sushant", lastname: "Rajput", age: 20, grade:"A"
    },
    {
        id: 2, firstname: "Radha", lastname: "Biswas", age: 18, grade:"B"
    },
    {
        id: 3, firstname: "Usha", lastname: "Kakkad", age: 16, grade:"C"
    }
]
console.log(students);

// a. Add a Student: Create a function to add a new student to the array.
function addStudent(newstudent) {
    students.push(newstudent);
}

addStudent({ id: 4, firstname: "Ravi", lastname: "Sharma", age: 22, grade: "B" });
console.log("After adding a new student:", students);

//b. Update Student Information: Create a function to update a student's information based on their id.

function updateStudent(id, updatedInfo) {
    const index = students.find(index => index.id === id);

    if (index) {
        Object.assign(index, updatedInfo);
    }
    else {
        console.log(`Student with id ${id} not found.`);
    }
}

updateStudent(2, { id: 2, firstname: "Radha", lastname: "Biswas", age: 20, grade: "B" });
console.log("After updating info:", students);

// c. Delete a Student: Create a function to delete a student based on their id.

function deleteStudent(id){
    const updatedstudents = students.filter(students => students.id !== id);
    return updatedstudents;
}

const updatedstudent = deleteStudent(2);
console.log("After deleting the student:", updatedstudent);

// d. List All Students: Create a function to display a list of all students.

function listStudents() {
    console.log("List of all students:");

    students.forEach(student => {
        console.log(`ID: ${student.id}, Name: ${student.firstname} ${student.lastname}, Age: ${student.age}, Grade: ${student.grade}`);
    });
}

listStudents();

// e. Find Students by Grade: Create a function to find all students who have a specific grade.

function findstudentbyGrade(grade) {
    return students.filter(student => student.grade === grade);
}
studentwithgradeA=findstudentbyGrade("A");
console.log("Result:", studentwithgradeA);

//f. Calculate Average Age: Create a function to calculate the average age of all students using array method.

function calculateAverageAge() {
  if (students.length === 0) return 0; // Handle empty array case
  
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = totalAge / students.length;
  
  return averageAge;
}
const averageAge = calculateAverageAge();
console.log(`The average age of students is: ${averageAge}`);