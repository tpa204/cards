import React, {Component} from 'react';

class Start extends Component {
        odd = 0;

        even = 0;
        firstPlayer=[];
        secondPlayer=[];
        constructor(props) {

                super(props);
                this.state = {

                        fullDeck: [
                                {name: '2 spades', value: 3},
                                {name: '3 spades', value: 4},
                                {name: '4 spades', value: 5},
                                {name: '5 spades', value: 6},
                                {name: '6 spades', value: 7},
                                {name: '7 spades', value: 8},
                                {name: '8 spades', value: 9},
                                {name: '9 spades', value: 10},
                                {name: '10 spades', value: 11},
                                {name: 'jack spades', value: 12},
                                {name: 'queen spades', value: 13},
                                {name: 'king spades', value: 14},
                                {name: 'ace spades', value: 15},
                                {name: 'joker', value: 16},
                                {name: 'joker', value: 16},
                                {name: '2 hearts', value: 3},
                                {name: '3 hearts', value: 4},
                                {name: '4 hearts', value: 5},
                                {name: '5 hearts', value: 6},
                                {name: '6 hearts', value: 7},
                                {name: '7 hearts', value: 8},
                                {name: '8 hearts', value: 9},
                                {name: '9 hearts', value: 10},
                                {name: '10 hearts', value: 11},
                                {name: 'jack hearts', value: 12},
                                {name: 'queen hearts', value: 13},
                                {name: 'king hearts', value: 14},
                                {name: 'ace hearts', value: 15},
                                {name: '2 diamonds', value: 3},
                                {name: '3 diamonds', value: 4},
                                {name: '4 diamonds', value: 5},
                                {name: '5 diamonds', value: 6},
                                {name: '6 diamonds', value: 7},
                                {name: '7 diamonds', value: 8},
                                {name: '8 diamonds', value: 9},
                                {name: '9 diamonds', value: 10},
                                {name: '10 diamonds', value: 11},
                                {name: 'jack diamonds', value: 12},
                                {name: 'queen diamonds', value: 13},
                                {name: 'king diamonds', value: 14},
                                {name: 'ace diamonds', value: 15},
                                {name: '2 clubs', value: 3},
                                {name: '3 clubs', value: 4},
                                {name: '4 clubs', value: 5},
                                {name: '5 clubs', value: 6},
                                {name: '6 clubs', value: 7},
                                {name: '7 clubs', value: 8},
                                {name: '8 clubs', value: 9},
                                {name: '9 clubs', value: 10},
                                {name: '10 clubs', value: 11},
                                {name: 'jack clubs', value: 12},
                                {name: 'queen clubs', value: 13},
                                {name: 'king clubs', value: 14},
                                {name: 'ace clubs', value: 15}
                        ]
                }
        }

        shuffleDeck = array => {
                for (let i = array.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;

        } return array;}

        displayCards = (array) => {
                let res = '';
                for (let i = 0; i < array.length; i++) {
                        res += " " + array[i].name;
                }
                // console.log(res);
                return res;
        }
        game = (array) => {
                const odd=[];
                const even=[];
                for (let i = 0; i < array.length ; i++) {
                        if(i%2===0) {even.push(array[i]);
                        this.firstPlayer.push(array[i]);}
                        else {odd.push(array[i]);
                        this.secondPlayer.push(array[i]);}
                }

                if(odd.length===even.length) {
                        for (let i = 0; i < odd.length; i++) {
                                if((odd[i]!==3&&even[i]!==15)||(odd[i]!==15&&even[i]!==3)){
                                if(odd[i].value>even[i].value) {this.odd++;}
                                if(odd[i].value<even[i].value) {this.even++};
                                if(odd[i].value===even[i].value){this.odd+=0.5;
                                        this.even +=0.5;}}
                                else {if(odd[i].value<even[i].value) {this.odd++;}
                                        if(odd[i].value>even[i].value) {this.even++};}

                        }

                }
                else console.log("Херня с длинной массива odd и even"+ even.length + odd.length);
        }

        render() {
                return (
                    <div>
                    <div className='row text-center justify-content-between container-fluid'>


                            {/*<div className='col-4'>{this.displayCards(this.shuffleDeck(this.state.fullDeck))}</div>*/}
                            {this.game(this.shuffleDeck(this.state.fullDeck))}
                            <div className='col-3 '>{this.displayCards(this.firstPlayer)}</div>
                            <div className='col-6'><span className='text-center'>firstPlayer: `{this.even}`</span>
                                    <span className='text-center'>secondPlayer: `{this.odd}`</span></div>
                            <div className='col-3'>{this.displayCards(this.secondPlayer)}</div>


                    </div>
                            <div className=''><button className='btn-light '>Want to click</button></div>
                </div>

                );
        }
}
export default Start;