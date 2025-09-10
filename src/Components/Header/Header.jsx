import React from 'react';
import { useEffect } from "react";
const Navbar = () => {
    useEffect(() => {
        const navbar_menu = document.getElementById('navbar_menu');
        const navbar_collapse = new Collapse(navbar_menu);
        const navbar_collapse_btns = document.querySelectorAll('.navbar_collapse_btn');
        document.getElementById('navbar_expand_btn').addEventListener('click', () => {
            navbar_collapse.expand();
        });
        navbar_collapse_btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                navbar_collapse.collapse();
                // navbar_collapse.style.left= '0px';
            });
        });
    }, []);
    return (
        <>
            <nav id="pc_navbar" className='hidden md:flex font-sorts_mill_goudy fixed top-0 left-0 w-full justify-between items-center p-[1.5vw_4vw]'>
                <h1 className='flex'><span className='md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw]'>Penelope</span></h1>
                <ul className='flex flex-row md:gap-[3vw] lg:gap-[2.5vw] xl:gap-[2vw] md:text-[2.75vw] lg:text-[2vw] xl:text-[1.7vw]'>
                    <li><a href="#" className='nav_link'>About</a></li>
                    <li><a href="#/portfolio" className='nav_link'>Portfolio</a></li>
                </ul>
            </nav>
            <nav className='block md:hidden fixed top-0 left-0 w-lvw bg-white z-10'>
                <div className='relative py-[4.5vw] sm:py-[2vw]'>
                    <button id="navbar_expand_btn" type="button" className='absolute left-0 top-1/2 -translate-y-1/2 bg-transparent h-full px-[4vw]'>
                        <i><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 5.5h20"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 12.5h16"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 19.5h20"></path></svg></i>
                    </button>
                    <h1 className=' font-sorts_mill_goudy flex w-full justify-center text-center'><span className='text-[7vw] sm:text-[4vw]'>Penelope</span></h1>
                </div>

                <div id="navbar_menu" className='hidden'>
                    <div className='navbar_collapse_btn absolute top-0 left-0 h-dvh w-full bg-[rgba(230,230,230,0.6)]'></div>
                    <div className='navbar_collapse_btn bg-white absolute top-0 w-[calc(100vw-25px)] h-dvh  px-[4vw]'>
                        <div className='flex w-full justify-end py-[2vw]'>
                            <button type='button' className='navbar_collapse_btn p-[4vw]'>
                                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 8.485 8.485m0-8.485L3 11.485" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"></path></svg>
                            </button>
                        </div>
                        <div className='bg-[rgb(229,231,235)] h-[1px]'></div>
                        <ul className='flex flex-col text-[20px] py-[3vw]'>
                            <li><a href='#' className='nav_link block py-[3vw]'>About</a></li>
                            <li><a href='#/webdesign' className='nav_link block py-[3vw]'>Web Design</a></li>
                            <li><a href='#/photography' className='nav_link block py-[3vw]'>Photography</a></li>
                            <li><a href='#/graphicdesign' className='nav_link block py-[3vw]'>Graphic Design</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='pt-[20vw] sm:pt-[14vw] md:pt-[10vw] lg:pt-[8vw] xl:pt-[7vw]'></div>
        </>
    );


};
export default Navbar



