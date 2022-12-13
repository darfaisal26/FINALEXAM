import React,{useState} from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        // console.log("uppercasee was clicked" + text)
        let newTExt=text.toUpperCase();
       
        setText(newTExt)
    }
    const handleLoClick=()=>{
        // console.log("uppercasee was clicked" + text)
        let newTExt=text.toLowerCase();
        setText(newTExt);
    }
 

           
        const handleOnChange=(event)=>{
        // console.log(" On Change")
        setText(event.target.value);
    }
    const[text,setText]=useState('Enter The text');
  return (
    <>
    <div className="container">
   <h1>{props.heading}</h1>
      <div className="mb-3">
       
      <textarea
          className="form-control" value={text} onChange={handleOnChange}
          id="mybox"    rows="8"
        ></textarea>
      </div>
      <button  className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
      <button  className="btn btn-primary mx-2" onClick={handleLoClick}>convert to lowercase</button>
      {/* <button  className="btn btn-primary mx-2" onClick={handleSearch}>search here</button> */}
    </div>
    <div className="container my-3">
        <h1> summary</h1>
        <p> {text.split(" ").length} total words in my textarea and {text.length} characters</p>
    </div>
    </>
  );
}
