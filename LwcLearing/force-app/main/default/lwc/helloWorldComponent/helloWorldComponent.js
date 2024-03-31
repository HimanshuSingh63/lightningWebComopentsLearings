import { LightningElement,track } from 'lwc';

export default class HelloWorldComponent extends LightningElement {

    // Learning Data Binding

    fullName = 'Jonathan Fox'
    title = 'Software Engineer'
    //change Title
    changeTitle(event){
        this.title = event.target.value;
    }

    //Learning @track decorator

    @track address = {
        city : 'San Francisco',
        postcode : 94105,
        state : 'CA',
        country : 'USA'
    }
    myArray = ['a','b','c']
     
    
    trackhandler(event){
        this.address.city = event.target.value
        // if not using @track
        // this.address = {...this.address, "city": event.target.value}
    }

    //Learning Getter 
    users = ['John','Jane','Jack']
    num1 = 10
    num2 = 20
    get firstuser(){
        return this.users[0]

    }
    get sum(){
        return this.num1 + this.num2
    }
}