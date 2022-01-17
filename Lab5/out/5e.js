"use strict";
var taskE;
(function (taskE) {
    class Student {
        constructor(_name, surname, id, grades) {
            this._name = _name;
            this._surname = surname;
            this._id = id;
            this._grades = grades;
        }
        get fullName() { return `${this._name} ${this._surname}`; }
        get averageGrade() { return this._grades.reduce((a, b) => a + b, 0) / this._grades.length; }
        set name(name) { this._name = name; }
        set surname(surname) { this._surname = surname; }
        setFullName(name, surname) {
            this._name = name;
            this._surname = surname;
        }
    }
    let stud = new Student("Master", "Chief", 20817, [5, 4, 3]);
    console.log(stud.fullName);
    stud.setFullName("Coratana", "???");
    console.log(stud.fullName);
    stud.name = "Reditus";
    stud.surname = "Magos Dominus";
    console.log(stud.fullName);
    console.log(stud.averageGrade);
})(taskE || (taskE = {}));
