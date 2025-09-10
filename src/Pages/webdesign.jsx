import { useState } from "react"
import PageTitle from "../Components/PageTitle/PageTitle";
const images = import.meta.glob('/src/assets/img/webdesign/*.png', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)
export default function Photography() {
    return (
        <>
            <PageTitle text="WEB DESIGN" />
            <div className="flex flex-col mx-auto text-center gap-y-[20vw] sm:gap-y-[10vw] md:gap-y-[7.5vw] lg:gap-y-[6vw] xl:gap-y-[5vw] p-[2vw_0vw] sm:p-[2vw_4vw] w-full sm:w-3/4">
                <div>
                    <img src={imageList[0]} alt={`圖片 0`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[2vw] xl:text-[1.3vw]">
                        <h3 className="font-bold mb-[1vw] text-[20px] xl:text-[1.6vw]">不動產學習平台</h3>
                        <div>客戶需求分析、流程/介面設計</div>
                        <div>HTML、Tailwind CSS、Javascript實作</div>
                    </div>
                </div>
                <div>
                    <img src={imageList[1]} alt={`圖片 1`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[2vw] xl:text-[1.3vw]">
                        <h3 className="font-bold mb-[1vw] text-[20px] xl:text-[1.6vw]">視訊會議裝置</h3>
                        <div>流程/介面設計</div>
                        <div>HTML、Tailwind CSS、Javascript實作</div>
                    </div>
                </div>
                <div>
                    <img src={imageList[2]} alt={`圖片 2`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[2vw] xl:text-[1.3vw]">
                        <h3 className="font-bold mb-[1vw] text-[20px] xl:text-[1.6vw]">直錄播系統</h3>
                        <div>介面設計、無障礙設計</div>
                        <div>HTML、Tailwind CSS、Javascript實作</div>
                    </div>
                </div>
            </div>
        </>
    )
}
