import { Link } from "react-router-dom"
import { Button } from "./Button"

const LogIn =()=>{
    return(
        <div className="signUp-container">
            <h1>Log In</h1>
            <form action="" className="form-wrapper">
                <label htmlFor="" className="label-input">
                    <input type="text" placeholder="@Email" />
                </label>
                  <label htmlFor="" className="label-input">
                    <input type="password" placeholder="password" />
                </label>
               
                <div className="divBtn">
                    <p>Forgoten password</p>
                    <Button>Sign In</Button>
                </div>
                <div className="link-class">
                    <Link to ='/logIn'><p>Log In</p></Link>
                    <Link to ='/sign'><p>Register</p></Link>
              </div>
            </form>
        </div>
    )
}

export default LogIn