import React from 'react'

const VideoCard = ({videoList}) => {
    console.log('Fetched Successfully')
    console.log(videoList)
  return (
    <div>
      <div className='w-40 h-40 shadow-lg m-3 p-3'>
        <div>{ <img alt='vidoes' src={videoList?.snippet?.thumbnails?.medium?.url}/> }</div>
    
      </div>
    </div>
  )
}

export default VideoCard
