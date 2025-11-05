import { Button } from "./Button";
import App from "../App";
import "./Herosection.css"


export default function HeroSection(){
  
    return(
        <div className="hero-container">
           {/*  <video src="/vidoes/vidoe-2.mp4"  autoPlay loop muted/> */}
            <h1>GO GETTERS,ACTIVE MINDS</h1>
            <p>Never stop beliving in your self, the best time is now..!</p>
            <div className="hero-btn">
                <Button
                    className='btn'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                   to='/service'
                >GET-STARTED</Button>

                <Button
                    className='btn'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    to='/product'
                >TAKING OVER <i className="far fa-play-circle"/></Button>
            </div>
        </div>
    )
}