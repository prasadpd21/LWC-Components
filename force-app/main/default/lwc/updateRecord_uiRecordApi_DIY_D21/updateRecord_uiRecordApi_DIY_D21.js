import { LightningElement, wire } from 'lwc';
import { updateRecord,generateRecordInputForUpdate,getRecord  } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ID_FIELD from '@salesforce/schema/Account.Id';
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class UpdateRecord_uiRecordApi_DIY_D21 extends LightningElement {

    inputRecordId;
    name;
    revenue;
    industry;

    @wire(getRecord,{recordId:'$inputRecordId',fields:[ACCOUNT_NAME,ACCOUNT_REVENUE,ACCOUNT_INDUSTRY]})
    getRecordInfo({data,error}){
        if(data){
            console.log(data);
            this.name = data.fields.Name.value;
            this.industry = data.fields.Industry.value;
            this.revenue = data.fields.AnnualRevenue.value;
        }
        if(error){
            console.log(error);
        }
    }

    handleChange(event){
        if(event.target.name == 'Id'){
            this.inputRecordId = event.target.value;
        }
        else if(event.target.name == 'Name'){
            this.name = event.target.value;
        }
        else if(event.target.name == 'AnnualRevenue'){
            this.revenue = event.target.value;
        }
        else if(event.target.name == 'Industry'){
            this.industry = event.target.value;
        }
    }

    updateRecordHandler(event){

        //creating recordINput to pass to updateRecord
        const fields = {};
            fields[ID_FIELD.fieldApiName] = this.inputRecordId;
            fields[ACCOUNT_REVENUE.fieldApiName] = this.revenue;
            fields[ACCOUNT_INDUSTRY.fieldApiName] = this.industry;
            fields[ACCOUNT_NAME.fieldApiName] = this.name;

           

            const recordInput = { fields };
            console.log(fields)
            console.log(recordInput)

            updateRecord(recordInput)
            .then((result) => {
                console.log('record updated successfully');

                this.dispatchEvent(new ShowToastEvent({
                    title: 'record updated successfully',
                    message: 'record updated successfully',
                    variant: 'success'
                }));
                
            })
            .catch((err) => {
                console.log('ERROR OCCURED')
                console.log(err.body.output.errors['0'].message)
                console.log(err);
                this.dispatchEvent(new ShowToastEvent({
                    title: 'An error occurred while trying to update the record',
                    message: err.body.output.errors['0'].message,
                    variant: 'error'
                }));
            });


            // let allData = this.template.querySelectorAll('lightning-input');
            // Array.from(allData).forEach(element => {
            //     element.value = '';
            // });
            this.clearHandler();


    }

    clearHandler(event){
        let allData = this.template.querySelectorAll('lightning-input');
        //clearing all input boxes
        Array.from(allData).forEach(element => {
            element.value = '';
        });
    }

}