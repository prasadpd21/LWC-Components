import { LightningElement } from 'lwc';

export default class WelcomeCard extends LightningElement {

    changeColor = 'black'

    handleClick(event){
      if(event.target.label == "red"){
          this.changeColor = 'red';
      }
      else if(event.target.label == "blue"){
        this.changeColor = 'blue';
      }
    }
}