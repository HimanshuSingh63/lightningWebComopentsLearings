import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import signUpTamplate from './signUpTamplate.html'
import signInTemplate from './signInTemplate.html'
import renderTamplate from './renderMethodComponent.html'
export default class RenderMethodComponent extends LightningElement {
    selectedBtn = ''
    render(){
        return this.selectedBtn === 'SignUp' ? signUpTamplate : 
        this.selectedBtn === "SignIn" ? signInTemplate :
        renderTamplate
    }
    handleClick(event){
        this.selectedBtn = event.target.label;
    }
    submitHandler(event){
        this.dispatchEvent(new ShowToastEvent({
            title: `${event.target.label} `,
            message: `${event.target.label} Successfully`,
            variant: "success"
        }));
    }
    
}