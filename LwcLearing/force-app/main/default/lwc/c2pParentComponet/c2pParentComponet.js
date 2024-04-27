import { LightningElement } from 'lwc';

export default class C2pParentComponet extends LightningElement {

    showModal=false;
    message;

    clickHandler(){
       this.showModal = true ;
    }

    closeHandler(event){
        this.message = event.detail
        this.showModal = false ;
        console.log(this.message[0].name);

    }
}