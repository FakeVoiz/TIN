namespace taskC
    {
    let student = 
    {
        subjects: ["TIN", "PE", "SKJ"]
    }
    
    function createStudent(name : string, surname: string, id: number) : any
    {
        let createdStudent = Object.create(student);
    
        createdStudent.name = name;
        createdStudent.surname = surname;
        createdStudent.id = id;
    
        return createdStudent;
    }
    
    var rmd = createStudent("Reditus", "Magos Dominus", 100001);
    console.log(rmd.name);
    console.log(rmd.surname);
    console.log(rmd.id);
    console.log(rmd.subjects);
}