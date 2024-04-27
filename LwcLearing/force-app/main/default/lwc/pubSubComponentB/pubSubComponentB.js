import { LightningElement } from 'lwc';
import pubSubComponent from 'c/pubSubComponent';
export default class PubSubComponentB extends LightningElement {
    message;
    connectedCallback(){
        this.callsubscriber()
    }
    callsubscriber(){
        pubSubComponent.subscribe('componentA',(message)=>{
            this.message  = message;
        });
    }
}