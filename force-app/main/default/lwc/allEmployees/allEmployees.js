import { LightningElement,track } from 'lwc';

export default class AllEmployees extends LightningElement {
    @track EmpArray;

    EmpName;


    async handleClick(){
        let url = 'https://employee-directory-services.herokuapp.com/employees';
        
        try{
            let response = await fetch(url,{method:"GET"});
            let data = await response.json();
            this.EmpArray = data;
            // this.EmpArray = data.filter(item => {
            //     return item.firstName == this.EmpName;
            // });
            console.log(data);
            console.log(this.EmpArray);
        }
        catch(e){
            console.log(e);
        }
    }
}