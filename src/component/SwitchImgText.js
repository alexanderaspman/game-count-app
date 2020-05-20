import React,{useState, useEffect} from 'react';
import Scream from './img/scream.jpg';
import Swaj from './img/swaj.jpg';
import {Counter} from './Counter'

 export const Switch=(prop)=>{

let status ;


     let text;
      let counter = Counter
     if(prop.counter === 7){
         
       let img = true
             text='BUUUUUUUU'
             return(<div>

                    {text}
                    {img}
                    <img id="2" src={Scream}/>
                    </div>)
            } else{
                
            text=<div>What will happend if you keep going</div>
            return(<div>
                
            {text}
            <img id="1" src={Swaj}/>
            </div>)
        }
    }
