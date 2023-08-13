import React, { useState } from 'react'

const About = (props) => {
const [head,setHead]=useState("Secondary School")
const [headval,setHeadval]=useState(
  {
  aSchool:"Aarohi Modal Sr. Sec. School, Hasanpur(Jind)",
  aMarks:92.4,
  aSession:"2017-2018"
}
)


const handleData1 =(e)=>{

  e.preventDefault()
setHead("Secondary School")
setHeadval({
  
  aSchool:"Aarohi Modal Sr. Sec. School, Hasanpur(Jind)",
  aMarks:92.4,
  aSession:"2017-2018"

})
document.querySelector(".about_nav .la").classList.add("active")
document.querySelector(".about_nav .lz").classList.remove("active")
document.querySelector(".about_nav .lzz").classList.remove("active")
document.querySelector(".about_nav .lx").classList.remove("active")
}


const handleData2 =(e)=>{
  e.preventDefault()
setHead("Sr. Secondary School")
setHeadval({
  
      aSchool:"Aarohi Modal Sr. Sec. School, Hasanpur(Jind)",
      aMarks:93.6,
     aSession:"2019-2020"
    
})
document.querySelector(".about_nav .la").classList.remove("active")
document.querySelector(".about_nav .lz").classList.add("active")
document.querySelector(".about_nav .lzz").classList.remove("active")
document.querySelector(".about_nav .lx").classList.remove("active")
}


const handleData3 =(e)=>{
  e.preventDefault()
setHead("Under Graduation")
setHeadval({
  
  aSchool:"Pt. NRS Govt. College, Rohtak",
    aMarks:78,
   aSession:"2020-2023",
   course:"BCA"

})
document.querySelector(".about_nav .la").classList.remove("active")
document.querySelector(".about_nav .lz").classList.remove("active")
document.querySelector(".about_nav .lzz").classList.add("active")
document.querySelector(".about_nav .lx").classList.remove("active")

}

const handleData4 =(e)=>{
  e.preventDefault()
setHead("Post Graduation")
setHeadval({
  
  aSchool:"MDU, Rohtak",
  aMarks:"currently preparing for it...",
 aSession:"2023-2025",
 course:"MCA"

})
document.querySelector(".about_nav .la").classList.remove("active")
document.querySelector(".about_nav .lz").classList.remove("active")
document.querySelector(".about_nav .lzz").classList.remove("active")
document.querySelector(".about_nav .lx").classList.add("active")

}
  return (
    <div className='about_page' style={{marginTop:props.margin,height:props.height}}>


                <div className="about_logo">
                  
                  <h1>{head}...</h1>
                </div>

              <div className="about_sec">
                <h1>About Me...</h1>
                <div className="sec_content">
                  <h4>{headval.aSchool==="Aarohi Modal Sr. Sec. School, Hasanpur(Jind)"?"School" : "College"}-{headval.aSchool}</h4>
                 { headval.aSchool==="Aarohi Modal Sr. Sec. School, Hasanpur(Jind)"?"" : <h4>Course-{headval.course}</h4>}
                  <h4>Marks Percentage-{headval.aMarks}</h4>
                  <h4>Session-{headval.aSession}</h4>
                </div>
              </div>

            <div className="about_nav">
              <ul>
                <li className='la active'><a href="/" onClick={handleData1}>Secondary School</a></li>
                <li className='lz'><a href="/" onClick={handleData2}>Sr. Secondary School</a></li>
                <li className='lzz'><a href="/" onClick={handleData3}>Under Graduation</a></li>
                <li className='lx'><a href="/" onClick={handleData4}>Post Graduation</a></li>
              </ul>
            </div>

    
    </div>
  )
}

export default About
