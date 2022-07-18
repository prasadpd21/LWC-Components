import { LightningElement, track, wire } from 'lwc';
import { getRecord,getFieldValue  } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import ACCOUNT_CONTACTS from '@salesforce/schema/Account.Count_of_Contacts__c'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'
import ACCOUNT_TYPE from '@salesforce/schema/Account.Type'

import ID from '@salesforce/user/Id'
/* https://developer.salesforce.com/docs/component-library/documentation/en/lwc/lwc.reference_lightning_ui_api_record */

export default class UiRecordApi_D19 extends LightningElement {

    @track accountRecord;
    @track record;
    @track userRecord;
    @track  errorMessage;
    // getting userId from LDS is an Asynchronous process so it can take time so we have to make it as reactive
    @track userId =ID;

    constructor(){
        super();
        console.log('constructor called');
    }

   //@api recordId;
   
   
    @wire(getRecord, { recordId: '0015j00000cMuQ0AAK', fields: [ACCOUNT_NAME,ACCOUNT_PHONE, ACCOUNT_CONTACTS ,ACCOUNT_INDUSTRY] } )
    getWiredAccount({data,error}){
        console.log('wire adapter called');
        
        if(data){
            console.log(data);
            console.log(data.fields);
            console.log(data.fields.Name.value);
            this.record = data;
            this.accountRecord = data.fields;
            console.log('Account Name' + this.accountRecord.Name.value);
            console.log('accountRecord =>'+ this.accountRecord);
        }

        if (error) {
            console.log('error Occured');
            
            this.errorMessage = 'Unknown error';
            if (Array.isArray(error.body)) {
                this.errorMessage = error.body.map(e => e.message).join(', ');
            } else if (typeof error.body.message === 'string') {
                this.errorMessage = error.body.message;
            }
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error loading record',
                    message: this.errorMessage,
                    variant: 'error'
                }),
            );
            
        }
  }
   get accountType(){
        return getFieldValue(this.record,ACCOUNT_TYPE);
   }


    //'$userId' is used to denote that the userId is reactive and if it changes the wire method again try to get info from LDS
    //and we should not mention This before the usedID
    
    
    @wire(getRecord, { recordId: '$userId', layoutTypes:'Full' } )
    getUserRecord ({error, data}) {
        if (error) {
            console.log('error occured')
        } 
        if (data) {
            console.log('user record found')
           console.log(data)
           console.log(data.fields)
           this.userRecord = data.fields;
        }
    }
}