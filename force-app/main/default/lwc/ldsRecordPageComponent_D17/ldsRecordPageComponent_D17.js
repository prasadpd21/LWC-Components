import { api, LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import NAME from '@salesforce/schema/Account.Name'
import INDUSTRY from '@salesforce/schema/Account.Industry'
import ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue'

export default class LdsRecordPageComponent_D17 extends LightningElement {
    fields = [NAME,INDUSTRY,ANNUAL_REVENUE];
    @api objectApiName;
    @api recordId;
}