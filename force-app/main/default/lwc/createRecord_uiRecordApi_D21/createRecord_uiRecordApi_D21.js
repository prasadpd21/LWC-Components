import { LightningElement } from 'lwc';
import { getRecord, createRecord,updateRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CreateRecord_uiRecordApi_D21 extends LightningElement {
    recordId;
    /* the data will be passed to salesforce in the form of Object while we try to create the record
    {
        Name : 'ABC consulting',
        Industry : 'Banking',
        Phone : '5465465465'

     }
    */

    formData = {};
    updateFormData={};
    chnageHandler(event) {

        /*const name = event.target.name;
        const value = event.target.value;
        we can achieve above thing by object destructuring as below
        the name and value of each input will by passed as an object
        */
        const { name, value } = event.target; //array Destructuring the variable name must be same as the keys in the object
        //passing values to the formdata object to send to Salesforce to create a record
        this.formData[name] = value;
    }

    handleClick(event) {

        createRecord({ apiName: 'Account', fields: this.formData })
            .then(response => {
                console.log(response)
                this.dispatchEvent(new ShowToastEvent({
                    title: 'Account Created',
                    message: event.message,
                    variant: 'success'
                }));

                this.formData = {}
                //converting the all inputs using Array.from() to loop them and make them null
                let allData = Array.from(this.template.querySelectorAll('lightning-input'))
                allData.forEach(element => {
                    element.value = null;
                });
                
            })

    }



}