import { LightningElement } from 'lwc';

export default class ReactiveDemo extends LightningElement {
    Fname;
    Lname;

    handleChange(event){
        if(event.target.name == "Fname"){
            let a = (event.target.value);
            this.Fname = a.toUpperCase();
        }
        if(event.target.name == "Lname"){
            let b = (event.target.value);
            this.Lname = b.toUpperCase();
        }
        
    }
}