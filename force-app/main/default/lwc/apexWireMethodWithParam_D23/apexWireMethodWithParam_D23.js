import { LightningElement, wire } from 'lwc';
import searchAccountList from '@salesforce/apex/AccountController.searchAccountList'
const DELAY = 500;
export default class ApexWireMethodWithParam_D23 extends LightningElement {
    searchKey;
    
    columnsList=[
        {label: 'Id', fieldName: 'Id'},
        {label: 'Name', fieldName: 'Name'},
        {label: 'Rating', fieldName: 'Rating'},
    ]

    handleKeyChange(event) {
        // Debouncing this method: Do not update the reactive property as long as this function is
        // being called within a delay of DELAY. This is to avoid a very large number of Apex method calls.
        window.clearTimeout(this.delayTimeout);
        const searchKey = event.target.value;
        this.delayTimeout = setTimeout(() => {
            this.searchKey = searchKey;
        }, DELAY);
    }

    @wire(searchAccountList,{searchKey:'$searchKey'})
    accounts;
}