import React from "react"
import { Button } from "../Button"
import { Link } from "react-router-dom"
import './SignUp.css'



export default function SignUp(){
    return(
        <div className="signUp-container">
             <h1>Sign UP</h1>
            <form action="" className="form-wrapper">
                <div className="inputDiv">
                    <label htmlFor="" className="label-input">
                        First Name:   <input type="text" placeholder="" />
                    </label>
                    <label htmlFor="" className="label-input">
                        Middle Name:   <input type="text" placeholder="" />
                    </label>
                    <label htmlFor="" className="label-input">   
                        Last Name:     <input type="text" placeholder="" />
                    </label>
                </div>
                    <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >Submit<i className="far fa-play-circle"/></Button>
            
                <div className="link-class" >
                    <Link to = '/logIn'><p>Log In</p></Link>
                    <Link to = '/sign'><p>Register</p></Link>
               </div>
               
            </form>
        </div> 
    )
} 