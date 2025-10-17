import { useState } from "react"
import { Link } from 'react-router-dom';
import PageTitle from "../Components/PageTitle/PageTitle";
const images = import.meta.glob('/src/assets/img/substance/*.jpeg', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)
export default function Substance() {
    return (
        <>
            <PageTitle text="PHOTO" />
            <div className="flex flex-row justify-center gap-[14px] mb-[20px]">
                <Link to="../ootd" className="tab_btn">OOTD</Link>
                <Link to="../object" className="tab_btn active">Object</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-[2vw_4vw] gap-[3vw] sm:gap-[2vw]">
                {imageList.map((src, index) => (
                    <img key={index} src={src} alt={`圖片 ${index}`} loading="lazy" />
                ))} 
            </div>
        </>
    )
}