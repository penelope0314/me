import React from 'react';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
    useEffect(() => {
        const navbar_menu_content = document.getElementById('navbar_menu_content');
        const navbar_collapse_btns = document.querySelectorAll('.navbar_collapse_btn');
        document.getElementById('navbar_expand_btn').addEventListener('click', () => {
            navbar_menu_content.style.transform = 'translateX(0px)'
        });
        navbar_collapse_btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                navbar_menu_content.style.transform = 'translateX(-100%)'
            });
        });
    }, []);
    return (
        <>
            <h1 className='tracking-wider p-[6vw_4vw] xl:p-[5vw_7.5vw] leading-[.8]!'>
                <span className='flex mb-[14px] xl:mb-[1vw] text-[14px] md:text-[16px]'>謝佩恩</span>
                <span className='flex flex-col md:flex-row md:items-center gap-y-[10px] md:gap-x-[32px]'>
                    <span className='block font-sorts_mill_goudy italic text-[20px] md:text-[30px]'>Penelope Hsieh</span>
                    <span className='block text-[14px] md:text-[16px]'>網頁設計．基礎個人四季色彩</span>
                </span>
            </h1>
            <div className='hidden lg:block'>

                <nav id="pc_navbar" className='bg-white fixed z-10 top-0 right-0 md:p-[1rem_5rem]'>
                    <ul className='flex flex-row md:gap-[3rem] md:text-[1rem]'>
                        <li><Link to="./home" className='nav_link'>Home</Link></li>
                        <li><Link to="./design" className='nav_link'>Design</Link></li>
                        <li><Link to="./photography" className='nav_link'>Photography</Link></li>
                    </ul>
                </nav>
            </div>
            <nav className='lg:hidden'>
                <div className='relative'>
                    <button id="navbar_expand_btn" type="button" className='bg-white fixed z-10 top-0 right-0  p-[4vw] md:p-[2vw]'>
                        <i><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 5.5h20"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 12.5h16"></path><path stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" d="M2 19.5h20"></path></svg></i>
                    </button>
                </div>

                <div id="navbar_menu_content" className='navbar_collapse_btn transition-transform duration-300 ease-in-out bg-white fixed top-0 left-0 z-30 w-full h-dvh  px-[4vw]' style={{ transform: 'translateX(-100%)' }}>
                    <div className='flex w-full justify-end py-[2vw]'>
                        <button type='button' className='navbar_collapse_btn p-[4vw]'>
                            <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m3 3 8.485 8.485m0-8.485L3 11.485" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square"></path></svg>
                        </button>
                    </div>
                    <div className='bg-[rgb(229,231,235)] h-[1px]'></div>
                    <ul className='flex flex-col text-[20px] py-[4vw]'>
                        <li><a href='#/home' className='nav_link block py-[4vw]'>Home</a></li>
                        <li><a href='#/design' className='nav_link block py-[4vw]'>Design</a></li>
                        <li><a href='#/photography' className='nav_link block py-[4vw]'>Photography</a></li>
                    </ul>
                </div>
            </nav>


        </>
    );


};
export default Navbar



