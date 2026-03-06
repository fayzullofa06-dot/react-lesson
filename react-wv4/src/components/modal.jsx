import React from 'react'
import "./Modal.css"
function modal({children,closeBtn}) {
console.log(children)
    return (
    <div className='modal-backdrop'>
      <div className='modal'>
       {children}
       <button onClick={closeBtn}>Close</button>
      </div>
    </div>
  )
}

export default modal
