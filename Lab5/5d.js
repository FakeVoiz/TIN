//This one is written using JS, since TS does not really like function constructors;
"use strict";

function Student(name, surname, id, grades)
{
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.getAverageGrade = () => this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    this.getFullName = () => `${this.name} ${this.surname}`;

    this.setFullName = (name, surname) => 
    {
        this.name = name;
        this.surname = surname;
    };

    this.printInfo = () =>
    {
        console.log("name: " + this.name);
        console.log("surname: " + this.surname);
        console.log("average grade: " + this.getAverageGrade());
    }
}

var student = new Student("Master", "Chief", 20817, [5,4,3]);
console.log(student.getFullName());
console.log(student.getAverageGrade());

student.setFullName("Coratana", "???");

console.log(student.getFullName());