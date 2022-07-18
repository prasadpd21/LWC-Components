import { LightningElement, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { updateRecord } from 'lightning/uiRecordApi';
import {refreshApex} from '@salesforce/apex';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'


export default class Datatable_Actions_Inline_Edit_D25 extends LightningElement {

    accList;
    saveDraftValues;
    wiredAccounts;

    //multiple action on row to edit field => editable: true
    columnsList = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name', editable:true},
        { label: 'AnnualRevenue', fieldName: 'AnnualRevenue', editable:true },
        {
            type: 'action',
            typeAttributes: {
                rowActions: [
                    { label: 'Preview', name: 'preview', iconName: 'utility:preview' },
                    { label: 'Remove', name: 'remove', iconName: 'utility:close' },
                ]
            }
        }
    ]

    @wire(getAccountList)
    getaccList(response) {
        this.wiredAccounts = response;
        if (response.data) {
            console.log(response.data)
            //to limit the no of records to display we will use array slice
            this.accList = response.data.slice(0, 10);
            console.log(this.accList);
        }
    }

    handleClick(event) {
        //getting info about selected rows on button click
        const rows = this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log(JSON.stringify(rows));
    }

    handleRowSelection(event) {
        //getting info about selected rows on checkbox selection
        console.log(JSON.stringify(event.detail));
    }

    handleRowAction(event) {
        console.log(JSON.stringify(event.detail));
        console.log(JSON.stringify(event.detail.action.name));
        console.log(JSON.stringify(event.detail.row));
    }
    
      //Inline edit onSavehandler --->draft-values (edited row info)
    handleSave(event){
        //To update changes to DB Options=> 1. Apex call 2.UiRecordApi

        //if output is proxy used JSON.stringify(event)
        //console.log(JSON.stringify(event.detail));
        this.saveDraftValues= event.detail.draftValues;
        //console.log(JSON.stringify(this.saveDraftValues));

        const val= JSON.parse(JSON.stringify(this.saveDraftValues));
        //console.log(val);

        let values =  val.map(item => {
            console.log(item);
             return {fields:item};
        });

        console.log(values);

        //promises will hold the responses of all the asynchronous uiUpdateRecord update calls
        const promises = values.map(recordInput=>updateRecord(recordInput));
        
        Promise.all(promises) //To wait to show toast after complition of all update calls using  Promise.all(promises)
        .then((result) => {
            console.log(result)
            this.dispatchEvent(new ShowToastEvent({
                title: 'Records Updated',
                message:'Records Updated',
                variant:'success'
            }))
            this.saveDraftValues = []; // clearing saveDraftValues after update
            refreshApex(this.wiredAccounts);
        })
        .catch((error) => {
            console.log(error)
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error Occured',
                message: 'Error Occured',
                variant: 'error'
            }));
        });


         /*Alternate way to convert proxy data to usable array of data to be used for uiRecordApi updateRecord 
        slicing to convert the proxy data into array of objects and again using map to create the input data for uiRecordApi
        const recordInput= this.saveDraftValues.slice().map(draft=>{
            const fields = Object.assign({}, draft);
            return {fields};    
        })
        */

        

    }
}