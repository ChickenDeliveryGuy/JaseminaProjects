import React from "react";
import Buttons from "./buttons";

type Props = {
    text: string,
    handleClick: (value: string) => void 
}
export default function Button ({text, handleClick}: Props){
    return <button onClick={()=> handleClick(text)}>{text}</button>

}