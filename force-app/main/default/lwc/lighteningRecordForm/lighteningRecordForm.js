import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME from '@salesforce/schema/Account.Name'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class LighteningRecordForm extends LightningElement {

    objectApiName = ACCOUNT_OBJECT;
    fields = [NAME,INDUSTRY,ANNUAL_REVENUE];
    
    handleSuccess(event){
        const evt = new ShowToastEvent({
            title: 'Account created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }
}