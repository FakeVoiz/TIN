"use strict";
var taskF;
(function (taskF) {
    class Person {
        constructor(name, surname) {
            this._name = name;
            this._surname = surname;
        }
        get name() { return this._name; }
        get surname() { return this._surname; }
        get fullName() { return `${this._name} ${this._surname}`; }
        set name(name) { this._name = name; }
        set surname(surname) { this._surname = surname; }
        setFullName(name, surname) {
            this._name = name;
            this._surname = surname;
        }
    }
    class Student extends Person {
        constructor(name, surname, id, grades) {
            super(name, surname);
            this._id = id;
            this._grades = grades;
        }
        get averageGrade() { return this._grades.reduce((a, b) => a + b, 0) / this._grades.length; }
    }
    let stud = new Student("Master", "Chief", 20817, [5, 4, 3]);
    console.log(stud.fullName);
    stud.setFullName("Coratana", "???");
    console.log(stud.fullName);
    stud.name = "Reditus";
    stud.surname = "Magos Dominus";
    console.log(stud.fullName);
    console.log(stud.name);
    console.log(stud.surname);
    console.log(stud.averageGrade);
})(taskF || (taskF = {}));
