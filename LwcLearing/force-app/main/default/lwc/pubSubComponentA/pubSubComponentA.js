import { LightningElement } from 'lwc';
import pubSubComponent from 'c/pubSubComponent';
export default class PubSubComponentA extends LightningElement {
    message;
    inputHandler(event){
        this.message = event.target.value;
    }
    publishHandler(){
        pubSubComponent.publish('componentA',this.message)
    }
}