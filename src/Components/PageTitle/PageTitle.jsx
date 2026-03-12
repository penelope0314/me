import React from 'react';
const PageTitle  = ({ text_en, text_ch }) => {
    return (
        <div>
            <div className='at_blockappear animation_delay_50 relative'>
                <div className='relative opacity-[.6] w-[90%] md:w-[80%] h-[65vw] sm:h-[50vw] md:h-[45vw]  lg:h-[35vw]'>
                    <div className='bg-[url(/src/assets/img/home/banner.jpeg)] bg-cover w-full h-full'></div>
                    <h2 className="at_blockappear animation_delay_500 absolute right-0 top-1/2 -translate-y-1/2 bg-[#f3f2ec] font-medium text-center p-[.5rem_.7rem] md:p-[1rem_1.5rem]">
                        <span className="text-[#000] lg:text-[1.25rem]">{text_en}</span>
                    </h2>
                    
                </div>
                <div className='at_blockappear animation_delay_1000 text-white text_vertical absolute right-0 top-1/5 font-noto_serif_tc font-thin tracking-widest break-keep text-[11vw] hidden md:block'>{text_ch}</div>
                <div className='p-[2vw_4vw] xl:p-[2vw_7.5vw] text-[14px] md:text-[.8rem] lg:text-[1rem] mb-[12vw] sm:mb-[8vw] md:mb-[6vw] lg:mb-[5vw] xl:mb-[4vw]'>Home&ensp;─&ensp;{text_en}</div>
            </div>
        </div>
    )
};
export default PageTitle 