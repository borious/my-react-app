import React from 'react';


//this is like if statement with ? : symbols
// we can use the const and an arrow function instead of the regular function
// our component receives an object of all the props that we are passing from the App.js 
// we are using destructured objects with the {} otherwise we should use prop.name or prop.numberOfMessages

export const Greeting = ({name, numberOfMessages}) => {
    {/* we are checking if the prop name is defined in the App.js Greeting component  */}
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

//returning null will not trigger the componet to show up on the web site, but if we return undefined it will pop up an error message




// --------------------------------------------------------------------------------------
// // if we use prop with some level of destructured objects
// export const Greeting = (prop) => {
//   let {name, numberOfMessages} = prop;
//     let isMorning = (new Date()).getHours() <12;
//     let greetingHeader = isMorning 
//     ? <h3>Good Morning {name}</h3>
//     : <h3>Good Evening {name}</h3>
//     return (
//         <>
//        {greetingHeader}
//       <p>You have {numberOfMessages} messages</p>
//       </>
//       )
// } 

// --------------------------------------------------------------------------------------
// // if we use prop instead of destructured objects
// export const Greeting = (prop) => {
//     let isMorning = (new Date()).getHours() <12;
//     let greetingHeader = isMorning 
//     ? <h3>Good Morning {prop.name}</h3>
//     : <h3>Good Evening {prop.name}</h3>
//     return (
//         <>
//        {greetingHeader}
//       <p>You have {prop.numberOfMessages} messages</p>
//       </>
//       )
// } 

// --------------------------------------------------------------------------------------
// more readable function 
// export function Greeting (){
//     let isMorning = (new Date()).getHours() <12;
//     let greetingHeader = isMorning 
//     ? <h3>Good Morning</h3>
//     : <h3>Good Evening</h3>
//     return (
//         <>
//        {greetingHeader}
//       <p>You have 5 messages</p>
//       </>
//       )
// } 


// --------------------------------------------------------------------------------------
// // this is the version with only <></> without <React.Fragment>
// export function Greeting (){
//     let isMorning = (new Date()).getHours() <12;
//     return isMorning 
//     ? (
//     <>
//         <h3>Good Morning</h3>
//         <p>You have 5 messages</p>
//         </>
//     )
        
//     :(
//         <>
//         <h3>Goood Evening</h3>     
//         <p>You have 9 messages</p>
//         </>
//         ) 
// } ;


// --------------------------------------------------------------------------------------
// this is a variation ussing <React.Fragment> to enable more than one hirarchy
// export function Greeting (){
//     let isMorning = (new Date()).getHours() <12;
//     return isMorning 
//     ? (
//         <React.Fragment>
//         <h3>Good Morning</h3>
//         <p>You have 5 messages</p>
//         </React.Fragment>
//     )
        
//     :(
//         <React.Fragment>
//         <h3>Goood Evening</h3>     
//         <p>You have 6 messages</p>
//         </React.Fragment>
//         ) 
// }

// --------------------------------------------------------------------------------------
// // this is Variant with <div> 
// export function Greeting (){
//     let isMorning = (new Date()).getHours() <12;
//     return isMorning 
//     ? (
//         <div>
//         <h3>Good Morning</h3>
//         <p>You have 5 messages</p>
//         </div>
//     )  
//     :(
//         <div>
//         <h3>Goood Evening</h3>;     
//         <p>You have 6 messages</p>
//         </div>
//         ) 
// }

