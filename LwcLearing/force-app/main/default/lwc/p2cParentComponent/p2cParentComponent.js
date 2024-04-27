import { LightningElement,api } from 'lwc';

export default class P2cParentComponent extends LightningElement {
   carousalData = [
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header : "First Card",
        description :"First card description."   
   },
   {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header : "Secound Card",
        description :"Secound card description."   
    },
    {
        src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
        header : "Third Card",
        description :"Third card description."   
    }
]
    percentage=10
    changeHandler(event){
        this.percentage = (event.target.value)*10;
       
    }

    handleClick(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
} 