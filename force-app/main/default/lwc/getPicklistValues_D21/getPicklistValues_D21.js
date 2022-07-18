import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry'

export default class GetPicklistValues_D21 extends LightningElement {
    value = 'Banking';
    options;
    noOfPicklistFields;
    pickListApiNames = [];
    //1.get recordTypeId using getObjectInfo
    //2.get Picklist Info
    recordTypeId;
    @wire(getObjectInfo, { objectApiName: "Account" })
    ObjectInfo({ data, error }) {
        if (data) {
            console.log(data);
            this.recordTypeId = data.defaultRecordTypeId;
            console.log('recordTypeId ' + this.recordTypeId)
        }
    }


    @wire(getPicklistValues, { recordTypeId: '$recordTypeId', fieldApiName: INDUSTRY_FIELD })
    getPicklistInfo({ data, error }) {
        if (data) {
            
            console.log('Inside getPicklistValues')
            console.log(data);

            //changing the map.values array of picklist values to get them in the form required for combobx
            this.options = data.values.map(item => {

                return { label: item.label, value: item.value };
            });

            // console.log('this.options')
            // console.log(this.options)
        }
    }

    handleChange(event) {   
        this.value = event.detail.value;
    }


    @wire(getPicklistValuesByRecordType,{objectApiName:ACCOUNT_OBJECT,recordTypeId: '$recordTypeId'})
    getAllPicklistInfo({data,error}){
        if(data){
            console.log('Inside getPicklistValuesByRecordType');
            console.log(data)
            console.log(data.picklistFieldValues)
            let picklists = Object.entries(data.picklistFieldValues);
            console.log(picklists)
            this.noOfPicklistFields = picklists.length;

            picklists.forEach(item => {
                this.pickListApiNames.push(item['0']);
            });
        }
    }

    // get options() {
    //     return [
    //         { label: 'New', value: 'new' },
    //         { label: 'In Progress', value: 'inProgress' },
    //         { label: 'Finished', value: 'finished' },
    //     ];
    // }
}