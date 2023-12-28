import{BrowserRouter as Router}from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Rotes from './Rotes';
import { useEffect } from "react";
import { fetchAllQuestions } from "./actions/question";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from './actions/Users'
function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(fetchAllQuestions())
     dispatch(fetchAllUsers())
  },[dispatch])
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Rotes/>
      
      </Router>
    
    </div>
  );
}

export default App;
