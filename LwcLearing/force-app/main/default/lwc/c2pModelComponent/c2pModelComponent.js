import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {

    msg = [{ name : 'Event 1',
    mess : 'Closed 1'},
{
    name : 'Event 2',
    mess : 'Closed 2'
}]
    closeHandler(){
        
        const myEvent = new CustomEvent('close',{
            detail :this.msg
        });
        this.dispatchEvent(myEvent);

    }
}