import * as React from 'react';
import Buttons from './Buttons';
import Result from './Result';

import style from './Calculator.module.css'
import { useState } from 'react';

export default function Calculator (){
const [equation, setEquation]=useState("")

function handleEquation(button: string){

    switch(button){
        case "AC":
            setEquation("");
            break;

        case "=":
            try{
                setEquation(eval(equation));
            }   catch(e) {
                setEquation("Error");
            } 
            break;

            default:
                if(equation==="Error"){
                    setEquation(button);
                } else {
                    setEquation(equation+button)
                }
                break;
    }
}
    return(
        <>
        <div>

            <Result value={equation}/>
            <Buttons handleClick={handleEquation}/>
        </div>
        </>
    )
}