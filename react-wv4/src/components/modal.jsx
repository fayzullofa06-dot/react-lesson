import React from 'react'
import "./Modal.css"
import ReactDom from 'react-dom'
function modal({children,closeBtn,isModeModal}) {
console.log(children)
    return  ReactDom.createPortal((
    <div className='modal-backdrop'>
      <div className='modal ' style={{
        border:'4px solid',
        borderColor:isModeModal?"yellow" :'red',
        textAlign:'center'
        }}>
       {children}
       <button  className="Modal-btn"onClick={closeBtn}>Close</button>
      </div>
    </div>
  ),document.body)
}

export default modal
