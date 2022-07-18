import { LightningElement, api } from 'lwc';

export default class ChildDemo extends LightningElement {

    @api messagereceiver;

    handleClick() {
        //to pass info from child to parent
        //1.Create a custom event
        //2.Dispatch the event - Fire it
        //3.Catch the event in the parent-handler

        //1.syntax is new customEvent("eventname"{detail: 'data to pass to parent'}) and save this in a variable
        const eventdata = new CustomEvent("buttonclick", {
            
            detail: 'Hi from child component'
            /*if we want to pass an array/ object
            detail : {firstname : "PD", Age : 25}
            */
        })

        //2.Firing event:
        this.dispatchEvent(eventdata);

    }
}