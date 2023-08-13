import React, { useEffect } from 'react'
import { useState } from 'react'
import {  Outlet } from 'react-router-dom'

const Navbar = (props) => {

  useEffect(()=>{
const activpage = window.location.pathname;
// console.log( activpage)
document.querySelectorAll(".nav_ul a").forEach((link)=>{
  
 if (link.href.includes(`${activpage}`)){
  
  link.classList.add("active")
   
  }
})
  },[])
  const [menu, setMenu] = useState(false)
  return (
  <>
    <div className="ham_menu">

          <div className='nav'>
              <div className="logo">
                  <h2>Goru2k18</h2>
              </div>
            <ul className="nav_ul">
              <li  className="la" ><a href="/">HOME</a></li>
              <li  className="lz"><a href="/about">ABOUT</a></li>
              <li  className="lzz"><a href="/services">SKILLS</a></li>
              <li  className="lx"><a href="/project">PROJECTS</a></li>
              <li  className="lxx"><a href="/contact">CONTACT ME</a></li>
            </ul>
          </div>
                    <div className="hamburger"><img src="./icons/menu.png" alt="" onClick={()=>setMenu(!menu )} />
                    <ul className="nav_tohide" style={{display:menu ? "flex" : "none"}}>
                        <li ><a href="/" onClick={()=>setMenu(!menu )}>HOME</a></li>
                        <li ><a href="/about" onClick={()=>setMenu(!menu )}>ABOUT</a></li>
                        <li ><a href="/services" onClick={()=>setMenu(!menu )}>SERVICES</a></li>
                        <li ><a href="/project" onClick={()=>setMenu(!menu )}>PROJECTS</a></li>
                        <li ><a href="/contact" onClick={()=>setMenu(!menu )}>CONTACT ME</a></li>
                      </ul>
                    </div>
    </div>
<Outlet/>
    </>
  )
}

export default Navbar
