import { LightningElement, track } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    isZero = false;
    areDetailsVisible = false;

    @track product = {
        name : 'TV',
        Price: 10000,
        stock: 100
    }

    handleChange(event){
        this.product.stock = parseInt(event.target.value);
        if(this.product.stock ==0){
            this.isZero = true;
        }
    }
    handleCheck(event){
        this.areDetailsVisible = event.target.checked;
     }
}