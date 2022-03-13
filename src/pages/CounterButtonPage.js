import React from 'react';
import { useState } from 'react';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';

export const CounterButtonPage =()=> {
  
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks+1);

  const [hideMessage,setHideMessage] = useState(false);

  return (
      <>
      <h1>Counter Button Page</h1>
           {hideMessage
           ? null
           :<CongratulationsMessage 
           onHide={()=>setHideMessage(true)}
           numberOfClicks={numberOfClicks} 
           threshold={10}/>}

           <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
     </>
  );
    }