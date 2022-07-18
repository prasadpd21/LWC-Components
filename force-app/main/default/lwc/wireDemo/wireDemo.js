import { LightningElement, wire } from 'lwc';
import getAccount from '@salesforce/apex/WireDemo.getAccount'   //importing our apex class

export default class WireDemo extends LightningElement {
    Accounts;

    @wire (getAccount)    //calling getAccount metod from apex class
    Accounts              // Stroring result in the form of data : {}, error : {undefined if we get proper data}
}