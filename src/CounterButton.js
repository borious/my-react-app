
import React from "react";


export const CounterButton = ({numberOfClicks, onIncrement}) => {

return (
  <>
   <p>You've clicked {numberOfClicks} times</p>
   <button onClick={onIncrement}>Click Here!</button>
  </>
)

}