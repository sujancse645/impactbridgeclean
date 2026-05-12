"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"

const CountUp = dynamic(() => import("react-countup"), {
    ssr: false,
})

export default function ImpactPage() {

    return (

        <main className="min-h-screen bg-white py-24 px-6 overflow-hidden relative">

            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-200/30 blur-3xl rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-7xl mx-auto relative z-10"
            >

                <div className="text-center">

                    <span className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold">
                        GLOBAL IMPACT REPORT
                    </span>

                    <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-slate-900">

                        Measuring Real

                        <span className="text-emerald-600">
                            {" "}Human Impact
                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">

                        Transparency-driven reporting that shows how donations transform lives.

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">

                    <div className="bg-white rounded-[36px] p-10 shadow-xl text-center border border-gray-100 hover:scale-105 transition duration-300">

                        <div className="text-5xl">
                            🌍
                        </div>

                        <h2 className="mt-8 text-5xl font-bold text-emerald-600">
                            <CountUp end={45} duration={4} />+
                        </h2>

                        <p className="mt-4 text-gray-600 text-lg">
                            Countries Reached
                        </p>

                    </div>

                    <div className="bg-white rounded-[36px] p-10 shadow-xl text-center border border-gray-100 hover:scale-105 transition duration-300">

                        <div className="text-5xl">
                            📚
                        </div>

                        <h2 className="mt-8 text-5xl font-bold text-blue-600">
                            <CountUp
                                end={120000}
                                duration={4}
                                separator=","
                            />+
                        </h2>

                        <p className="mt-4 text-gray-600 text-lg">
                            Students Supported
                        </p>

                    </div>

                    <div className="bg-white rounded-[36px] p-10 shadow-xl text-center border border-gray-100 hover:scale-105 transition duration-300">

                        <div className="text-5xl">
                            🚰
                        </div>

                        <h2 className="mt-8 text-5xl font-bold text-orange-500">
                            <CountUp end={350} duration={4} />+
                        </h2>

                        <p className="mt-4 text-gray-600 text-lg">
                            Water Projects
                        </p>

                    </div>

                    <div className="bg-white rounded-[36px] p-10 shadow-xl text-center border border-gray-100 hover:scale-105 transition duration-300">

                        <div className="text-5xl">
                            ❤️
                        </div>

                        <h2 className="mt-8 text-5xl font-bold text-rose-500">
                            <CountUp
                                end={250000}
                                duration={4}
                                separator=","
                            />+
                        </h2>

                        <p className="mt-4 text-gray-600 text-lg">
                            Lives Impacted
                        </p>

                    </div>

                </div>

            </motion.div>

        </main>
    )
}