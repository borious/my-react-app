import React, { useEffect } from "react";
import { Navigate, useNavigate} from 'react-router-dom';

export const ProtectedPage = () => {
 const isAuthed = false;            //this is hard coded usually we wil have to authenticate before we can access this protected page

 const history = useNavigate();

 useEffect(()=>{
     if(!isAuthed){
        history('/');       //useNavigate hook that we use for navigating programatically if we are not authenticated
     }
 });

 return ( 
      <h1>Only authed users can see this protected page</h1>
  );


}

/*
we can use this code using only Navigate

return isAuthed
?(
 <h1>Only authed users can see this protected page</h1>
  )
:(
    <Navigate to='/'/>
)
*/