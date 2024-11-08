import React from 'react'
import Highlights from './Highlights'
import { highlightsslides} from '../constants'
 
function VideoCarousel() {
  return (
    <>
        <div className='flex items-center'>
            {
                highlightsslides
            }

        </div>
    </>
  )
}

export default VideoCarousel