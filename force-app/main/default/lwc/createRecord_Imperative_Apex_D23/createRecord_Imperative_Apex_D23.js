import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import createContact from '@salesforce/apex/ContactController.createContact'

export default class CreateRecord_Imperative_Apex_D23 extends LightningElement {
    recordID;
    lastName;
    mobilePhone;

    handleChange(event){
        if(event.target.name == 'LastName'){
            this.lastName = event.target.value;
        }
        else if(event.target.name == 'MobilePhone'){
            this.mobilePhone = event.target.value;
        }
    }

    handleClick(event){
        //Imperative apex call..... passing arguments to apex method
        createContact({lastName: this.lastName ,mobilePhone: this.mobilePhone})
        .then((result) => {
            console.log(result);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Contact Created',
                message: 'Contact Created ' + result,
                variant: 'success'
            }));
        }).catch((error) => {
            console.log(error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Unable to Create Contact Record',
                message:  error.body.pageErrors['0'].message, 
                variant: 'error'
            }));
        });
    }


}