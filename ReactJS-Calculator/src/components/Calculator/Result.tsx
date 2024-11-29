import React from "react";
import style from './Calculator.module.css'

type Props = {
    value: string;
}

export default function Result({value}: Props){
return <input readOnly type="text" value={value} className={style.result}/>
}