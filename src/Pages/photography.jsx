import { useState } from "react"
import PageTitle from "../Components/PageTitle/PageTitle";
const images = import.meta.glob('/src/assets/img/ootd/*.jpg', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)
export default function Photography() {
    return (
        <>
            <PageTitle text="OOTD" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-[2vw_4vw] gap-[3vw] sm:gap-[2vw]">
                {imageList.map((src, index) => (
                    <img key={index} src={src} alt={`圖片 ${index}`} loading="lazy" />
                ))} 
            </div>
        </>
    )
}