import { LightningElement } from 'lwc';

export default class LifeCycleHooksChildComponent extends LightningElement {
    constructor(){
        super()
        console.log('Child Constructor Called');
    }
    connectedCallback(){
        console.log('Child Connected callback Called'); 
    }
    renderedCallback(){
        console.log('Child Rendered Callback Called'); 
    }
}