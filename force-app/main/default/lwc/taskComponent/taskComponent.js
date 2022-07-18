import { LightningElement,track } from 'lwc';

export default class TaskComponent extends LightningElement {

  @track todolist = ['Fill TimeSheet','Con-Call','Daily-Update'];
  Item;

  handleChange(event){
    
      this.Item = event.target.value;
    }


  handleClick(){
      
        this.todolist.push(this.Item);
        this.Item = '';
        console.log(this.Item);
    //   this.template.querySelector('actionItem').NULL;
    //  ('lightning-input[name = actionItem]').value = null;
      this.template.querySelector('lightning-input[data-name="actionItem"]').value = '';   
  }


  handleDelete(event){
    //  alert(event.target.dataset.value)
    // let index = this.todolist.indexOf(event.target.dataset.value);
    // console.log(index)
    //alert('hi')
  //  let index = this.todolist.indexOf(this.template.querySelector('lightning-icon [data-name="deleteIcon"]').value)
  let index = this.todolist.indexOf(event.target.name);
    //alert(index)
    if(index!==-1){
      this.todolist.splice(index,1)
    }
  //  alert(event.target.name)
  //  this.todolist.splice(0,1);
    // console.log(this.todolist);

  }
}