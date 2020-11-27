import { getElementError, render } from "@testing-library/react";
import React, { Component, useState } from "react";
import './App.css';
import Background_Efect from './Background_Quotes';
import { CSSTransition } from 'react-transition-group';
import Form from "./Components/Form";


class Hello extends Component {
    state = {
        isActive: false
    };
    handleShow = () => {
        this.setState({
            isActive: true
        });
    };
    handleHide = () => {
        this.setState({
            isActive: false
        });
    };
    render() {
        if (this.state.isActive) {
            return (
                <div>
                    <Form />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Background_Efect />
                    <div className='box_center'>
                        <div className='card_block'>
                            <h1 className='Test_title'>Вітаю тебе на тесті</h1>
                            <h3 className='Small_description'>Нажмеш кнопку коли будеш готовий</h3>
                            <button className='Start_button text_selection_disable' onClick={this.handleShow}>Поїхали</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Hello;