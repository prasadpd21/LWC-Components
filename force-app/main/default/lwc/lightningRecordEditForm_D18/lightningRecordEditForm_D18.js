import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT from '@salesforce/schema/Account'

export default class LightningRecordEditForm_D18 extends LightningElement {
    objectApiName = ACCOUNT;
    fields = {
        name: 'Name',
        industry: 'Industry',
        revenue: 'AnnualRevenue',
        type: 'Type',
        sla: 'SLA__c',
        isActive: 'Active__c'
    }

    submitHandler(event) {
        console.log('inside submit Handler');
        event.preventDefault();
        const inputRevenue = this.template.querySelector("lightning-input-field[data-id=amt]");

        if (inputRevenue.value < 1000) {
            console.log('Annual revenue amount is less than 1K');
            this.dispatchEvent(new ShowToastEvent({
                title: 'Annual revenue should not be less than 1K',
                message: event.detail.message,
                variant: 'error'
            }));

        }
        else {
            const fields = event.detail.fields;
            console.log(JSON.stringify(fields));

            this.template.querySelector("lightning-record-edit-form").submit(fields);
        }


    }

    successHandler(event) {
        console.log('inside success Handler');
        this.dispatchEvent(new ShowToastEvent({
            title: 'Account record created',
            message: 'Account record created ' + event.detail.id,
            variant: 'success'
        }));

    }

    errorHandler(event) {
        console.log('inside error Handler')
        this.dispatchEvent(new ShowToastEvent({
            title: 'Error Creating Account Record',
            message: event.detail.message,
            variant: 'error'
        }));
    }
}