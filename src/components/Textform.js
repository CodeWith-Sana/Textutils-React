import React ,{useState} from 'react'
import '../App.css';
// text is my variable where the inital value is  os useState('Enter text here)
//when update text settext will be updated vale of text var
 function Textform(props) {
  document.title = "Textutils -home";
    const handleReset=()=>{
        setText("")
        document.title="Textutils -clear text";
        
    }
    const handleUPText= () =>{
         let txt =  Text.toUpperCase();
         setText(txt);
         document.title="Textutils -uppercase";
        //  console.log("button was clicked.")
    }
    const handleONchange =(event) =>{
        setText(event.target.value)
        document.title="Textutils -Home";
        // console.log("hanlde on chnage")
    }
    const [Text, setText]= useState('Enter text here');
    // console.log(Text);
    const handleCopy= ()=>{
      var text = document.getElementById("mytext")
      text.select();
      navigator.clipboard.writeText(text.value);
      document.title="Textutils -copy";
    }
  return (
    <>
    <div>
      
        <h1>{props.heading}</h1>
  <div class="mb-3" >
    <label for="mytext" class="form-label">{props.title}</label>
    <textarea class="form-control" id="mytext" rows="5" value={Text} onChange={handleONchange} placeholder={props.content}></textarea>
    </div>
    <div className="container">
    <button class="btn btn-primary mx-2" onClick={handleUPText}>Convert to uppercse</button>
    <button  class="btn btn-primary mx-2" onClick={handleReset}>Clear Text</button>
    <button  class="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    
    </div>
    <div className="container my-3">
      <h1>Your Text Summary</h1>
      <p>{Text.split(" ").length}  words   and {Text.length} characters.</p>
      <p>{0.008 * Text.split(" ").length} minimum time to read Text</p>
      <h4>Preview</h4>
      <p>{Text}</p>
    </div>
    </>
  )
}
export default Textform;