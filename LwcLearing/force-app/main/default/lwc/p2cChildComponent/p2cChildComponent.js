import { LightningElement,api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api message;
    @api number;
    @api isVisible;
    @api heading;

}