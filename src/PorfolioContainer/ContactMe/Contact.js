import React from 'react'
import './Contact.css'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9.%+-]+@[a-z0-9+-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
    if(regEx.test(email)){
      setMessage("Email is Valid");
    } else if(!regEx.test(email) && email !== ""){
      setMessage("Email is Not Valid, please check it again");
    } else{
      setMessage("");
    }

  };


  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='parent'>
      <div className='ContactForm'>
        <h1>Contact Me</h1>
        <form action="https://formsubmit.co/a1f8af2004d3e767f5eeb377bc0a6c61" method="POST">
        <input type="hidden" name="_captcha" value="false" />
        <input type='mail' name='email' placeholder='Type your Mail' value={email} onChange={handleOnChange}/>
        <input type='text' name='Text' placeholder='Type text'/>
        <button type='submit' onClick={emailValidation}>Send</button>
        </form>
        {message}
      </div>
    </div>
  )
}
