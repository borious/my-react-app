import React from 'react';
import { useState } from 'react'


// Usually more used forms are CONTROLLED FORMS

export const ControlledFormPage = () => {

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [favoriteColor, setFavoriteColor]=useState('');


    return(
 <>
    <form>
    <h3>Please enter your information</h3>
      <div>
        <input 
          type='text' 
          placeholder='Name'
          value={name}
          onChange={e=>setName(e.target.value)}/>
      </div>
    
      <div>
        <input 
          type='text' 
          placeholder='Email'
          value={email}
          onChange={e=>setEmail(e.target.value)}/>
     </div>
     <div>
        <input 
          type='text' 
          placeholder='Favorite Color'
          value={favoriteColor}
          onChange={e=>setFavoriteColor(e.target.value)}/>
     </div>
    </form>
    <button onClick={ e =>{
    alert(`
       Your name is ${name}
       Your email is ${email}
       Your favorite color is ${favoriteColor}
         `)
        e.preventDefault();       //this line is to prevent this event from bubbling up to higher components
        }}>Submit</button>

</>
    )


}