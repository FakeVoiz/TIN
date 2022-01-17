namespace taskF
{
    class Person
    {
        protected _name: string;
        protected _surname: string;

        public constructor(name: string, surname: string)
        {
            this._name = name;
            this._surname = surname;
        }

        public get name() {return this._name;}
        public get surname() {return this._surname;}
        public get fullName() : string { return `${this._name} ${this._surname}` }
        public set name(name: string){this._name = name;}
        public set surname(surname: string){this._surname = surname;}

        public setFullName(name: string, surname: string)
        {
            this._name = name;
            this._surname = surname;
        }
    }

    class Student extends Person
    {
        private _id: number;
        private _grades: number[];

        constructor(name: string, surname: string, id: number, grades: number[])
        {
            super(name, surname);
            this._id = id;
            this._grades = grades;
        }

        public get averageGrade() : number { return this._grades.reduce((a, b) => a + b, 0) / this._grades.length;}

    }
    let stud : Student = new Student("Master", "Chief", 20817, [5,4,3]);
    console.log(stud.fullName);

    stud.setFullName("Coratana", "???");

    console.log(stud.fullName);

    stud.name = "Reditus";
    stud.surname = "Magos Dominus";

    console.log(stud.fullName);
    console.log(stud.name);
    console.log(stud.surname);
    console.log(stud.averageGrade);
}