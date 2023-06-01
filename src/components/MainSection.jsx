import React from 'react'
import TopHeadline from './TopHeadline'
import BottomSection from './BottomSection'

function MainSection() {
  return (
    <div className='md:ml-8 ml-2 mr-2 mt-7 md:w-[850px] w-[400px] space-y-5'>
      <TopHeadline/>
      <BottomSection />
    </div>
  )
}

export default MainSection
