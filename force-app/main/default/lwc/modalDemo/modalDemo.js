import { LightningElement } from 'lwc';
import account from './account.html'
import contact from './contact.html'
import modalDemo from './modalDemo.html'

export default class ModalDemo extends LightningElement {
    show;
    template;

    handleClick(event){
     this.show=true;
    }

    handleRemove(event){
        this.show=false;
    }

    handleAccount(event){
        this.template='account';
    }

    handleContact(event){
        this.template='contact';
    }

    handleBacktoModal(event){
        this.template= 'modalDemo';
        console.log('back to modal')
        }

    render(){

       return this.template == 'account'? account: this.template == 'contact'? contact:modalDemo;
   }



    
}