import React from 'react';
const Navbar = () => {
    return (
        <>
            <div className='hidden md:flex font-sorts_mill_goudy fixed top-0 left-0 w-full justify-between items-center p-[1.5vw_4vw]'>
                <h1><span className='text-[3.5vw]'>Penelope</span></h1>
                <ul className='flex flex-row gap-[2vw] text-[1.7vw]'>
                    <li><a href="#" className='nav_link'>About</a></li>
                    <li><a href="me/#/portfolio" className='nav_link'>Portfolio</a></li>
                </ul>
            </div>
            <div className='mt-[6vw]'></div>
        </>

    )
};
export default Navbar