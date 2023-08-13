import React from 'react'
import Social from './Social';
import About from './About';
import Langm from './Langm';
import Project from './Project';
import Contact from './Contact';

const Home = (props) => {
  
  return (
    
  <>
    <div className='homepage'  >

      <div className="hometext">
      <h1>Hi There,<br />I'm Gourav <span>Panchal</span></h1>
      <h4>I Am a Web Developer</h4>
      <a className="NavLink"href="/contact">Contact me</a>

        
      </div>
      <div className="homepic">
        <div className="pic">
          <img src="./icons/goru.png" alt="" />
        </div>
      </div>
    </div>
    <Social/>
    <About/>
    <Langm/>
    <Project/>
    <Contact/>
    </>
  )
}

export default Home
