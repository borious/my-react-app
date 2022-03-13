import { useEffect } from "react";
import React from "react";



export const CongratulationsMessage = ({numberOfClicks, threshold, onHide}) =>{

     useEffect(()=>{
          console.log('The component started')
          return ()=>console.log("The CongratulationsMessage component is unmaounted")  //returns a function after the component is removed from the DOM
     },[]) // [] is another argument of the useEffect function and inside we pass props for example [numbeOfClicks], so we can chose when this useEffect to run 

return numberOfClicks >= threshold 
     ?
       <>
         <h1>Congratulations You've reached the threshold of {threshold} clicks</h1>
          <button onClick={onHide}>Hide</button>
        </>
     : null

}