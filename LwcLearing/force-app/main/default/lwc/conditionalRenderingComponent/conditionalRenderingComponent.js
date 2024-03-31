import { LightningElement } from 'lwc';

export default class ConditionalRenderingComponent extends LightningElement {
    isVisible = false;
    name
    handleClick() {
        this.isVisible = true;
    }
    handleInputChange(event){
    this.name = event.target.value;
    }
    get helloName(){
        return this.name === 'hello'
    }

    //falsy Values
    // 0,false,'',null,undefined

}