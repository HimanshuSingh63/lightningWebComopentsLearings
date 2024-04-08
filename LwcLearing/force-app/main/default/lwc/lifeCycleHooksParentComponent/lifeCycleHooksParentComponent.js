import { LightningElement } from 'lwc';

export default class LifeCycleHooksParentComponent extends LightningElement {
    constructor(){
        super()
        console.log('Parent Constructor Called');
    }
    connectedCallback(){
        console.log('Parent Connected callback Called'); 
    }
    renderedCallback(){
        console.log('Parent Rendered Callback Called'); 
    }
}