import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { CounterButtonPage, HomePage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UncotrolledFormPage} from './pages';




import './App.css';




function App() {

  return (
    <div className="App">

    <Router>

       <div>
         <Link to="/" exact='true'>Go to Home Page</Link>
       </div>
       <div>
         <Link to="/counter">Go to Counter Page</Link>
       </div>
       <div>
         <Link to="/people-list">Go to People List Page</Link>
       </div>
       <div>
         <Link to="/controlled">Go to ControlledFormPage Page</Link>
       </div>
       <div>
         <Link to="/uncontrolled">Go to UncontrolledFormPage Page</Link>
       </div>

        <Routes>
          <Route path="*" element={<NotFoundPage/>}/>
          <Route path="/" exact element={<HomePage/>}/>
          <Route path="/counter" element={<CounterButtonPage/>} /> 
          <Route path="/people-list"  element={<PeopleListPage/>} />
          <Route path="/protected"  element={<ProtectedPage/>} />
          <Route path="/controlled"  element={<ControlledFormPage/>} />
          <Route path="/uncontrolled"  element={<UncotrolledFormPage/>} />
        </Routes>
     
      
      </Router>
    </div>
  );
}

export default App;
