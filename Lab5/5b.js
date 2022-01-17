//This one is written using JS, since TS does not really like function constructors;
"use strict";

function Student(name, surname, id, grades)
{
    this.name = name;
    this.surname = surname;
    this.id = id;
    this.grades = grades;

    this.printInfo = function()
    {
        const averageGrade = this.grades.reduce((a, b) => a + b, 0) / this.grades.length;

        console.log("name: " + this.name);
        console.log("surname: " + this.surname);
        console.log("average grade: " + averageGrade);
    }
}

//We used to do Halo references with ZPR team, So I could not stand...
var student = new Student("Master", "Chief", 20817, [5,4,3]);
student.printInfo();