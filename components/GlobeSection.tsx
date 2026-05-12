"use client"

import dynamic from "next/dynamic"

const Globe = dynamic(() => import("react-globe.gl"), {
    ssr: false,
})

export default function GlobeSection() {

    return (

        <div className="h-[700px] w-full rounded-[40px] overflow-hidden shadow-2xl">

            <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                backgroundColor="rgba(0,0,0,0)"
                width={1200}
                height={700}
            />

        </div>
    )
}