import React, { useState } from 'react';
const Collection_Quotes = () => {
    const [quotes, setQuotes] = useState([
        {
            text: 'Я гей?',
            id: 1
        },
        {
            text: 'Чому мені подобається Вася?',
            id: 2
        },
        {
            text: 'Як превірити себе?',
            id: 3
        },
        {
            text: 'Коли я біля Міші мені так добре!',
            id: 4
        },
        {
            text: 'Саша такий класний хлопець, але я вагаюсь....',
            id: 5
        },
        {
            text: 'Міша я так не можу!!!',
            id: 6
        },
        {
            text: 'Мені соромно зізнатися...',
            id: 7
        },
        {
            text: 'Андрій гей?',
            id: 8
        },
        {
            text: 'Я заплутався!',
            id: 9
        },
        {
            text: 'Що робити дальше?',
            id: 11
        },
        {
            text: 'Невже я...',
            id: 12
        },
        {
            text: 'Сашенька ти ювелір!!!!',
            id: 13
        },
        {
            text: 'Невже Рома мені подобається?',
            id: 14
        },
        {
            text: 'Невже Коля все уже знає?!',
            id: 15
        },
        {
            text: 'Ігор такий... накачений!',
            id: 16
        }
    ]);
    return (
        <ul className='box-area'>
            {quotes.map(quote => (
                <li>{quote.text}</li>
            ))}
        </ul>
    );
};

export default Collection_Quotes;