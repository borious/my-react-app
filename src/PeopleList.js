import React from "react";
import { PeopleListItem } from "./PeopleListItem";
import styled from 'styled-components';


// this is a styled component that changes the div as css style (first we have installed npm install styled-components and imported them here)
// we are using backticks `` to define the css style inside
const Wrapper = styled.div`
   border: 2px solid white;
   padding: 32px;
`;

export const PeopleList = ({ people }) => 
 (
     <Wrapper>
      {people.map(person => <PeopleListItem person={person} key={person.name}/>)}
    </Wrapper>
  );





////this is a component that we first wrote and the above one is nested componet as the practice is usually
// export const PeopleList = ({ people }) => {
//     return (
//       <>
//         {people.map((person) => (
//           <div>
//             <h3>{person.name}</h3>
//             <p>{person.age}</p>
//             <p>{person.hairColor}</p>
//           </div>
//         ))}
//       </>
//     );
//   };
  