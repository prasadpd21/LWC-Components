import { api, LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import updateAccount from '@salesforce/apex/AccountController.updateAccount'
export default class UpdateAccount_PageRefresh_D24 extends LightningElement {
    @api recordId;
    revenue;

    handleChange(event){
     this.revenue = event.target.value;
    }

    handleClick(event){
        updateAccount({recordId: this.recordId,revenue: this.revenue})
        .then((result) => {
            console.log(result);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Account Updated',
                message: 'Account Updated',
                variant: 'success'
            }));

            this.dispatchEvent(new CustomEvent('refreshaccount',{
                detail:'Refresh Account'
            }))
        })
        .catch((error) => {
            console.log(error);
            this.dispatchEvent(new ShowToastEvent({
                title: 'Error Occured',
                message: error.body.pageErrors['0'].message ,
                variant: 'error'
            }));
        });
    }
}