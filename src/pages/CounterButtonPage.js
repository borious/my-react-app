import React from 'react';
import { useState } from 'react';
import { useParams, useLocation} from 'react-router-dom';
import { parse, stringify } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage } from '../CongratulationsMessage';



export const CounterButtonPage =()=> {

  // const { name } = useParams();            //using this hook useParam we can specify name in the url - in App.js we put this /:name <Route path="counter/:name"/>

  const location = useLocation();             //this is a query hook we can use when type in the url question mark ? 
  let startingValue=parse(location.search).startingValue;   //this parse will create an object from the query hook location.search
 
  if (startingValue === undefined) {
    startingValue=0;
  };


  const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue));    //have to change the startingValue to number useing Number() contructor because parse only uses string
  const increment = () => setNumberOfClicks(numberOfClicks+1);
    

  const [hideMessage,setHideMessage] = useState(false);

  return (
      <>
      <h1> The Counter Button Page</h1>
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