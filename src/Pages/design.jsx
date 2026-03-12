import { useEffect } from 'react';
import PageTitle from "../Components/PageTitle/PageTitle";
const images = import.meta.glob('/src/assets/img/design/*.png', { eager: true })
const imageList = Object.values(images).map((mod) => mod.default)

export default function Photography() {
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
            <PageTitle text_en="Design" text_ch="設計呈現" />
            <div className="flex flex-col mx-auto text-center gap-y-[30vw] sm:gap-y-[20vw] md:gap-y-[15vw] lg:gap-y-[12.5vw] xl:gap-y-[10vw] p-[2vw_0vw] sm:p-[2vw_4vw] w-full sm:w-3/4">
                <div className="t_blockup">
                    <img src={imageList[0]} alt={`圖片 0`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[3.5vw] xl:text-[1.3vw]">
                        <h3 className="font-medium mb-[10px] md:mb-[1.25vw] text-[20px] sm:text-[2.8vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1.6vw]">不動產學習平台</h3>
                        <div className='font-light'>
                            <div>客戶需求分析、流程/介面設計</div>
                            <div>HTML、Tailwind CSS、Javascript切版實作</div>
                        </div>
                    </div>
                </div>
                <div className="t_blockup">
                    <img src={imageList[1]} alt={`圖片 1`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[3.5vw] xl:text-[1.3vw]">
                        <h3 className="font-medium mb-[10px] md:mb-[1.25vw] text-[20px] sm:text-[2.8vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1.6vw]">視訊會議裝置</h3>
                        <div className='font-light'>
                            <div>流程/介面設計</div>
                            <div>HTML、Tailwind CSS、Javascript切版實作</div>
                        </div>
                    </div>
                </div>
                <div className="t_blockup">
                    <img src={imageList[2]} alt={`圖片 2`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[3.5vw] xl:text-[1.3vw]">
                        <h3 className="font-medium mb-[10px] md:mb-[1.25vw] text-[20px] sm:text-[2.8vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1.6vw]">直錄播系統</h3>
                        <div className='font-light'>
                            <div>介面設計、無障礙設計</div>
                            <div>HTML、Tailwind CSS、Javascript切版實作</div>
                        </div>
                    </div>
                </div>
                <div className="t_blockup">
                    <img src={imageList[3]} alt={`圖片 3`} loading="lazy" className="block w-full sm:rounded-[1vw]" />
                    <div className="mt-[5vw] sm:mt-[3.5vw] xl:text-[1.3vw]">
                        <h3 className="font-medium mb-[10px] md:mb-[1.25vw] text-[20px] sm:text-[2.8vw] md:text-[2.4vw] lg:text-[2vw] xl:text-[1.6vw]">產品DM</h3>
                        <div className='font-light'>
                            <div>設計</div>
                            <div>Adobe Illustrator</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
