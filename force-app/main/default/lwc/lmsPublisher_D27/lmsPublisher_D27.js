import { LightningElement, wire } from 'lwc';


import {
    APPLICATION_SCOPE,
    createMessageContext,
    MessageContext,
    publish,
    releaseMessageContext,
    subscribe,
    unsubscribe,
} from 'lightning/messageService';

import SAMPLEMSG from '@salesforce/messageChannel/SimpleMessagingChannel__c';

export default class LmsPublisher_D27 extends LightningElement {

    message;
    value;
    ratingValue;
    get options() {
        return [
            { label: 'Hot', value: 'Hot' },
            { label: 'Cold', value: 'Cold' },
            { label: 'Warm', value: 'Warm' },
        ];
    }

    @wire(MessageContext)
    messageContext;
    
    handleChange(event){
     this.message=event.target.value;
     console.log(this.message);
    }

    handleClick(event){
        
        console.log(this.message)
     // Data will be having multiple fields/data hence sending all data in payload
        const payload={
            lmsData:{
                value: this.message
            }
        }
        publish(this.messageContext, SAMPLEMSG, payload);
        
    }


    handlePicklistChange(event){
      this.value = event.target.value;
    }

    handleClickSubscribe(event){
        console.log('Data Published')
        const accData={
            ratingValue:{
                value: this.value
            }
        }

        console.log(accData.ratingValue.value)
        publish(this.messageContext, SAMPLEMSG, accData);
       
    }
}