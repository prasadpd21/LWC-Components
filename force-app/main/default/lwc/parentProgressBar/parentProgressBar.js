import { LightningElement } from 'lwc';

export default class ParentProgressBar extends LightningElement {
    progressvalue;

    handleClick(){
        //calling child component function to increase progress bar
        //parent to child communication
        this.template.querySelector("c-clild-progress-bar").handleProgress();

        //disable start button
        this.template.querySelector('lightning-button').disabled=true;
    }

    onfinish(event){
        //enabling start button
        this.template.querySelector('lightning-button').disabled=false;
        console.log('Bubble phase demo 1')

    }

    onbubble(){
        console.log('Bubble phase demo 2');
    }

    // getter setter demo from below

    person = {
        name: "Prasad",
        id: 101,
        age:25,
        gender:"Male"

    }
}