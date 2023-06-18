import React, { useEffect, useState } from 'react'
import Queue from './Queue'
import Embed from './Embed'
import { useSelector } from 'react-redux';

function BottomSection() {
  return (
    <div className='lg:flex justify-between gap-2'>
      {/* Player */}
      {/* <Player /> */}
      <Embed/>
      {/* Mostly Played */}
      <Queue />
    </div>
  )
}

export default BottomSection
