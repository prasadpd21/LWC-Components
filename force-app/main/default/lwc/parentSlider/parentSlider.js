import { api, LightningElement } from 'lwc';

export default class ParentSlider extends LightningElement {
    slidervalue;
    @api maxslidervalue;


    handleChange(event){
      this.slidervalue = event.target.value;
    }


    handleClick(event){
      this.template.querySelector('c-child-slider').sliderresetvalue();

    }

    handledisplay(event){

     console.log("inside parent comp event");
     console.log(event.detail); 
    }

    
}