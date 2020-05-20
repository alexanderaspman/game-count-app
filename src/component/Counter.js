import React from "react"
import {useState} from 'react'
import {Switch} from './SwitchImgText' 
    
export const  Counter=()=> {

    const [count, setCount] = React.useState(0);


    return(<div>
        <h3 >{count}</h3>
        <span><button id="firstButton" onClick={()=>setCount(count+1)}>increment</button>
        <button id="secondButton" onClick={()=>setCount(count-1)}>decrement</button></span>
        <Switch counter={count} />
        </div>
    
    );
}