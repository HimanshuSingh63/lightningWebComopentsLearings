import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { JSConfetti } from './js-confetti';

export default class QuizAppCoponent extends LightningElement {
    
    myQuestions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            options: {
                a: 'Paris',
                b: 'London',
                c: 'Rome',
                d: 'Berlin'
            },
            correctAnswer: 'a'
        },
        {
            id: 2,
            question: 'What is the largest ocean in the world?',
            options: {
                a: 'Pacific Ocean',
                b: 'Atlantic Ocean',
                c: 'Southern Ocean',
                d: 'Arctic Ocean'
            },
            correctAnswer: 'a'
        },
        {
            id: 3,
            question: 'What is the highest mountain in the world?',
            options: {
                a: 'Mount Everest',
                b: 'Mount Kilimanjaro',
                c: 'K2',
                d: 'Mount Elbrus'
            },
            correctAnswer: 'a'
        },
        {
            id: 4,
            question: 'What is the full form of US?',
            options: {
                a: 'India',
                b: 'United States',
                c: 'Pakistan',
                d: 'China'
            },
            correctAnswer: 'b'
        },
        {
            id: 5,
            question: 'What is the most common language in the world?',
            options: {
                a: 'Spanish',
                b: 'English',
                c: 'Arabic',
                d: 'Hindi'
            },
            correctAnswer: 'b'
        }
    ];
    selected = {};
    correctAnswer = 0;
    
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    get emojis() {
        return this.correctAnswer <= 2 ? '🥺😟😔🥲' : '😀😁🥳🎇';
      }
    get variant(){
          return this.correctAnswer <= 2 ? 'error' : 'success';
      }


    handleChange(event) {
        const { name, value } = event.target;
        this.selected = { ...this.selected, [name]: value };


    }
    handleSubmit(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer);
        this.correctAnswer = correct.length;
        this.showConfetti();
        this.showToast();
    }
    handleReset() {
        this.selected = {};
        this.confetti();
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Your Score',
            message: 'You scored ' + this.correctAnswer + ' out of ' + this.myQuestions.length,
            variant: this.variant,
        });
        this.dispatchEvent(event);

    }
    @api size = 'small';
    @api number = 'normal';
    @api type = 'emoji';
    @api emoji = this.emojis;

    
    
    sizeOptions = [
        { label: 'small', value: 60 },
        { label: 'medium', value: 100 },
        { label: 'large', value: 140 }
    ];
    numberOptions = [
        { label: 'few', value: 15 },
        { label: 'normal', value: 30 },
        { label: 'plenty', value: 50 }
    ];

    showConfetti() {
        // Confetti will be shown immediatelly when component renders
        const jsConfetti = new JSConfetti();
        // The emoji confettis accept the emojiSize and confettiNumber parameters
        if (this.type === 'emoji') {
            jsConfetti.addConfetti({
                emojis: [...this.emojis],
                emojiSize: this.sizeOptions.filter(o => o.label === this.size)[0].value,
                confettiNumber: this.numberOptions.filter(o => o.label === this.number)[0].value,
            });
        }

        // The default confettis only accept the confettiNumber parameter
        else {
            jsConfetti.addConfetti({
                confettiNumber: this.numberOptions.filter(o => o.label === this.number)[0].value * 4,
            });
        }
    }

}
