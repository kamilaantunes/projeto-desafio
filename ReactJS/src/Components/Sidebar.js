import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Sidebar.css';
import logo from '../logo.svg';

function Sidebar({children}){
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem = [
        {
            path: "/",
            name: "Home",
            icon: <i  className="bi-house"/>,
        },{
            path: "/lista",
            name: "Lista",
            icon: <i  className="bi-database"/>,
        }/*,{
            path: "/update",
            name: "Update",
            icon: <i class="bi bi-brush" />
        },*/
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="sidebar col-auto min-vh-100 bg-dark" style={{width: isOpen ? "200px" : "80px"}}>
                    <div className="top_section">
                        <h1 className="logo" style={{display: isOpen ? "block" : "none"}}> <img src={logo} style={{width: '5rem'}}/> </h1>
                        
                        <div className="bars" style={{marginLeft: isOpen ? "40px" : "0px"}}>
                            <i class="bi bi-list-nested" onClick={toggle} /> 
                        </div>
                    </div>
                    
                    <hr />

                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active" style={{textDecoration: "none"}}>
                                <div className="icon"> {item.icon} </div>
                                <div className="link_text" style={{display: isOpen ? "block" : "none"}}> {item.name} </div>
                            </NavLink>
                        ))
                    }

                </div>
                
                <main>{children}</main>
            
            </div>
        </div>
    )
}

export default Sidebar;