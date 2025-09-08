import { useState } from "react"


export default function Portfolio() {
    return (
        <>
            <div className="w-full text-[#777777] text-center grid md:grid-cols-3 p-[3vw_11vw] text-[5vw] sm:text-[3vw] md:text-[2vw] lg:text-[1.8vw] xl:text-[1.5vw] gap-[3.5vw]">
                <div className='portfolio_item flex-col gap-y-[1vw]'>
                    <a href="#/webdesign"></a>
                    <div className='aspect-3/4 bg-linear-[10deg,rgba(220,220,220,1)_0%,rgba(255,255,247,1)_30%,rgba(220,220,220,1)_100%]'></div>
                    <h3>Web Design</h3>
                </div>
                <div className='portfolio_item flex-col-reverse gap-y-[1vw]'>
                    <a href="#/photography"></a>
                    <div className='aspect-3/4 bg-radial-[circle,rgba(255,255,247,1)_0%,rgba(220,220,220,1)_100%]'></div>
                    <h3>Photography</h3>
                </div>
                <div className='portfolio_item flex-col gap-y-[1vw]'>
                    <a href="#"></a>
                    <div className='aspect-3/4 bg-linear-[160deg,rgba(220,220,220,1)_0%,rgba(255,255,247,1)_48%,rgba(220,220,220,1)_100%]'></div>
                    <h3>Graphic Design</h3>
                </div>

            </div>
        </>
    )
}