import { LightningElement, track } from 'lwc';

export default class ButtonLwc extends LightningElement {

    sum(x, y) {

        return x + y;
    }

    message = 'Welcome';

    student = {
        name : 'Kevin',
        department : 'CSE'
    }

    

    get courseName(){
        return this.courses[0];
    }

    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        this.message = event.target.value;

    }

    handelName(event){
        console.log(event.target.name);
        console.log(event.target.value);
    }
    //Template Rendering

    @track courses = ['Apex','Aura'];
    input_course;

    handleCourse(event){
      this.input_course = event.target.value
    }

    handleInput(event){

            this.courses.push(this.input_course);

        // console.log(this.input_course)
        // console.log(this.courses)
        
    }

    //Conditional Rendering

    Employees=[
        {Name: 'John', Position: 'Dev',Salary: 200000,isworking:true},
        {Name: 'Peter', Position: 'Devops',Salary: 200000,isworking:false},
        {Name: 'Kevin', Position: 'Dev',Salary: 200000,isworking:true},
    ]
}