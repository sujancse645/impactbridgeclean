"use client"

import { motion } from "framer-motion"

export default function AIRecommendation() {

    return (

        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-32 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white rounded-[40px] p-12 shadow-2xl overflow-hidden relative"
        >

            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">

                <div className="flex items-center gap-3">

                    <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>

                    <span className="uppercase tracking-[0.3em] text-sm font-semibold">

                        AI IMPACT ENGINE

                    </span>

                </div>

                <h2 className="mt-8 text-5xl font-black leading-tight">

                    Education Crisis Requires Immediate Funding

                </h2>

                <p className="mt-8 text-xl text-white/90 max-w-3xl leading-relaxed">

                    Based on humanitarian analytics and social impact forecasting,
                    education initiatives in Kenya currently show the highest
                    long-term transformation potential.

                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl">

                        <h3 className="text-4xl font-black">
                            96%
                        </h3>

                        <p className="mt-2 text-white/80">
                            Priority Score
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl">

                        <h3 className="text-4xl font-black">
                            High
                        </h3>

                        <p className="mt-2 text-white/80">
                            Impact Prediction
                        </p>

                    </div>

                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl">

                        <h3 className="text-4xl font-black">
                            12K+
                        </h3>

                        <p className="mt-2 text-white/80">
                            Students Benefited
                        </p>

                    </div>

                </div>

            </div>

        </motion.div>
    )
}