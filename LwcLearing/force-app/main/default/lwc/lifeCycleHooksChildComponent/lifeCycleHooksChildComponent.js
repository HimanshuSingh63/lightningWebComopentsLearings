import { LightningElement } from 'lwc';

export default class LifeCycleHooksChildComponent extends LightningElement {
    constructor(){
        super()
        console.log('Child Constructor Called');
    }
    connectedCallback(){
        console.log('Child Connected callback Called'); 
        throw new Error ("Loading of child compoent is failed")
    }
    renderedCallback(){
        console.log('Child Rendered Callback Called'); 
    }
    disconnectedCallback(){
        alert('Child disconnected Callback Called');
    }
}