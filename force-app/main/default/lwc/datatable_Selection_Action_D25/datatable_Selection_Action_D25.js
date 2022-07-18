import { LightningElement, wire } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import { NavigationMixin } from 'lightning/navigation';

import getAccountList from '@salesforce/apex/AccountController.getAccountList'

export default class Datatable_Selection_Action_D25 extends NavigationMixin(LightningElement) {

    accList;

    columnsList=[
        {label:'Id',fieldName:'Id'},
        {label:'Name',fieldName:'Name'},
        {label:'AnnualRevenue',fieldName:'AnnualRevenue'},
        {
            type : 'button-icon',
            typeAttributes:{
                iconName : 'action:preview',
            }
        }
    ]

    @wire(getAccountList)
    getaccList({data,error}){
        if(data){
            console.log(data)
            //to limit the no of records to display we will use array slice
             this.accList = data.slice(0,10);
             console.log(this.accList);
        }
    }

    handleClick(event){
        //getting info about selected rows on button click
        const rows = this.template.querySelector('lightning-datatable').getSelectedRows();
        console.log(JSON.stringify(rows));
    }

    handleRowSelection(event){
        //getting info about selected rows on checkbox selection
        console.log(JSON.stringify(event.detail)); 
    }

    handleRowAction(event){
        console.log(JSON.stringify(event.detail)); 
        console.log(JSON.stringify(event.detail.row)); 
    }

    //using below handler to close the pop up when this componnet is used in record action
    handleClose(event){
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    handleNavigate(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage', //reference
            attributes: {
                pageName: 'home'
            },
        });
    }

    handleAccountNavigate(event){
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new',
            },
        });
    }


}