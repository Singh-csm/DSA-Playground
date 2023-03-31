import React from 'react'
import "./home.css"
import introvideo from "../assets/videos/vid4ss.mp4"
const Lecture4 = () => {
  return (

    <section className='home'> 
    
    <div className="container">

                    <div className='container2'>

                    <video
                    autoPlay={false}
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

export default Lecture4
