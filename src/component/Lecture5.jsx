import React from 'react'
import "./home.css"
import introvideo from "../assets/videos/vid5ms.mp4"
const Lecture5 = () => {
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

export default Lecture5
