"use strict";
function Student(name, surname, id, grades) {
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;
    this.printInfo = function () {
        const averageGrade = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
        console.log("name: " + this.name);
        console.log("surname: " + this.surname);
        console.log("average grade: " + averageGrade);
    };
}
var student = Student("Master", "Chief", 20817, [5, 4, 3]);
student.printInfo();
