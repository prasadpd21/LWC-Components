import { LightningElement } from 'lwc';
import searchAccountList from '@salesforce/apex/AccountController.searchAccountList'


export default class ApexImperativeWithParam_D23 extends LightningElement {
    accList;
    searchKey;

    columnsList=[
        {label :'Id', fieldName :'Id'},
        {label :'Name', fieldName :'Name'},
        {label: 'Rating', fieldName: 'Rating'},
    ]

    handleKeyChange(event){
        this.searchKey = event.target.value;
    }

    handleClick(event){
        
        searchAccountList({searchKey:this.searchKey})
        .then((response) => {
            console.log(response)
            this.accList=response;
        })
        .catch((error) => {
            console.log(error);
        });

    }


   
}