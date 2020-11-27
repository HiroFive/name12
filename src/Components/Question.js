import React, { Component } from 'react';
import Form from './Form';
import './Form.css';
import $ from  'jquery';
import Finish_screen from './Finish_screen'
import Falling_Confetti from  './Background_Finish_Animation'
import Background_Efect from '../Background_Quotes';

const testarray = new Array;
const info = [{
    question: 'Як ти себе відчуваєш в чоловічій компанії?',
    answers1: 'Впевнено',
    scores_a1: 0.5,
    answers2: 'Соромлюсь',
    scores_a2: 1,
    answers3: 'Дискомфортно',
    scores_a3: 1
},
{
    question: 'Часто оцінюєш чоловіків (по типу ого Міша такий накачений…)?',
    answers1: 'Інколи',
    scores_a1: 0,
    answers2: 'Часто',
    scores_a2: 0.5,
    answers3: 'Завжди ',
    scores_a3: 1
},
{
    question: 'Частіше спілкуєшся з хлопцями чи дівчатами?',
    answers1: 'В основному в мене друзі хлопці',
    scores_a1: 1,
    answers2: 'Я спілкуюсь тільки дівчатами (з ним так весело!!!)',
    scores_a2: 0.5,
    answers3: 'Я ніколи над цим не задумався ',
    scores_a3: 0.5
},
{
    question: 'Бували випадки в ващому житті коли ви думал от Олі повизло в неї є Діма?',
    answers1: 'Так були',
    scores_a1: 1,
    answers2: 'Звичайно',
    scores_a2: 1,
    answers3: 'Але ж Олі серйозно повизло!',
    scores_a3: 1
},
{
    question: 'Якщо твій друг розійдеться з дівчиною що ти зробиш…?',
    answers1: 'Скажу що в конфлікті винні дві сторони',
    scores_a1: 0,
    answers2: 'Підтримаю друга і розкритикую ой колишню ',
    scores_a2: 0.5,
    answers3: 'Скажу що я б з ним так не поступив',
    scores_a3: 1
},
{
    question: 'Підберав наряд щоб приємно здивувати Ориста?',
    answers1: 'Так',
    scores_a1: 1,
    answers2: 'Ну бувало пару раз',
    scores_a2: 1,
    answers3: 'Ні то немож сказати що приємно здивував',
    scores_a3: 0.5
},
{
    question: 'Чи цілували ви хлопця коли небудь?(П’яні, або ради приколу)',
    answers1: 'Один, або пару раз.. Ми були п’яні і то це все було на спір',
    scores_a1: 0.5,
    answers2: 'Ні',
    scores_a2: 0,
    answers3: 'Ні но я б попробував',
    scores_a3: 1
},
{
    question: 'Пхав пальчик у попу?',
    answers1: 'Так',
    scores_a1: 1,
    answers2: 'Ні але хотів попробувати',
    scores_a2: 1,
    answers3: 'Заставляла дівчина/хлопець ',
    scores_a3: 0.5
},
{
    question: 'В чоловічій компанії ви відігруєте роль:',
    answers1: 'Лідером',
    scores_a1: 0,
    answers2: 'Подружкою лідера',
    scores_a2: 1,
    answers3: 'Слухняного песика',
    scores_a3: 0.5
},
{
    question: 'Коли розмова заходить в непристойне русло…',
    answers1: 'Я стараюсь поміняти тему ',
    scores_a1: 1,
    answers2: 'Я ж уже дорослий чому мене це має хвилювати',
    scores_a2: 0.5,
    answers3: 'Я завжди стараюсь переводити тему в непристойне русло',
    scores_a3: 1
},
{
    question: 'Заказував білет на останній ряд в кіно щоб піти другом?',
    answers1: 'Ну блін на задніх місцях краща атмосфера',
    scores_a1: 0.5,
    answers2: 'Друг говорив що ззаді можна насолодитись фільмом',
    scores_a2: 0,
    answers3: 'Ні, але я попробую',
    scores_a3: 0.5
},
{
    question: 'Хотівби стати більше чим другом...?',
    answers1: 'Ні ',
    scores_a1: 0,
    answers2: 'Хотів, але не наважився',
    scores_a2: 0.5,
    answers3: 'Я уже іду шляхом зближення',
    scores_a3: 1
},
{
    question: 'Чи переглядав фільми порнаграфічного характеру разом з другом?',
    answers1: 'Пару раз в дитистві',
    scores_a1: 0,
    answers2: 'Ми це робим кожен четвер',
    scores_a2: 1,
    answers3: 'Ні я ввжаю, що це робити разом з другом... Дивно.',
    scores_a3: -0.5
},
{
    question: 'Чи слухаєте ви по вулиці з колонкою і слухаєте музику?',
    answers1: 'Ні я слухаю музику  в навушниках ',
    scores_a1: 0,
    answers2: 'Так а що тут такого',
    scores_a2: 58,
    answers3: 'Ні я використовую колонку тільки коли я розумію, що я нікому не буду заважати',
    scores_a3: 0
},

];


class Question extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onValueChange(event) {
        this.setState({
            selectedOption: event.target.value,
        });
    }

    formSubmit(event) {
        event.preventDefault();
        $('input[name=answers]').prop('checked', false);
        this.setState({ index: (this.state.index + 1) });
        testarray.push(this.state.selectedOption);
        this.setState({
            selectedOption: null,
        });
    }

    render() {
        const item = info[this.state.index];
        if (info[this.state.index] == info[info.length]) {
            return (
                <div>
                    <Falling_Confetti/>
                    <div className='form_box'>
                        <Finish_screen array={testarray} length1={testarray.length} />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <Background_Efect />
                   <div className='form_box'>
               <div className='box'>
                    <form onSubmit={this.formSubmit}>
                        <h1 className='Question'>{item.question}</h1>
                        <div className='Answer_box'>
                            <ul className='Answers'>
                                <li className='Answers_item text_selection_disable' >
                                    <input type='radio' name='answers' value={item.scores_a1} onClick={this.onValueChange} id='first_answer' />
                                    <label htmlFor='first_answer' className='Answers_text'>{item.answers1} </label>
                                </li>
                                <li className='Answers_item text_selection_disable'>
                                    <input type='radio' name='answers' value={item.scores_a2} id='second_answer' onClick={this.onValueChange} />
                                    <label htmlFor='second_answer' className='Answers_text'>{item.answers2}</label>
                                </li>
                                <li className='Answers_item text_selection_disable'>
                                    <input type='radio' name='answers' value={item.scores_a3} id='third_answer' onClick={this.onValueChange} />
                                    <label htmlFor='third_answer' className='Answers_text '> {item.answers3}</label>
                                </li>
                            </ul>
                        </div>
                        <button className='Next_question' type='submit' disabled={!this.state.selectedOption} >
                            Наступне
                    </button>
                        <h4 className='text_selection_disable counters_text'>{this.state.index + 1}/{info.length}</h4>
                    </form>
                </div>
            </div> 
                </div>
            
                );
        }
    }
}

export default Question;