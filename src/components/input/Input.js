import React from 'react';
import inp from './Input.module.css';

const Input = () => (
        <div className={inp.input_sms}>
            <input
                className={inp.input}
                type="text"
                placeholder='Сообщение'

                />
            <button className={inp.button}>ok</button>
        </div>
);

export default Input;
