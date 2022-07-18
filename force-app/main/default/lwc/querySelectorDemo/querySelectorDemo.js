import { LightningElement } from 'lwc';

export default class QuerySelectorDemo extends LightningElement {

    Employees = [
        {
            id: 101,
            name: "Peter",
            salary: 10000
        },
        {
            id: 102,
            name: "carry",
            salary: 15000
        },
        {
            id: 103,
            name: "Alex",
            salary: 20000
        }
    ]

    handleClear(event) {
        const empno = event.target.dataset.empno;

        //string template using ${} to have empno in string
        this.template.querySelector(`lightning-input[data-empno= '${empno}']`).value = '';

    }

    handleSelect(event) {
        const Empname = event.target.dataset.name;
        const empno = event.target.dataset.empno;
        console.log(`Name='${Empname}' => Code='${empno}' `);
    }

    handleClearFirst(event) {
        //hardcoded dataid value
        this.template.querySelector("lightning-input[data-empno='101']").value = '';

    }

    handleClearAll(event) {
        //using querySelectorAll we will get a kind of array form of input boxes, converting it to proper array using 
        //Array.from and applying .forEach to that array to clear values 
        let a = Array.from(this.template.querySelectorAll("lightning-input"));
        console.log(a);

        a.forEach(element => element.value = '');
    }
}