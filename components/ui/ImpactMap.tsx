"use client"

import { motion } from "framer-motion"

const countries = [
    "India",
    "Kenya",
    "Brazil",
    "Nepal",
    "Indonesia",
    "Nigeria",
]

export default function ImpactMap() {
    return (
        <div className="relative mt-24">

            <div className="absolute inset-0 bg-gradient-to-r from-emerald-200/20 to-blue-200/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-[40px] p-12 shadow-2xl overflow-hidden">

                <h2 className="text-4xl font-bold text-center">
                    Global Reach
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-14">

                    {countries.map((country, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 text-center shadow-lg hover:scale-105 transition"
                        >

                            <div className="text-5xl">
                                🌍
                            </div>

                            <h3 className="mt-5 text-2xl font-bold">
                                {country}
                            </h3>

                            <p className="mt-3 text-gray-600">
                                Active humanitarian programs
                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </div>
    )
}