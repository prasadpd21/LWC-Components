import { LightningElement, track } from 'lwc';

export default class EmployeesDetails extends LightningElement {
    @track EmpArray;
    @track EmpArray2;
    EmpName;

    handleChange(event){
     this.EmpName = event.target.value;
    }

    async handleClick(){
        let url = 'https://employee-directory-services.herokuapp.com/employees';
        
        try{
            let response = await fetch(url,{method:"GET"});
            let data = await response.json();
            this.EmpArray = data.filter(item => {
                return item.firstName == this.EmpName;
            });
            console.log(data);
            console.log(this.EmpArray);
        }
        catch(e){
            console.log(e);
        }
    }
}