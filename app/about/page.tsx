"use client"

import { motion } from "framer-motion"

export default function AboutPage() {

    return (

        <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

            <section className="relative px-6 py-28">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="bg-white/10 px-6 py-3 rounded-full text-sm font-semibold">

                            ABOUT IMPACTBRIDGE

                        </span>

                        <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">

                            Creating
                            Sustainable
                            Global Impact

                        </h1>

                        <p className="mt-8 text-xl text-gray-300 leading-relaxed">

                            ImpactBridge is a global humanitarian platform connecting
                            technology, sustainability, healthcare, and education
                            initiatives to underserved communities worldwide.

                        </p>

                        <div className="grid grid-cols-2 gap-8 mt-14">

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

                                <h2 className="text-5xl font-black text-emerald-400">

                                    80+

                                </h2>

                                <p className="mt-4 text-gray-300">

                                    Countries Reached

                                </p>

                            </div>

                            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">

                                <h2 className="text-5xl font-black text-blue-400">

                                    1M+

                                </h2>

                                <p className="mt-4 text-gray-300">

                                    Lives Impacted

                                </p>

                            </div>

                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <img
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
                            className="rounded-[40px] h-[700px] w-full object-cover shadow-2xl"
                        />

                    </motion.div>

                </div>

            </section>

        </main>
    )
}