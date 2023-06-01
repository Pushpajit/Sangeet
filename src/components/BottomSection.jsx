import React from 'react'
import Player from './Player'
import Queue from './Queue'

function BottomSection() {
  return (
    <div className='lg:flex gap-2'>
      {/* Player */}
      <Player />
      <Queue />
    </div>
  )
}

export default BottomSection
