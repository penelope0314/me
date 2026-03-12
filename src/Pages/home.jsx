import { useState } from "react";
import { useEffect } from 'react';
import PageTitle from "../Components/PageTitle/PageTitle";
import avatar from '../assets/img/home/20250904_7.jpg';
import name from '../assets/img/home/name.svg';


export default function Home() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const delay = entry.target.dataset.delay || 0;
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, delay);
                    // observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove("show")
                }
            })
        }, {})
        const t_blockupElements = document.querySelectorAll(".t_blockup")
        t_blockupElements.forEach(el => observer.observe(el))
    }, []);
    return (
        <>
            <div>
                <div className="relative sm:grid grid-cols-2 lg:grid-cols-3 w-full sm:mb-[10vw]">
                    <div className="at_blockappear animation_delay_50 block aspect-square sm:aspect-3/4 sm:w-[50vw] md:w-[40vw] xl:w-auto">
                        <img src={avatar} alt={`自己`} loading="lazy" className=" w-full h-full object-cover object-[50%_25%] sm:object-center" />
                    </div>

                    <div className="bg-[#e2e0d8] at_blockappear animation_delay_50 -z-10 absolute w-full lg:w-[85%] sm:h-full"></div>
                    <div className="lg:col-span-2 flex items-center xl:items-start justify-center my-[20vw] sm:my-0">
                        <div className="text_vertical_sm flex flex-col font-light tracking-widest text-center sm:text-start gap-y-[2vw] text-[16px] sm:text-[2.7vw] md:text-[2.3vw] lg:text-[2vw] xl:text-[1.6vw] xl:m-[5vw]">
                            <span className="at_blockup animation_delay_500 block">你好，我是佩恩，</span>
                            <span className="at_blockup animation_delay_750 block">對生活中的美感與質感抱持高度興趣，</span>
                            <span className="at_blockup animation_delay_1000 block">關注色彩、細節如何形塑整體氛圍。</span>
                            <span className="at_blockup animation_delay_1500 block">持續在設計與日常觀察中累積經驗，</span>
                            <span className="at_blockup animation_delay_2000 block">並發展屬於自己的視覺語言。</span>
                        </div>
                    </div>
                    <div className="hidden sm:block absolute bottom-0 w-full t_blockup translate-y-1/2">
                        <img src={name} alt={`名字`} loading="lazy" className="w-full max-w-lvw overflow-hidden" />
                    </div>
                </div>
                <div className="relative p-[8vw_0vw] sm:p-[2vw_4vw] w-full md:w-5/6 xl:w-3/4 m-auto">
                    <h2 className="flex justify-center mb-[4rem] xl:absolute xl:left-0 tracking-widest">
                        <span className="text_vertical tracking-widest text-[1.3rem] xl:text-[1.8rem]">我的職涯軌跡</span>
                        <span className="text_vertical text-[#999] font-light">Resume</span>
                    </h2>
                    <ul className="flex flex-col gap-y-[2rem] px-[8vw] sm:px-0 xl:px-[10vw_8vw]">
                        <li>
                            <div className="flex mb-[.8rem] sm:mb-[1.5rem]">
                                <div className="bg-white border text-[18px] sm:text-[1.3rem] lg:text-[1.5rem] p-[.56rem_1.6rem] sm:p-[.5rem_1.5rem]">心統科技有限公司</div>
                            </div>
                            <div className="step_content tracking-wide pl-[2.7rem] sm:pl-[5rem] py-[.8rem] sm:py-[1.5rem] text-[16px] sm:text-[1.2rem]">
                                <div className="-ml-[18px] sm:-ml-[1.2rem] mb-[1.1rem] sm:mb-[1rem]">網頁前端設計 2022/8~2025/3</div>
                                <ol className="list-decimal flex flex-col font-light gap-y-[1.1rem] sm:gap-y-[1rem]">

                                    <li><span className="block">觀察顧客需求：</span><span className="block">與客戶溝通需求並提供建議，確保方案符合使用者期待。</span></li>
                                    <li><span className="block">提供專業建議：</span><span className="block">參與使用流程與介面設計，優化使用體驗，重視細節與可用性。</span></li>
                                    <li><span className="block">現場操作教學：</span><span className="block">耐心解答使用者問題，確保順利上手。</span></li>
                                    <li><span className="block">獨立作業：</span><span className="block">藉由程式切版，完成不同裝置上網頁的呈現。</span></li>
                                    <li><span className="block">跨部門協作：</span><span className="block">協調需求與資源，確保專案順利完成。</span></li>
                                    <li><span className="block">參與專案：</span><span className="inline-block">不動產學習平台、直錄播系統（學校/補習班/保經業）、Projmate（保密協議會議系統）、Quizame（隨堂測驗即時反饋系統）、高雄市國民小學課後社團/寒暑假育樂營</span></li>
                                </ol>
                            </div>
                        </li>
                        <li className="flex w-auto">
                            <div className="bg-white border text-[1.5vw] p-[.5vw_1.5vw]">東定有限公司</div>
                        </li>

                    </ul>
                </div>

            </div>

        </>
    )
}