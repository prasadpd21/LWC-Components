import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
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

export default class LmsSubscriber_D27 extends LightningElement {
    receivedData;
    receivedRatingData;
    error;
    accList;

    @wire(MessageContext)
    messageContext;

    columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'AnnualRevenue',fieldName:'AnnualRevenue'},
        {label:'Rating',fieldName:'Rating'}
    ]

    connectedCallback() {
        this.subscribeMessage();
    }

    subscribeMessage() {
        //context, channel ref , listener(method) , subscriber option
        subscribe(this.messageContext, SAMPLEMSG, (message) => { this.getMessage(message); }, { scope: APPLICATION_SCOPE });
    }

    getMessage(message) {
        console.log(message)
        if (message.lmsData) {
            console.log('HI')
            this.receivedData = message.lmsData.value ? message.lmsData.value : 'No Data';
            console.log('receivedData =>' + this.receivedData);

        }
       else if (message.ratingValue) {
            console.log('Hey')
            this.receivedRatingData = message.ratingValue.value ? message.ratingValue.value : 'No Data';
            console.log('receivedRatingData =>' + this.receivedRatingData);

            getAccountList({Rating: this.receivedRatingData})
            .then((result) => {
                console.log(result);
                this.accList = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.contacts = undefined;
            });
        }
    }

}