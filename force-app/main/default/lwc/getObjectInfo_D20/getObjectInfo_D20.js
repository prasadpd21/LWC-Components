import { api, LightningElement, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class GetObjectInfo_D20 extends LightningElement {
    @api recordId;
    @api objectApiName;
    objectInfo;
    @track totalObjectFields;
    @track totalCustomFields;
    @track totalPickListFields;
    @track totalRecordTypes;
    @track apiArray;


    @wire(getObjectInfo, { objectApiName: '$objectApiName' })
    getobjectInfo({ data, error }) {
        if (data) {
            console.log('Inside GetObjectInfo_D20');
            console.log(data);
            this.objectInfo = data;

            let customFields=0;
            let totalFields=0;
            let pickListFields=0;
            let recordTypes = 0;
            let apiList=[];
            let fieldList = Object.entries(data.fields);
            let recordTypeList = Object.entries(data.recordTypeInfos);

            fieldList.forEach((field) => {
                // console.log('================Inside for each loop==============');
                // let f = JSON.stringify(field);
                // console.log('field'+JSON.parse(f));
                //console.log(field['1'].apiName);
                apiList.push(field['1'].apiName);
                totalFields +=1;

                if(field['1'].custom == true){
                    //console.log('dummy'+ JSON.stringify(field['1']))
                    // let dum = JSON.stringify(field['1'])
                    // console.log(JSON.parse(dum));
                    customFields+=1;
                }

                if(field['1'].dataType == "Picklist"){
                    pickListFields +=1;
                }
            });
            
            recordTypeList.forEach(element => {
                recordTypes +=1;
                //console.log('recordTypes ' +recordTypes)
            });


            this.totalObjectFields = totalFields;
            this.totalCustomFields = customFields;
            this.totalPickListFields = pickListFields;
            this.totalRecordTypes = recordTypes;
            this.apiArray = apiList;
        }
    }
}