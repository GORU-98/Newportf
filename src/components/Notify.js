import React from 'react'

const Notify = (props) => {
    
    
    return (
      <>
    <div className={`alert ${props.show ? "activeDis" : "inactive"}`} >
      <div className="notify">
     {props.msg}                                                                        
      </div>
     
    </div>
    </>
  )
}

export default Notify
