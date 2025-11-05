import App from "../../App"
import Gallery from "../Gallery"
import HeroSection from "../HeroSection"
import  "../HeroSection.css"
import Footer from "./Footer"






export default function Homepage(){
    return(
        <div>
          <HeroSection/>
          <Gallery/>
          <Footer/>
        </div>
    )
}