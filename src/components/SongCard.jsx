import { Avatar, Paper } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import React, { useState } from 'react';

function SongCard() {
    const [status, setStatus] = useState(true);
    return (
        <div>
            <Paper elevation={1} style={{ height: 62, padding: 5 }} className='hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out hover:bg-gray-100 flex items-center gap-2'>
                <p className='text-[12px] font-semibold text-slate-700'>01</p>

                <Avatar sizes='small' variant='rounded' src='https://i.scdn.co/image/ab67616d00001e02e2e352d89826aef6dbd5ff8f'></Avatar>

                <p className='text-[13px] font-semibold text-slate-800'>Sunflower</p>
                <p className='text-[11px] ml-10 font-semibold text-slate-400'>Post Mealone</p>
                <p className='text-[11px] ml-10 font-semibold text-slate-400'>3:41</p>

                <div className='text-slate-600 ml-10' onClick={() => setStatus(prev => !prev)}>

                    {status ? <PlayCircleOutlineIcon fontSize='small'/> : <PauseCircleOutlineIcon fontSize='small'/>}

                </div>
            </Paper>
        </div>
    )
}

export default SongCard
