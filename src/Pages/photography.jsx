import { useState } from "react"
const images = import.meta.glob('/src/assets/img/ootd/*.jpg', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)
export default function Photography() {
    return (
        <>
            <h2 className="text-center m-[7vw_0vw_1vw]"><span className="text-[4vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]">OOTD</span></h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 p-[2vw_4vw] gap-[3vw] sm:gap-[2vw]">
                {imageList.map((src, index) => (
                    <img key={index} src={src} alt={`圖片 ${index}`} className="rounded shadow-md" />
                ))}
            </div>
        </>
    )
}