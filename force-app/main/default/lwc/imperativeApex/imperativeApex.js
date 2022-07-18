import { LightningElement ,track} from 'lwc';
import getOpportunity from '@salesforce/apex/ImperativeApex.getOpportunity'

export default class ImperativeApex extends LightningElement {

  @track OpportunityRecords;
    Amount;

    handleClick(){
        this.Amount =parseFloat(this.template.querySelector('lightning-input').value);
        console.log(this.Amount )

        getOpportunity({Amt :this.Amount})

        .then((result)=>{
          console.log(result)
          this.OpportunityRecords = result
          console.log(this.OpportunityRecords)
        })

        .catch((error)=>{
           console.log(error)
        })
    }
}