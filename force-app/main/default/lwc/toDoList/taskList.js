import { LightningElement ,track} from 'lwc';

export default class ToDoList extends LightningElement {

   @track todolist=['Fill TimeSheet','Con-Call','Daily-Update'];
   Item;

   handleChange(event){
     this.Item = event.target.value
     
   }


   handleClick(){
    
       this.todolist.push(this.Item);
       this.Item = NULL;
       this.template.querySelector('actionItem').value = '';
      //  ('lightning-input[name = actionItem]').value = null;
   }


   handleDelete(event){
    //  alert(event.target.dataset.value)
    // let index = this.todolist.indexOf(event.target.dataset.value);
    // console.log(index)
    let index = this.todolist.indexOf(event.target.name)
    if(index!==-1){
      this.todolist.splice(index,1)
    }
   //  alert(event.target.name)
   //  this.todolist.splice(0,1);
    // console.log(this.todolist);

   }
}