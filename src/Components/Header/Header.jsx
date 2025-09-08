import React from 'react';
const Navbar = () => {
    return (
        <>
            <nav className='hidden md:flex font-sorts_mill_goudy fixed top-0 left-0 w-full justify-between items-center p-[1.5vw_4vw]'>
                <h1 className='flex'><span className='md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw]'>Penelope</span></h1>
                <ul className='flex flex-row md:gap-[3vw] lg:gap-[2.5vw] xl:gap-[2vw] md:text-[2.75vw] lg:text-[2vw] xl:text-[1.7vw]'>
                    <li><a href="#" className='nav_link'>About</a></li>
                    <li><a href="#/portfolio" className='nav_link'>Portfolio</a></li>
                </ul>
            </nav>
            <nav className='block md:hidden font-sorts_mill_goudy fixed top-0 left-0 w-lvw bg-white z-10'>
                <div className='relative py-[3vw] sm:py-[2vw]'>
                    <button type="button" className='absolute left-0 top-1/2 -translate-y-1/2 bg-transparent h-full px-[4vw]'>
                        <i class="tw-flex tw-cursor-pointer header__menu-icon touch_scale"><svg class="" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path class="path-1" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" d="M2 5.5h20"></path><path class="path-2" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" d="M2 12.5h16"></path><path class="path-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" d="M2 19.5h20"></path></svg></i>
                    </button>
                    <h1 className='flex w-full justify-center text-center'><span className='text-[7vw] sm:text-[4vw]'>Penelope</span></h1>
                </div>
            </nav>
            <div className='pt-[20vw] sm:pt-[14vw] md:pt-[10vw] lg:pt-[8vw] xl:pt-[7vw]'></div>
        </>

    )
};
export default Navbar