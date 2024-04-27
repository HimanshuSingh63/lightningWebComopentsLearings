import { LightningElement } from 'lwc';

export default class LifeCycleHooksParentComponent extends LightningElement {
    isChildVisible = false
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
    errorCallback(err,stack){
        console.log('Error',err.message);
        console.log('Stack',stack);
    }
    
    handleClick(){
        this.isChildVisible = !this.isChildVisible;
        
    }
   
}
