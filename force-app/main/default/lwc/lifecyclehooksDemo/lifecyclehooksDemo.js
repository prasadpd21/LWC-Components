import { LightningElement } from 'lwc';
import demoHtml from './demoHtml.html'

export default class LifecyclehooksDemo extends LightningElement {

    message;

    constructor() {
        super();
        console.log('inside constructor');
    }

    connectedCallback() {
        console.log('inside connectedCallback');
        //cannot access buttons/input/controls
        //It is used to get data by Fetch/Apex

        //below code will run after renderedCallback and after changing value of message the renderedCallback will again be called
        const x = setInterval(() => {
            console.log('inside setinterval');
            this.message = 'Hi';
            clearInterval(x);
        }, 1000)
    }

    renderedCallback() {
        console.log('inside renderedCallback');
        //if any reactive property/variable binded in template rerenderes then this method will be called each time the template rerenders.
    }

    disconnectedCallback() {
        console.log('inside disconnectedCallback');
    }

    errorCallback() {
        console.log('inside errorCallback');
    }


    // using render() method to dynamically change the HTML template
        render(){
            return demoHtml;
        }
    

}