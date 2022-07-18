import { LightningElement } from 'lwc';

export default class BiggestNumber extends LightningElement {
    Big;
    Number1;
    Number2;
    Number3;
    OpeningBalance = 50000;
    amount;
    Result;
    FirstValue;
    SecondValue;

    handleChange(event){
        if(event.target.name == 'Number1')
        this.Number1 = parseInt(event.target.value);
        else if(event.target.name == 'Number2')
        this.Number2 = parseInt(event.target.value);
        else if (event.target.name == 'Number3')
        this.Number3 = parseInt(event.target.value);
    }

    handleClick(event){
        if(this.Number1>this.Number2 && this.Number1>this.Number3)
        this.Big = this.Number1
        else if (this.Number2>this.Number3)
        this.Big = this.Number2
        else
        this.Big = this.Number3

        console.log('Biggest no='+this.Big);

    }

    inputhandle(event){
        this.amount = parseInt(event.target.value);
    }

    amounthandle(event){
        
        if(event.target.label == "Withdraw")
        this.OpeningBalance -=this.amount;
        else if (event.target.label == "Deposit")
        this.OpeningBalance +=this.amount;

        console.log('current balance:'+this.OpeningBalance);

    }

    Valuehandle(event){
        if(event.target.name == "First Value")
        this.FirstValue = parseInt(event.target.value)
        else if(event.target.name == "Second Value")
        this.SecondValue = parseInt(event.target.value)
    }

    Calculatehandle(event){
        if(event.target.label == "Add")
        this.Result = this.FirstValue + this.SecondValue;
        else if(event.target.label == "Sub")
        this.Result = this.FirstValue - this.SecondValue;
        else if(event.target.label == "Multiply")
        this.Result = this.FirstValue * this.SecondValue;
        else if(event.target.label == "Divide")
        this.Result = this.FirstValue / this.SecondValue;

        console.log(this.Result);

    }


}