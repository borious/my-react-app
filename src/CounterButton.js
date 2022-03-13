
import React from "react";


export const CounterButton = ({numberOfClicks, onIncrement}) => {


// // if we want to use this numberOfClicks only here and nowhere else we can leave this code herem BUT if we want to use it by other components we have to move it in App component
// const [numberOfClicks, setNumberOfClicks] = useState(0);

// // it is importat that we use this syntax setNumberOfClicks(numberOfClicks + 1), because this way we are setting the second element in our destructured array [numberOfClicks, setNumberOfClicks]
// const increment = () => setNumberOfClicks(numberOfClicks+1);


return (
  <>
   <p>You've clicked {numberOfClicks} times</p>
   <button onClick={onIncrement}>Click Here!</button>
  </>
)

}