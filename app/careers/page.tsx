"use client"

import { useState } from "react"

export default function CareersPage() {

    const [selectedJob, setSelectedJob] = useState("")

    const jobs = [
        "Frontend Developer",
        "AI Research Intern",
        "Community Manager",
        "UI/UX Designer",
    ]

    return (

        <main className="min-h-screen bg-slate-950 text-white px-6 py-24 overflow-hidden relative">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <div className="text-center">

                    <h1 className="text-6xl md:text-7xl font-black">

                        Join Our Global Team

                    </h1>

                    <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">

                        Build impactful technology solutions transforming lives worldwide.

                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 mt-24">

                    <div className="space-y-8">

                        {jobs.map((job, index) => (

                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-xl hover:-translate-y-2 transition"
                            >

                                <h2 className="text-3xl font-black">

                                    {job}

                                </h2>

                                <p className="mt-5 text-gray-300 leading-relaxed">

                                    Work on next-generation humanitarian systems,
                                    AI solutions, and sustainability innovations.

                                </p>

                                <button
                                    onClick={() => setSelectedJob(job)}
                                    className="mt-8 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-4 rounded-2xl font-black transition hover:scale-105"
                                >

                                    Apply Now

                                </button>

                            </div>

                        ))}

                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl sticky top-10 h-fit">

                        <h2 className="text-4xl font-black">

                            Apply Form

                        </h2>

                        <p className="mt-4 text-gray-300">

                            Selected Role:
                            <span className="text-emerald-400 font-bold ml-2">

                                {selectedJob || "Choose a position"}

                            </span>

                        </p>

                        <form className="mt-10 space-y-6">

                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="LinkedIn / Portfolio"
                                required
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            />

                            <textarea
                                placeholder="Why do you want to join?"
                                required
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-5 rounded-2xl font-black text-lg transition hover:scale-[1.02]"
                            >

                                Submit Application

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </main>
    )
}