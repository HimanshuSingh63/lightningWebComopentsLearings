import { LightningElement } from 'lwc';

export default class LoopingComponent extends LightningElement {

    carList = ['Ford Mustang', 'Toyota Camry', 'Honda Civic', 'Chevy Camaro', 'Dodge Challenger'];

    ceoList =[
        {
            id : 1,
            name: 'Elon Musk',
            company: 'Tesla'
        },
        {
            id : 2,
            name: 'Jeff Bezos',
            company: 'Amazon'
        },
        {
            id : 3,
            name: 'Bill Gates',
            company: 'Microsoft'
        },
        {
            id : 4,
            name: 'Mark Zuckerberg',
            company: 'Facebook'
        },
        {
            id : 5,
            name: 'Sundar Pichai',
            company: 'Google'
        },
    ]

}