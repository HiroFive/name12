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
    question: 'Ти часто дивишся в очі своєму спів розмовнику(подумай добре)?',
    answers1: 'Я завжди дивлюсь в очі ',
    scores_a1: 0,
    answers2: 'Ні я боюсь дивитись в очі',
    scores_a2: 0.5,
    answers3: 'Хз ніколи про це не думав і зараз не буду ',
    scores_a3: 0.5
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
    question: 'В тебе є найкращий друг?',
    answers1: 'Так він мені як брат',
    scores_a1: 0.5,
    answers2: 'В мене багато друзів важко виділити когось конкретного',
    scores_a2: 0,
    answers3: 'В мене мало друзів тому я дружу з дівчатами',
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
    question: 'В чоловічій компанії ви стараєтесь бути?',
    answers1: 'Лідером',
    scores_a1: 0.5,
    answers2: 'Другом ',
    scores_a2: 0,
    answers3: 'Подружкою лідера',
    scores_a3: 1
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
    question: 'Чи бували випадки в вашому житті коли ви дивились фільми для дорослих з друзями?',
    answers1: 'Так бувало пару раз',
    scores_a1: 0.5,
    answers2: 'Так цікавіше ',
    scores_a2: 1,
    answers3: 'Це в загалі якось дивне запитання, хто так робить',
    scores_a3: 0
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