import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import MainSection from './MainSection';
import { useNavigate } from 'react-router-dom';


function Home() {
    const nav = useNavigate();
    

    return (
        <div>
            <div className="grid place-items-center h-screen bg-[#3ABB82] text-white">
                {/* Main Container Body */}
                <div className="mr-2 md:w-[72%] md:h-[90%] w-[95%] h-[98%] lg:h-fit md:rounded-sm bg-white text-black flex" style={{ "box-shadow": " rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}>
                    {/* SideBar */}
                    <Sidebar />

                    <div className="bg-gradient-to-t from-[#ECDBFD] via-[#FCF3F8] to-[#FFEEDE] h-fit w-fit">
                        {/* Navbar */}
                        <Navbar />

                        {/* Main Section */}
                        <MainSection />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
