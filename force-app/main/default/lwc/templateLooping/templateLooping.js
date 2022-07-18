import { LightningElement, track } from 'lwc';

export default class TemplateLooping extends LightningElement {
    filterSalary;
    showDetails = false;
    @track newEmpArray;
    @track Employees = [
        {
            Id: 1,
            name: 'PD',
            role: 'developer',
            salary: '25000'
        },
        {
            Id: 2,
            name: 'RD',
            role: 'tester',
            salary: '15000'
        },
        {
            Id: 3,
            name: 'KD',
            role: 'architect',
            salary: '150000'
        }
    ]

    handleChange(event) {
        let ab =  parseInt(event.target.value);
        //this.filterSalary = event.target.value;

        this.newEmpArray = this.Employees.filter((x) => x.salary >= ab);
        this.showDetails = true;
        console.table(this.newEmpArray);
    }
}