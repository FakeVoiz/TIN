namespace taskE
{
    class Student
    {
        private _name: string;
        private _surname: string;
        private _id: number;
        private _grades: number[];

        public constructor(_name: string, surname: string, id: number, grades: number[])
        {
            this._name = _name;
            this._surname = surname;
            this._id = id;
            this._grades = grades;
        }

        public get fullName() : string { return `${this._name} ${this._surname}` }
        public get averageGrade() : number { return this._grades.reduce((a, b) => a + b, 0) / this._grades.length;}

        public set name(name: string){this._name = name;}
        public set surname(surname: string){this._surname = surname;}

        public setFullName(name: string, surname: string)
        {
            this._name = name;
            this._surname = surname;
        }
    }

    let stud : Student = new Student("Master", "Chief", 20817, [5,4,3]);
    console.log(stud.fullName);

    stud.setFullName("Coratana", "???");

    console.log(stud.fullName);

    stud.name = "Reditus";
    stud.surname = "Magos Dominus";

    console.log(stud.fullName);
    console.log(stud.averageGrade);
}