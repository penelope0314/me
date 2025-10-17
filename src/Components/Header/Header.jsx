import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    useEffect(() => {
        const navbar_menu_layer = document.getElementById('navbar_menu_layer');
        const navbar_menu_content = document.getElementById('navbar_menu_content');
        const navbar_collapse = new Collapse(navbar_menu_layer);
        const navbar_collapse_btns = document.querySelectorAll('.navbar_collapse_btn');
        document.getElementById('navbar_expand_btn').addEventListener('click', () => {
            navbar_collapse.expand();
            navbar_menu_content.style.transform = 'translateX(0px)'
        });
        navbar_collapse_btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                navbar_collapse.collapse();
                navbar_menu_content.style.transform = 'translateX(-100%)'
            });
        });
    }, []);
    return (
        <>
            <nav id="pc_navbar" className='hidden md:flex font-sorts_mill_goudy fixed z-10 top-0 left-0 w-full justify-between items-center p-[1.5vw_4vw]'>
                <h1 className='flex'><span className='md:text-[5vw] lg:text-[4vw] xl:text-[3.5vw]'>Penelope</span></h1>
                <ul className='flex flex-row md:gap-[3vw] lg:gap-[2.5vw] xl:gap-[2vw] md:text-[2.75vw] lg:text-[2vw] xl:text-[1.7vw]'>
                    <li><Link to="./home" className='nav_link'>About</Link></li>
                    <li><Link to="./webdesign" className='nav_link'>Design</Link></li>
                    <li><Link to="./ootd" className='nav_link'>Photo</Link></li>
                    {/* <li><a href="#/portfolio" className='nav_link'>Portfolio</a></li> */}
                </ul>
            </nav>
            <nav className='block md:hidden fixed top-0 left-0 w-lvw bg-white z-10'>
                <div className='relative py-[4.5vw] sm:py-[2vw]'>
                    <button id="navbar_expand_btn" type="button" className='absolute left-0 top-1/2 -translate-y-1/2 bg-transparent h-full px-[4vw]'>
                        <i><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 5.5h20"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 12.5h16"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 19.5h20"></path></svg></i>
                    </button>
                    <h1 className=' font-sorts_mill_goudy flex w-full justify-center text-center'><span className='text-[7vw] sm:text-[4vw]'>Penelope</span></h1>
                </div>

                <div id="navbar_menu_layer" className='hidden'>
                    <div className='navbar_collapse_btn absolute top-0 left-0 h-dvh w-full bg-[rgba(230,230,230,0.6)]'></div>

                </div>
                <div id="navbar_menu_content" className='navbar_collapse_btn transition-transform duration-300 ease-in-out bg-white absolute left-0 top-0 w-[calc(100vw-25px)] h-dvh  px-[4vw]' style={{ transform: 'translateX(-100%)' }}>
                    <div className='flex w-full justify-end py-[2vw]'>
                        <button type='button' className='navbar_collapse_btn p-[4vw]'>
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 8.485 8.485m0-8.485L3 11.485" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"></path></svg>
                        </button>
                    </div>
                    <div className='bg-[rgb(229,231,235)] h-[1px]'></div>
                    <ul className='flex flex-col text-[20px] py-[3vw]'>
                        <li><a href='#' className='nav_link block py-[3vw]'>About</a></li>
                        <li><a href='#/webdesign' className='nav_link block py-[3vw]'>Design</a></li>
                        <li><a href='#/ootd' className='nav_link block py-[3vw]'>Photo</a></li>
                        {/* <li><a href='#/graphicdesign' className='nav_link block py-[3vw]'>Graphic Design</a></li> */}
                    </ul>
                </div>
            </nav>

            <div className='pt-[20vw] sm:pt-[14vw] md:pt-[10vw] lg:pt-[8vw] xl:pt-[7vw]'></div>
        </>
    );


};
export default Navbar



