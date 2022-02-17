import React from 'react'
import styles from '../styles/Home.module.css'
import { useState } from "react";



const hmm = {
    textAlign: 'left',
    marginLeft: '1rem',
    width: '100%',
    marginRight: '2.5rem',
    marginTop: '.75rem',
    boxSizing: 'border-box',
    border: '0 solid #e2e8f0',
    
}
const [textarea, setTextarea] = useState(
    "Put in your 12 rercoveryy phrase"
  );
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }
function Modal ({ closeModal})  {
  return (
      
    <div className='modalBackground'>
        <div className='modalContainer'>
            <button onClick={() => closeModal(false)}>X</button>
            <div className='title'>
                <h1> Are you sure you want to continue</h1>
                <div className='body'>

                <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
                   
                    <div className='builder'></div>
                    <div className='footer'>
                        <button  onClick={() => closeModal(false)}> Cancel</button>
                        <button type="submit" name="button">
                            Continue</button>

                    </div>
                </div>
                
                      

            </div>

        </div>
        
    </div>
    
  )
}

export default Modal






function MyForm() {
    const [textarea, setTextarea] = useState(
      "The content of a textarea goes in the value attribute"
    );
  
    const handleChange = (event) => {
      setTextarea(event.target.value)
    }
  
    return (
      <form>
        <textarea value={textarea} onChange={handleChange} />
      </form>
    )
  }
  