import React from 'react'
import "./home.css"
import introvideo from "../assets/videos/vid8recursion.mp4"
const Lecture8 = () => {
  return (

    <section className='home'> 
    
    <div className="container">

                    <div className='container2'>

                    <video
                    autoPlay={true}
                    controls 
                    controlsList='nodownload nofullscreen noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                    src={introvideo}

                    >

                    </video>

                    </div>

    </div>
    
    </section>


  )
}

export default Lecture8
