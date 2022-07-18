import { LightningElement } from 'lwc';

export default class ParentEmployee extends LightningElement {
    Employees=[
        {Code : 1, Name: 'John', Position: 'Dev',Salary: 200000,isworking:true},
        {Code : 2, Name: 'Peter', Position: 'Devops',Salary: 200000,isworking:false},
        {Code : 3, Name: 'Kevin', Position: 'Dev',Salary: 200000,isworking:true}
    ]

    selectedName;
    selectedPosition;
    handleclickfromchild(event){
      // alert(event.detail.Name)
      // console.log(event.detail.Name)
       this.selectedName = event.detail.Name;
       this.selectedPosition = event.detail.Position;

    }
}