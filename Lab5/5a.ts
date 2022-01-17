namespace taskA
{
    let person = 
    {
        name: "name",
        surname: "surname",
        age: -1,
    
        displayName: function() 
        {
             console.log(this.name)
        },
        
        displaySurname: function() 
        {
             console.log(this.surname)
        },
    
        displayAge: function() 
        {
             console.log(this.age)
        }
    }
    
    function printObjectInformation(object: any)
    {
        for (var property in object) 
        {
            console.log(typeof(property) + ": " + property)
        }
    }
    
    printObjectInformation(person);
    console.log(typeof printObjectInformation);
}