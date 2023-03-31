import React from 'react'
import "./home.css"
import introvideo from "../assets/videos/vid1.mp4"
const Lecture1 = () => {
  return (

    <section className='home' onLoad={"lecture1"}> 
    
    <div className="container">

                    <div className='container2'>

                    <video
                    autoPlay={true}
                    controls 
                    controlsList='nodownload  noremoteplayback'
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

export default Lecture1
