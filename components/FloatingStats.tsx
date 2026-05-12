"use client"

import CountUp from "react-countup"

export default function FloatingStats() {

    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24">

            <div className="bg-white/10 backdrop-blur-xl rounded-[32px] p-10 text-center shadow-2xl hover:-translate-y-4 transition-all duration-700">

                <h2 className="text-5xl font-black text-emerald-500">

                    <CountUp end={45} duration={4} />+

                </h2>

                <p className="mt-4 text-gray-600">
                    Countries
                </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-[32px] p-10 text-center shadow-2xl hover:-translate-y-4 transition-all duration-700">

                <h2 className="text-5xl font-black text-blue-500">

                    <CountUp end={250000} duration={4} separator="," />+

                </h2>

                <p className="mt-4 text-gray-600">
                    Lives Impacted
                </p>

            </div>

        </div>
    )
}