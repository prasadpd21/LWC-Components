import { LightningElement,api } from 'lwc';

export default class ChildEmployee extends LightningElement {
    @api employeefromparent;
    Name
    Position
    Salary
    employee=[];

    handleClick(event){
        // alert(event.target.name.Name)
        // this.employee = event.target.name
        this.Name = event.target.name.Name
        this.Position = event.target.name.Position
        // console.log(event.target.name)
        // console.log(JSON.stringify(event.target.name))
        const toparent = new CustomEvent("selectbuttonclick",{
          detail : {Name : this.Name , Position : this.Position}
        })

        this.dispatchEvent(toparent);
    }
} 