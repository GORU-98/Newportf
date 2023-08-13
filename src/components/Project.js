import React, { useState,useEffect } from 'react'
import ProjectImg from './ProjectImg'

const Project = (props) => {
  const[img,setImg]=useState("./all/1.png")

   useEffect(()=>{
    document.querySelectorAll(".slider_project img").forEach((link)=>{
      
      link.addEventListener("click",(()=>{
        setImg(link.getAttribute('src'))
      }))
     
    })
      },[])
  return (
   <div className="project_page" style={{marginTop:props.margin,height:props.height}}>


    <div className="full_view_project">
        <div className="p_txt">
                        <h1>My <br/> Projects...</h1>

                        <div className="git">

                              <div className="git_card">
                                  <img src="./icons/menu.png" alt="" />
                                  <h4>View this page live...</h4>
                              </div>

                        </div>

        </div>


                        <div className="p_content">
                        <img src={img} alt="" />
                        </div>
    </div>

                  <div className="slider_project">
                    {ProjectImg.map((src)=>{
                      return  <div className="card_project" key={src.id}> <img src={src.imgsrc} alt="" /></div>
                    })}
                  </div>


   </div>
  )
}

export default Project
