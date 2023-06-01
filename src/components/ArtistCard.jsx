import React from 'react'

function ArtistCard() {
  return (
    <div className='space-y-3 w-[180px]'>
      {/* Image div */}
      <div className='rounded-lg w-[80%] hover:cursor-pointer bg-transparent'>
        <img className='object-contain rounded-lg hover:shadow-xl hover:scale-105 md:hover:transition-transform  duration-300 ease-in-out ' src="https://is2-ssl.mzstatic.com/image/thumb/Music122/v4/d9/5d/ab/d95dabba-1407-e018-4322-1b81f3541d9f/21UM1IM14479.rgb.jpg/400x400cc.jpg" alt="coverart" />
      </div>

      {/* Album name and Artist name  div*/}
      <div className='space-y-1'>
        <h1 className='text-[12px] font-bold whitespace-nowrap overflow-hidden text-ellipsis'>Miss Independent</h1>
        <p className='text-[11px] font-semibold text-slate-500 whitespace-nowrap overflow-hidden text-ellipsis'>Ne-Yo</p>
      </div>

    </div>
  )
}

export default ArtistCard
