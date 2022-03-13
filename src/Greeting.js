import React from 'react';

export const Greeting = ({name, numberOfMessages}) => {
    if(!name) return null;

    let isMorning = (new Date()).getHours() <12;
    let greetingHeader = isMorning 
    ? <h3>Good Morning {name}</h3>
    : <h3>Good Evening {name}</h3>
    return (
      <>
       {greetingHeader}
      {/* we use {} to write javascript code inside the jsx if numberOfMessages are 0 it will not show this message on the web site */}
       { numberOfMessages === 0
        ? null
        :<p>You have {numberOfMessages} messages</p> 
       }   
      </>
      )
} 

