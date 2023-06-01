import React from 'react';
import { FaHome, FaFolderOpen } from 'react-icons/fa';
import { BiGridAlt } from 'react-icons/bi';
import { BsFillPersonFill, BsFillCameraVideoFill, BsFillFileEarmarkMusicFill } from 'react-icons/bs';
import { MdTimer } from 'react-icons/md';

function Sidebar() {
    return (
        <section className='w-[19%] p-5  text-xs font-semibold hidden lg:block ' >
            {/* Top Menu */}
            <div className='space-y-3 mb-10'>
                <div className='flex items-center gap-3 text-[#F96071] hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out '>
                    <FaHome size={20} />
                    <p>Home</p>
                </div>

                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <BiGridAlt size={20} />
                    <p>Browse</p>
                </div>

                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <FaFolderOpen size={20} />
                    <p>Album</p>
                </div>
                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <BsFillPersonFill size={20} />
                    <p>Artist</p>
                </div>
                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <BsFillCameraVideoFill size={20} />
                    <p>Video</p>
                </div>
            </div>

            {/* Middle Menu */}
            <div className='space-y-4 mb-10'>
                <h4 className=' text-gray-500 text-[15px] font-semibold mb-3'>MY MUSIC</h4>
                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <MdTimer size={20} />
                    <p>Recently Played</p>
                </div>
                <div className='flex items-center gap-3 hover:text-[#F96071] hover:cursor-pointer md:hover:transition-colors duration-300 ease-in-out'>
                    <BsFillFileEarmarkMusicFill size={20} />
                    <p>Local Files</p>
                </div>

            </div>

            {/* Playlist */}
            <div className='space-y-3 '>
                <h4 className=' text-gray-500 text-[15px] font-semibold mb-3 '>PLAYLIST</h4>
                <div className='hover:cursor-pointer space-y-2 font-semibold text-[13px] overflow-y-scroll h-[200px]' style={{"scrollbarWidth" : "thin"}}>

                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                    <p>Playlist 1</p>
                </div>
            </div>

        </section>
    )
}

export default Sidebar
