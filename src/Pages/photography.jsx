import { useState } from "react"
import { Link } from 'react-router-dom';
import PageTitle from "../Components/PageTitle/PageTitle";
const images = import.meta.glob('/src/assets/img/ootd/*.jpg', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)
export default function Photography() {
    return (
        <>
            <PageTitle text_en="Photography" text_ch="光影捕捉" />
            <div className="flex flex-row justify-center gap-[14px] mb-[20px]">
                <Link to="../ootd" className="tab_btn active">OOTD</Link>
                <Link to="../object" className="tab_btn">Object</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 p-[2vw_0vw] sm:p-[2vw_4vw] w-full sm:w-3/4 m-auto gap-[3vw] sm:gap-[2vw]">
                {imageList.map((src, index) => (
                    <img key={index} src={src} alt={`圖片 ${index}`} loading="lazy" />
                ))} 
            </div>
        </>
    )
}