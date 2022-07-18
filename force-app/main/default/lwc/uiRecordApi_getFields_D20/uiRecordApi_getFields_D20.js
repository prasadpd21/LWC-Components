import { LightningElement,api,wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import CONTACT_ACCOUNT_NAME from '@salesforce/schema/Contact.Account.Name'
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
import CONTACT_TITLE from '@salesforce/schema/Contact.Title'
import CONTACT_PHONE from '@salesforce/schema/Contact.Phone'
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */
//fields = [CONTACT_ACCOUNT_NAME,CONTACT_NAME,CONTACT_TITLE,CONTACT_PHONE];
export default class UiRecordApi_getFields_D20 extends LightningElement {
    @api recordId;
    ContactRecord;
    @wire(getRecord, { recordId: '$recordId', fields:[CONTACT_ACCOUNT_NAME,CONTACT_NAME,CONTACT_TITLE,CONTACT_PHONE]} )
    getContactRecord({data,error}){
        if(data){
            console.log('inside data')
            this.ContactRecord = data;
            console.log(data);
        }

    }

    get name(){
        return getFieldValue(this.contactRecord,CONTACT_NAME);
        
    }
}