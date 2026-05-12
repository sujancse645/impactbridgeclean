
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { useState } from "react"

export default function PartnerDetailPage() {

    const params = useParams()
    const slug = params.slug

    const [submitted, setSubmitted] = useState(false)

    const partners = [

        {
            slug: "unicef",
            name: "UNICEF",
            role: "Global Child Welfare Partner",

            hero:
                "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1800&auto=format&fit=crop",

            logo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/UNICEF_Logo.svg/2560px-UNICEF_Logo.svg.png",

            tagline:
                "Transforming children's futures through education and healthcare.",

            description:
                "UNICEF and ImpactBridge collaborate to build smart education systems, emergency healthcare support, nutrition programs, and child safety initiatives globally.",

            impact:
                "Over 120,000 children supported through healthcare, education, emergency aid, and digital learning.",

            mission:
                "Creating equal opportunities for children through innovation and humanitarian excellence.",

            stats: [
                ["120K+", "Children Supported"],
                ["38", "Countries Reached"],
                ["420+", "Volunteers"],
                ["96%", "Aid Success"],
            ],

            images: [
                "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200",
                "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200",
            ],

            achievements: [
                "AI classrooms launched in remote villages",
                "Emergency healthcare systems deployed",
                "Nutrition support programs expanded",
                "Digital education labs created",
            ],
        },

        {
            slug: "who",
            name: "World Health Organization",
            role: "Healthcare Innovation Partner",

            hero:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1800&auto=format&fit=crop",

            logo:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/World_Health_Organization_Logo.svg/1200px-World_Health_Organization_Logo.svg.png",

            tagline:
                "Building healthier communities through innovation.",

            description:
                "WHO partners with ImpactBridge to expand healthcare access, vaccination programs, and emergency medical support.",

            impact:
                "Healthcare systems improved across 70+ rural communities.",

            mission:
                "Delivering accessible healthcare for every community.",

            stats: [
                ["250K+", "Patients Treated"],
                ["70+", "Communities"],
                ["500+", "Medical Experts"],
                ["24/7", "Emergency Support"],
            ],

            images: [
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200",
                "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200",
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200",
            ],

            achievements: [
                "Mobile clinics deployed",
                "AI healthcare systems created",
                "Vaccination programs expanded",
                "Emergency care infrastructure launched",
            ],
        },

        {
            slug: "google-for-nonprofits",
            name: "Google For Nonprofits",
            role: "Technology Transformation Partner",

            hero:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800",

            logo:
                "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",

            tagline:
                "Empowering innovation through AI and cloud technology.",

            description:
                "Google powers ImpactBridge with cloud systems, AI learning platforms, and digital transformation tools.",

            impact:
                "15,000+ students empowered through AI learning systems.",

            mission:
                "Making future technology accessible globally.",

            stats: [
                ["15K+", "Students"],
                ["120+", "AI Labs"],
                ["300+", "Mentors"],
                ["98%", "Cloud Uptime"],
            ],

            images: [
                "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
                "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200",
            ],

            achievements: [
                "AI classrooms created",
                "Cloud infrastructure enabled",
                "Coding labs launched",
                "Digital analytics systems deployed",
            ],
        },

    ]

    const partner = partners.find((p) => p.slug === slug)

    if (!partner) {

        return (

            <div className="min-h-screen bg-black text-white flex items-center justify-center">

                <h1 className="text-5xl font-black">
                    Partner Not Found
                </h1>

            </div>
        )
    }

    return (

        <main className="bg-slate-950 text-white overflow-hidden relative">

            {/* BACKGROUND GLOW */}

            <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute top-[40%] left-[35%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* HERO */}

            <section className="relative h-screen overflow-hidden">

                <img
                    src={partner.hero}
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                />

                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 h-full flex items-center">

                    <div className="max-w-7xl mx-auto px-6">

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >

                            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/10 px-6 py-4 rounded-2xl">

                                <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse"></div>

                                <p className="text-lg font-bold tracking-wide">

                                    Global Strategic Partnership

                                </p>

                            </div>

                            <p className="mt-8 text-emerald-400 tracking-[5px] font-bold uppercase">

                                {partner.role}

                            </p>

                            <h1 className="mt-6 text-7xl md:text-8xl font-black max-w-5xl leading-tight">

                                {partner.name}

                            </h1>

                            <p className="mt-8 text-2xl text-gray-300 max-w-3xl leading-relaxed">

                                {partner.tagline}

                            </p>

                            <div className="mt-12 flex flex-wrap gap-6">

                                <a href="#join">

                                    <button className="bg-gradient-to-r from-emerald-500 to-blue-600 px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition duration-300 shadow-2xl">

                                        Join Partnership

                                    </button>

                                </a>

                                <Link href="/partners">

                                    <button className="border border-white/20 px-10 py-5 rounded-2xl font-black hover:bg-white/10 transition">

                                        Back To Partners

                                    </button>

                                </Link>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* STATS */}

            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {partner.stats.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-10"
                        >

                            <h2 className="text-5xl font-black text-emerald-400">

                                {item[0]}

                            </h2>

                            <p className="mt-4 text-lg text-gray-300">

                                {item[1]}

                            </p>

                        </motion.div>

                    ))}

                </div>

            </section>

            {/* ABOUT */}

            <section className="max-w-7xl mx-auto px-6 pb-24">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    <div>

                        <h2 className="text-5xl font-black">

                            About Partnership

                        </h2>

                        <p className="mt-8 text-xl text-gray-300 leading-relaxed">

                            {partner.description}

                        </p>

                        <div className="mt-10 bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <h3 className="text-3xl font-black text-emerald-400">

                                Mission

                            </h3>

                            <p className="mt-5 text-lg text-gray-300 leading-relaxed">

                                {partner.mission}

                            </p>

                        </div>

                    </div>

                    <motion.img
                        whileHover={{ scale: 1.03 }}
                        src={partner.images[0]}
                        className="rounded-[40px] h-[600px] w-full object-cover"
                    />

                </div>

            </section>

            {/* ACHIEVEMENTS */}

            <section className="max-w-7xl mx-auto px-6 pb-28">

                <h2 className="text-5xl font-black text-center">

                    Partnership Achievements

                </h2>

                <div className="grid md:grid-cols-2 gap-8 mt-16">

                    {partner.achievements.map((item, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.02 }}
                            className="bg-white/5 border border-white/10 rounded-[32px] p-10"
                        >

                            <div className="flex gap-5 items-start">

                                <div className="w-5 h-5 rounded-full bg-emerald-400 mt-2"></div>

                                <p className="text-xl text-gray-300">

                                    {item}

                                </p>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>

            {/* GALLERY */}

            <section className="max-w-7xl mx-auto px-6 pb-28">

                <h2 className="text-5xl font-black text-center">

                    Global Transformation Gallery

                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                    {partner.images.map((img, index) => (

                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03 }}
                            className="overflow-hidden rounded-[32px]"
                        >

                            <img
                                src={img}
                                className="h-[420px] w-full object-cover hover:scale-110 transition duration-700"
                            />

                        </motion.div>

                    ))}

                </div>

            </section>

            {/* JOIN FORM */}

            <section
                id="join"
                className="max-w-5xl mx-auto px-6 pb-32"
            >

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-14 backdrop-blur-2xl">

                    <h2 className="text-5xl font-black text-center">

                        Join This Partnership

                    </h2>

                    <p className="mt-6 text-center text-gray-400 text-lg">

                        Collaborate globally with ImpactBridge and create transformational impact.

                    </p>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            setSubmitted(true)
                        }}
                        className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8"
                    >

                        <input
                            placeholder="Organization Name"
                            className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            required
                        />

                        <input
                            placeholder="Official Email"
                            className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            required
                        />

                        <input
                            placeholder="Country"
                            className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            required
                        />

                        <input
                            placeholder="Partnership Type"
                            className="bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 outline-none"
                            required
                        />

                        <textarea
                            placeholder="Tell us about your mission..."
                            className="md:col-span-2 bg-slate-900 border border-white/10 rounded-2xl px-6 py-5 outline-none min-h-[180px]"
                            required
                        />

                        <button
                            className="md:col-span-2 bg-gradient-to-r from-emerald-500 to-blue-600 py-5 rounded-2xl text-xl font-black hover:scale-[1.02] transition"
                        >

                            Submit Partnership Request

                        </button>

                    </form>

                    {submitted && (

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-10 bg-emerald-500/20 border border-emerald-400/20 rounded-2xl p-6 text-center"
                        >

                            <h3 className="text-2xl font-black text-emerald-300">

                                Partnership Request Submitted Successfully 🚀

                            </h3>

                        </motion.div>

                    )}

                </div>

            </section>

        </main>
    )
}