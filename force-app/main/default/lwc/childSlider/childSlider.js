import { api, LightningElement } from 'lwc';

export default class ChildSlider extends LightningElement {
    @api slidervalue;
    @api maxslidervalue;

    @api sliderresetvalue(){
     this.slidervalue = 0;
    }

    handleClick(event){
      console.log('inside clild comp event')
      const e = new CustomEvent("display",{detail:"TestData"});
      this.dispatchEvent(e);
    }
}