import React from "react";
import { PeopleList } from "../PeopleList";

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
  ];

  export const PeopleListPage =()=>(

    <>
    <h1>The People List Page</h1>
    <PeopleList people={people} />
    </>
  )