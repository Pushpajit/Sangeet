import React, { useRef } from 'react';
import ArtistCard from './ArtistCard';

function TopHeadline() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
    const scrollRef = useRef(null);

    function handleScroll(direction, amount){
        const content = scrollRef.current;
        
        const scrollAmount = direction === 'left' ? -amount : amount;
        content.scrollBy({
            left: scrollAmount,
             behavior: 'smooth',
        });
        
    }

    return (
        <section className='space-y-3 '>
            {/* Top bar */}
            <div className='flex justify-between'>
                <div className='flex gap-5 items-center'>
                    <h1 className='font-bold text-slate-700'>Top Artists</h1>
                    <p className='text-[11px] font-semibold text-gray-500'>- Top 50</p>
                </div>

                <div className='md:flex gap-5 items-center mr-5 hidden'>
                    <span className='bg-white pl-2 pr-2 rounded-lg shadow-xl'>
                        <i onDoubleClick={() => handleScroll('left', 500)} onClick={() => handleScroll('left', 200)} className="fa-solid fa-arrow-left hover:cursor-pointer text-slate-600"></i>
                    </span>
                    <span className='bg-white pl-2 pr-2 rounded-lg shadow-xl'>
                        <i onDoubleClick={() => handleScroll('right', 500)} onClick={() => handleScroll('right', 200)} className="fa-solid fa-arrow-right hover:cursor-pointer text-slate-600"></i>
                    </span>
                </div>
            </div>

            {/* Bottom Artist Cards */}
            <div ref={scrollRef} className='md:flex md:h-fit md:flex-nowrap flex gap-5 overflow-x-scroll pt-2 pl-2 pr-2 rounded-md' style={{"scrollbarWidth" : "thin", "scrollbarColor": "transparent transparent", "boxShadow": "inset -10px 0 10px -10px rgba(0, 0, 0, 0.25),inset 10px 0 10px -10px rgba(0, 0, 0, 0.25)"}}>
                {arr.map((item) => { return <ArtistCard /> })}
            </div>

        </section>
    )
}

export default TopHeadline
