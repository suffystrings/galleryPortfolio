import { Link } from "react-router-dom"
import React, {useState, useEffect} from "react"
import { Button } from "./Button";
import "./Navbar.css"


export default function Navbar(){

    const [click, setClick]= useState(false);
    const[button,setButton] =useState(true);

    const showButton= ()=>{
      if(window.innerWidth <= 960){
         setButton(false);
      }else{
         setButton(true);
      }
    };


    useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
    }, []);


    const handleClick = ()=> setClick(!click)
    const closedMobileMenu=()=> setClick(false);

    return(
       <>
        <nav className="navbar">
             <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closedMobileMenu}>
                    GSY <i className="fab fa-typo3" />
                </Link>
                <div className="menu-icon"  onClick={handleClick}>
                   <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ?"nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                     <Link to='/' className="nav-links" onClick={closedMobileMenu}>Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/service' className="nav-links" onClick={closedMobileMenu}>Services</Link>
                  </li>
                  <li className="nav-item">
                     <Link to='/product' className="nav-links" onClick={closedMobileMenu}>Products</Link>
                  </li>
                </ul>
               {button && <Button to="/login" buttonStyle={'btn--outline'}>Sign UP</Button> }
             </div>
        </nav>
       </>
    )
} 