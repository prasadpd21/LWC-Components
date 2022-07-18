import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { deleteRecord } from 'lightning/uiRecordApi';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
import {refreshApex} from '@salesforce/apex'

export default class GetRecords_Imperative_Apex_D23 extends LightningElement {
    accList;
    recordId;
    wiredAccountResponse;
    
    //Wired Apex call to demonstrate refreshApex
    @wire(getAccountList,{Rating:'Hot'})
    getAccountList(response){
        this.wiredAccountResponse = response;
        if(response.data){
            this.accList = response.data;
        }
    }

    /*
    handleClick(event){
        getAccountList({Rating:'Hot'})
        .then((result) => {
            console.log(result);
            this.accList = result;
        }).catch((error) => {
            console.log(error);
        });
    }
    */

    handleDelete(event){
        this.recordId = event.target.name;

        deleteRecord(this.recordId)
        .then((result) => {
            console.log(result);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Account Deleted',
                message: 'Account Deleted' + this.recordId,
                variant: 'success'


            }));

                //refreshApex call to refresh UI after deleting any record
                refreshApex(this.wiredAccountResponse);

        }).catch((error) => {
            console.log(error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error While Deleting Record',
                message: error.body.output.errors['0'].errorCode + ' <==> ' + error.body.output.errors['0'].message,
                variant: 'error'
            }));
        });

    }

}