module.exports = {
    people:[
        {name:'sky', phone:12345678},
        {name:'who', phone:87654321}
    ],
    //get people
    getpeople(){
        return this.people
    },
    //fire people
    fireperson(name){
        this.people=this.people.filter(person => person.name !== name)
    },
    //edit number
    editno(name, newphone){
        const person = this.people.find(person => person.name === name);
        if (person) {
            person.phone = newphone;
        }
    },
    //add people
    addperson(name,phone){
        this.people.push({name:name,phone:phone})
    },
    //change name
    editname(name,newname){
        const person = this.people.find(person => person.name === name);
        if (person) {
            person.name = newname;
        }
    }
}