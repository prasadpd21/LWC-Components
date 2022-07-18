import { api, LightningElement, track } from 'lwc';
import { FlowNavigationNextEvent } from 'lightning/flowSupport';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class FlowLwcCmp_D32 extends LightningElement {
    @track accList;
    isGridVisible;
    @api
    get grid_visible() {
        return this.isGridVisible;
    }
    set grid_visible(value) {
        this.isGridVisible = value;
    }

    columnsList = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name' }
    ]

    handleClick(event) {
        getAccountList()
            .then((result) => {
                this.accList = result;
            }).catch((error) => {
                console.log(error);
                this.accList = NULL;
            });
    }

    handleClickNext(event) {
        //navigate to next screen in flow need to import FlowNavigationNextEvent
        this.dispatchEvent(new FlowNavigationNextEvent());
    }

    //validation-- if grid is visible then only move to next screen
    //overriding the runtime hook validate() of Flow to stop users from navigating to next page
    @api
    validate() {
        if (this.accList) {
            return {
                isValid: true
            }
        }
        return {
            isValid: false,
            errorMessage: 'Grid data must be visible to move next'
        }
    }
}