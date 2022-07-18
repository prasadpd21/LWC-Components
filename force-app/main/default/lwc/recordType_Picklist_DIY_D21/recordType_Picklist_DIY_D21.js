import { LightningElement, wire, track } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';


export default class RecordType_Picklist_DIY_D21 extends LightningElement {

    @track recordTypeIdOptions;
    @track picklistValuesOptions;
    @track recordTypeId;
    value;
    //= "0125j00000012KcAAI" ;

    @wire(getObjectInfo, { objectApiName: 'Account' })
    objectInfo({ data, error }) {
        if (data) {
            console.log('Inside getObjectInfo D21')
            console.log(data)

            let recordIdArray = Object.entries(data.recordTypeInfos);
            console.log(recordIdArray);

            this.recordTypeIdOptions = recordIdArray.map(item => {
                return { label: item['1'].name, value: item['1'].recordTypeId };
            });

            console.log(this.recordTypeIdOptions)

        }
    }

    handleChange(event) {
        this.value = event.target.value;
    }

    @wire(getPicklistValues, { recordTypeId: '$value', fieldApiName: INDUSTRY_FIELD })
    getPicklistInfo({ data, error }) {
        if (data) {
            console.log('all picklists')
            console.log(data)

            let valuesArray = data.values;
            console.log(valuesArray);

            this.picklistValuesOptions = data.values.map(item => {

                return { label: item.label, value: item.value };
            });

            //console.log('picklistValuesOptions ==> ' + this.picklistValuesOptions)

        }

    }
}