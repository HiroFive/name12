import React from 'react';
import Question from './Question';
import './Form.css'


const result_description = [
    'Тепер можеш росказати батькам що не гей',
    'Ви звичайне хлопець який з здоровими інтересами до жінок. Але ти блін для чогось проходиш цей тест!?',
    'Ти гетеросексуал, але якщо ти часто шукаєш такі тест… тоді в тебе проблеми друже но не з орієнтацією.',
    'Тут можна тільки побажати щастя в майбутньому… ',
    'Вітаю ти гей',
    'Вітаю тебе в нашому клубі друже!!!!',
    'Хухухух…. не повезло… Що сказати можеш  попробуй ще раз… *Але це тобі навряд допоможе*',
    'Ах то був ти, гівно з колонкою….!!! Я тебе найду..!!! Тепер ходи озирайся….!!!!'
]
const Finish_screen = ({ array, length1 }) => {

    function calculete_score() {
        let score = 0;
        for (var i = 0; i < length1; i++) {
            score += +array[i]; // or parseInt
        }
        return score;
    }
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let result = 'Гетеросексуал', score = calculete_score();
    function show() {
        if (score >= 5.5 && score < 58) {
            result = 'Гей';
        }
        else if (score >= 58) {
            result = 'Чмо з кологков';
        }
        // console.log(result_description.length);
        // console.log(score);
        // console.log(array);
        return result;
    }
    function small_description() {
        let array_item = getRandomInt(0, 2);
        if (show() == 'Гей') {
            array_item = (getRandomInt(3, 6));
        }
        else if (show() == 'Чмо з кологков') {
            array_item = 7;
        }
        // console.log(array_item);
        return result_description[array_item];
    }
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div>
            <div className='box'>
            <h2 className='Question'>Твій результат</h2>
            <p className='Answers_text small_description'>{small_description()}</p>
            <p className='Result_text'>{show()}</p>
            <button className='Next_question' onClick={refreshPage}>Ще раз!!!! </button>
        </div>
        </div>
        
    );
}
export default Finish_screen;