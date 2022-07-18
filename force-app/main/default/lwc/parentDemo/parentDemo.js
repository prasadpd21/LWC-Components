import { LightningElement } from 'lwc';

export default class ParentDemo extends LightningElement {

    message = 'Hi from Parent Component'
    fromchild;

    handleclickfromchild(event){
        this.fromchild = event.detail
        alert(event.detail)
    }
}