

import React from 'react'
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  const SidebarDiv ={
    textAlign:"center",
    TextTransform:"uppercase"
  }
    
  return (
    <>
    <div className="col-lg-12 col-md-12">
 <div className="d-flex flex-column flex-shrink-0 sidebar  text-dark bg-dark  mx-0" style={{maxWidth:'400px',width:'100%'}} >
    
    <ul className="nav  flex-column mb-auto" style={SidebarDiv}>
      <li className="nav-items">
        <NavLink to="/" className="nav-link text-white activeclass" aria-current="page" style={{borderBottom:"1px solid #ccc"}}>
         Footware
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink to="/shoes" className="nav-link text-white activeclass" style={{borderBottom:"1px solid #464646"}}>
         shoes
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink to="/fashion" className="nav-link text-white activeclass" style={{borderBottom:"1px solid #464646"}}>
          Fashion
        </NavLink>
      </li>
      <li className="nav-items">
        <NavLink to="/jewellery" className="nav-link text-white activeclass" style={{borderBottom:"1px solid #464646"}}>
         JEWellery
        </NavLink>
      </li>
      <li className="nav-items">
      <NavLink to="/health-and-beauty" className="nav-link text-white activeclass" style={{borderBottom:"1px solid #464646"}}>
        Health and Beauty
        </NavLink>
      </li>

    </ul>
</div>
</div>
    </>
  )
}

export default Sidebar