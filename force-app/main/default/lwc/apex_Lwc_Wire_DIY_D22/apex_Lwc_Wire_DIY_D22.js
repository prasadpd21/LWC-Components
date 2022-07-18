import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class Apex_Lwc_Wire_DIY_D22 extends LightningElement {

    ratingValue;
    accountRecords;

    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Cold', value: 'Cold' },
        ];
    }

    handleChange(event){
        this.ratingValue = event.target.value;
    }

    @wire(getAccountList,{Rating:'$ratingValue'})
    accountList({data,error}){

        if(data){

            this.accountRecords = data;
            console.log(data);
        }
    }
}