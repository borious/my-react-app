import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CounterButton } from './CounterButton';
import { CongratulationsMessage } from './CongratulationsMessage';


const people = [
  {
    name:"Boris",
    age:31,
    hairColor:"grey"
  },{
    name:"Adi",
    age:32,
    hairColor:"brown"
  },{
    name:"Vasil",
    age:29,
    hairColor:"yellow"
  }
]

// const displayOnClick = () => (
//   alert("Hello2!") 
// )


function App() {
  
  let adjective = "awesome";
  let url = 'https://reactjs.org';


  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const increment = () => setNumberOfClicks(numberOfClicks+1);

  const [hideMessage,setHideMessage] = useState(false);

  return (
    <div className="App">
      <header className="App-header">

      {
        hideMessage
        ? null
        :<CongratulationsMessage 
        onHide={()=>setHideMessage(true)}
        numberOfClicks={numberOfClicks} 
        threshold={10}/>
      }
      
      <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks}/>
      
      <p style={{color:'red', fontSize: '96px'}}>Big Red Text</p>
      <Greeting name="Boris" numberOfMessages={11}/>  
               
       {/* we are providing props to our component Greeting, the number of messages is in {} because it is not a string */} 
       {/* to provide objects as props we can do person={{firstName:"Kiril", age:15 }} */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <PeopleList people={people} />

        {/* we can use function that is declared somewhere else  and it will look something like this -  onClick {displayOnClick} */}

        <button onClick={()=>alert("Hello!")}>Click Here!</button>
        <p>
          To do something {adjective} edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
