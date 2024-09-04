
import './App.css';
import Navbar from './components/Navbar.js';
import Text from './components/Textform.js';
// import About from './components/About.js';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
function App() {
  document.title="Textutils -home";
  return (
    <>
    {/* <BrowserRouter> */}
  
    <Navbar  title ="TextUtils App" abouttext="About Textutils"/>
    {/* <Routes>
    <Route path='/About' element= {<About/>}/> */}
    {/* <Route path='/' element= {    */}
      {/* container is a bootstrap div wih style applied  */}
      <div className="container"><Text heading ="Enter text to analyze "title="Enter your text"  content ="enter here...."/> 
   </div>
    
    
    {/* </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
