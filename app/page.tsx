import React from 'react'
import Homepage from './components/Homepage'
import Video from './components/Video'

const page = () => {
  return (
    <div>
      <Homepage imagePath="/images/1.png" />
      <Video videoPath="/videos/1.mp4" />
      {/* <Homepage imagePath="/images/2.png" />
      <Homepage imagePath="/images/3.png" />
      <Video videoPath="/videos/2.mp4" />
      <Homepage imagePath="/images/4.png" />
      <Homepage imagePath="/images/5.png" /> */}
    </div>
  )
}

export default page