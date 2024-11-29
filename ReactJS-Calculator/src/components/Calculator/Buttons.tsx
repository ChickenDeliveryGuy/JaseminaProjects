import React from 'react';
import style from './Calculator.module.css'
type Props = {
    handleClick: (button: string) => void;
};
    const buttons = [
        "(",
        ")",
        "C",
        "AC",
        "7",
        "8",
        "9",
        "/",
        "4",
        "5",
        "6",
        "*",
        "1",
        "2",
        "3",
        "-",
        ".",
        "0",
        "=",
        "+",
    ];

    export default function Buttons ({handleClick}: Props)
{
    return(
        <div className={style.buttons}>
        {buttons.map((button) => (
            <button onClick={() => handleClick(button)} key={button}>{button}</button>
        ))}
        </div>
    )
}