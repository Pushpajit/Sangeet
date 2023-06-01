import React from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import SongCard from './SongCard';


function Queue() {
  return (
    <div className='w-[100%] space-y-3'>
      {/* Top section */}
      <div className='flex justify-between items-center gap-5'>
        <p className='font-bold text-base text-slate-700'>Mostly Played</p>

        <div className='flex gap-2 items-center text-[12px] text-slate-400 font-semibold'>
          <p className='hover:cursor-pointer'>55 songs on the list</p>
          <ArrowCircleDownIcon className='hover:cursor-pointer' fontSize='small'/>
        </div>

      </div>

      {/* Bottom section MUI papers */}
      <div className='h-[282px] overflow-y-scroll space-y-2 p-1' style={{"scrollbarWidth" : "thin", "scrollbarColor": "transparent transparent"}}>
        {[1,2,3,4,5,6].map(() => <SongCard />)}
      </div>
    </div>
  )
}

export default Queue
