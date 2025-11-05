import React from "react"
import { Link } from "react-router-dom"
import './Gallery.css'


const Gallery=(props)=>{

    const image=[
        {
            id: 1,
            src: "/images/img-1.jpg",
            title: "SOFTWARE ENGINEER",
        },
          {
            id: 2,
            src: "/images/img-2.jpg",
            title: "UX & UI DESIGNER",
        },
          {
            id: 3,
            src: "/images/img-3.jpg",
            title: "GRAPHICS DESIGNER",
        },  {
            id: 4,
            src: "/images/img-4.jpg",
            title: "PHOTOGRAPHER",
            
        },  {
            id: 5,
            src: "/images/img-5.jpg",
            title: "SONG WRITER",
        },  {
            id: 6,
            src: "/images/img-6.jpg",
            title: "ARTISTS",
        },
    ]


    return(
        <div className="Image-containers">
          <h1>THE BEST MEMORIES ARE THE MOMENTS CAPTURED ✅</h1>
            <div className="image-wrapper">
                {image.map((imag)=>
                    <div key={imag.id} className="imageBox">
                        <img  src={imag.src}/>
                        <p>{imag.title}</p>
                    </div>
                )}     
            </div>
            <p className="songWritter">I AM ALSO A MUSIC PRODUCER</p>
        </div>
    )
}

export default Gallery