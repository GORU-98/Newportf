import React from 'react'
import Langdata from "./Langdata"

const Lang = (props) => {
  return (
    <>
    <div className='langm_page' style={{marginTop:props.margin}}>

      <div className="card_secA">
            <div className="card_lang">
              <h4>Fronted Developer</h4>
              <ul>
                <li>Maintain and improve website</li>
                <li>Design mobile-based features</li>
                <li>Optimize applications for maximum speed</li>
                <li>Use markup languages like HTML to create user-friendly web pages</li>
                
              </ul>
              </div>
            <div className="card_lang">
              <h4>Backend Developer</h4>
              <ul>
                <li>Write clean code to develop functional web applications</li>
                <li>Perform UI tests to optimize performance</li>
                <li>Build reusable code and libraries for future use</li>
                <li>Troubleshoot and debug applications</li>
              
              </ul>
            </div>
      </div>

      <div className="card_secB">
            <div className="card_lang">
              
              <h4>Full Stack Developer</h4>
              <ul>
                <li>Participating in the design and creation of scalable software</li>
                <li>Writing clean, functional code on the front- and back-end</li>
                <li>Testing and fixing bugs or other coding issues</li>
                <li>Design client-side and server-side architecture</li>
              
              </ul>
            </div>
            <div className="card_lang">
              <h4>Web Designer</h4>
              <ul>
                <li>Testing and improving the design of the website</li>
                <li>Establishing design guidelines, standards, and best practices</li>
                <li>Maintaining the appearance of websites by enforcing content standards</li>
                <li>Designing sample pages including colors and fonts</li>
              
              </ul>
            </div>
      </div>
     
      </div>


      <div className="lang_desc">
        <h1>Skills I own...</h1>
        {Langdata.map((lang)=>{
          return <div className="desc_card" key={lang.id}>
            <img src={lang.src} alt="" />
            <h4>{lang.title}</h4>
          </div>
        })}
      </div>
    </>
  )
}

export default Lang
