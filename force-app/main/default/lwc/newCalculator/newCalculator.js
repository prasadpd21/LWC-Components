import { LightningElement } from 'lwc';

export default class NewCalculator extends LightningElement {
    input1;
    input2;
    Result;

    Valuehandle(event){
        if(event.target.name == "Input1"){
            this.input1 = parseFloat(event.target.value);
        }
        else if(event.target.name == "Input2"){
            this.input2 = parseFloat(event.target.value); 
        }
       
    }

    Calculatehandle(event){
     if(event.target.label == "Add"){
        this.Result = this.input1 + this.input2;
     }
     else if(event.target.label == "Sub"){
        this.Result = this.input1 - this.input2;
     }
     else if(event.target.label == "Multiply"){
        this.Result = this.input1 * this.input2;
     }
     else if(event.target.label == "Divide"){
        this.Result = this.input1 / this.input2;
     }

     console.log(this.Result);
    }
}