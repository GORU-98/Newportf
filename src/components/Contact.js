import React from 'react'
import { useState,useEffect } from 'react'
import Notify from './Notify';

const Contact = (props) => {
  
      const [mess,setMess] = useState({name:"",email:"",number:"",message:"",subject:""});

      const sendMessage = async (e)=>{
        const req = await fetch("https://progoru.onrender.com/contact",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(
               {...mess}
            )
        })
        
        const response = await req.json();
        setMsg(response)
        if(response.status===200){
          Hide(true)
          document.body.style.overflow="hidden"
        }else{
          Hide(false)
          document.body.style.overflow="scroll"
        }
        
         
        setMess({name:"",email:"",number:"",message:"",subject:""})

    }
    const [msg,setMsg] = useState({})
    const [show,Hide] = useState(false)

    useEffect(()=>{
setTimeout(() => {
  Hide(false)
  document.body.style.overflow="scroll"
}, 4000);
  },[show])

const handleMess =(e)=>{
    setMess({...mess,[e.target.name]:e.target.value})
}


  return (
    <>
    
  <div className="alertcomp" >
     <Notify msg={msg.message} show={show}/> 
  </div>
    <div className='contact_page' style={{opacity:`${show ? 0.1 : 1}`,marginTop:props.margin,height:props.height}}>

        {/* ist section */}
        <div className="contact_title">
            <h4>Contact Me</h4>
            <h1>I Want To Hear From You</h1>
            <p>Please fill out the form on this section to contact with me.I will give you a honourable reply regarding your query as early as possible.</p>
        </div>

      {/* 2nd section */}
        <div className="contact_form">


            <div className="c_form">
                <input type="text" name="name" id="name" value={mess.name} placeholder='Your Name' required onChange={handleMess} />
                <input type="email" name="email" id="email" value={mess.email} placeholder='Your Email' required onChange={handleMess} />
                <input type="number" name="number" id="number" value={mess.number}placeholder='Your Phone' required onChange={handleMess} />
                <input type="text" name="subject" id="subject" value={mess.subject}placeholder='Subject' required onChange={handleMess} />
                <input type="text" name="message" id="message" value={mess.message}placeholder='Write your message' required onChange={handleMess} />
                
            </div>

        </div>

        <button className='address_btn' disabled={!mess.name || !mess.email || !mess.message || !mess.number || !mess.subject} onClick={sendMessage}>Submit</button>
      
    </div>
    </>
  )
}

export default Contact
