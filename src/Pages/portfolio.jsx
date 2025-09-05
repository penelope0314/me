import { useState } from "react"

export default function Portfolio() {
    return (
        <>
            <div className="w-full text-[#777777] text-center grid grid-cols-3 p-[3vw_11vw] text-[1.5vw] gap-[3.5vw]">
                <div className='portfolio_item'>
                    <a href="#"></a>
                    <div className='aspect-3/4 bg-linear-[10deg,rgba(220,220,220,1)_0%,rgba(255,255,247,1)_30%,rgba(220,220,220,1)_100%]'></div>
                    <h3 className='mt-[1vw]'>Web Design</h3>
                </div>
                <div className='portfolio_item'>
                    <a href="/#/photography"></a>
                    <h3 className='mb-[1vw]'>Photography</h3>
                    <div className='aspect-3/4 bg-radial-[circle,rgba(255,255,247,1)_0%,rgba(220,220,220,1)_100%]'></div>
                </div>
                <div className='portfolio_item'>
                    <a href="#"></a>
                    <div className='aspect-3/4 bg-linear-[160deg,rgba(220,220,220,1)_0%,rgba(255,255,247,1)_48%,rgba(220,220,220,1)_100%]'></div>
                    <h3 className='mt-[1vw]'>Graphic Design</h3>
                </div>

            </div>
        </>
    )
}