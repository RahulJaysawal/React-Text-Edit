import React, { useState } from 'react'



export default function TextForm(props) {
    
    const [text, setText] = useState("");

    const click1 = () => {
        // console.log('wqgv');
        let newtext1 = text.toUpperCase();
        setText(newtext1);
        props.showalert("Converted to UpperCase","success");
    }
    const click2 = () => {
        let newtext2 = text.toLowerCase();
        setText(newtext2);
        props.showalert("Converted to LowerCase","success");

    }
    const click3 = () => {
        let newtext3 = "";
        setText(newtext3);
    }
    const click4 = () => {
        var newtext4 = document.getElementById("textbox");
        newtext4.select();
        navigator.clipboard.writeText(newtext4.value);
        props.showalert("Text Copied to Clipboard","success");

    }
    const click5 = () => {
        var newtext4 = text.split(/[ ]+/);
      setText(newtext4.join(" "))
    }

    const change = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="textbox" className="form-label" ></label>
                    <textarea className="form-control" value={text} onChange={change} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="textbox" rows="3"></textarea>
                </div>
                <button className='btn btn-primary mx-3' onClick={click1}>
                    Convert to UpperCase
                </button>
                <button className='btn btn-primary mx-3' onClick={click2}>
                    Convert to LowerCase
                </button>
                <button className='btn btn-primary mx-3' onClick={click3}>
                    Clear Text
                </button>
                <button className='btn btn-primary mx-3' onClick={click4}>
                    Copy Text
                </button>
                <button className='btn btn-primary mx-3' onClick={click5}>
                    Remove Extra Space
                </button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words And {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the Textbox"}</p>
            </div>
        </>
    )
}
