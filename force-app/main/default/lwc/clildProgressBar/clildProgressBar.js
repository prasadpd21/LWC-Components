import { api, LightningElement } from 'lwc';

export default class ClildProgressBar extends LightningElement {

   @api progressvalue=0;

   @api handleProgress(){

     //timer will be an id returned by setInterval which will be later used to clear the interval
      let timer= setInterval(() => {
        this.progressvalue=this.progressvalue +10;
        if(this.progressvalue>=100){
         const e= new CustomEvent('finish',{bubbles:true,detail:"Test Data"});
         this.dispatchEvent(e);
         this.progressvalue = 0;
         clearInterval(timer);
         
        }
       }, 300);
       
       
    }


    //getter setter demo

    modifiedperson;

    @api
    set personinfo(data){
      console.log('setter called');
      console.log(data);
      //this.modifiedperson = {...data};
      //below first we will spread the data and to modify the name we will use array destructuring and tarnery operator
      this.modifiedperson = {...data,name:data.gender=='Male'?`Mr.${data.name}`:data.gender=='Female'?`Ms.${data.name}`:data.name};

      console.log(this.modifiedperson.name);

    }

    get personinfo(){
      return this.modifiedperson;
    }
}