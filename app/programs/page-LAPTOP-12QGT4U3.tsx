"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function ProgramsPage() {

    const programs = [
        {
            slug: "education",
            title: "Rural Education Initiative",
            category: "Education",
            country: "Kenya",
            image:
                "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
            description:
                "Providing smart classrooms, AI learning tools, mentorship programs, and digital education resources for rural children.",
            impact: "12,000+ Students",
        },

        {
            slug: "healthcare",
            title: "Rural Healthcare Access",
            category: "Healthcare",
            country: "India",
            image:
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
            description:
                "Delivering mobile healthcare clinics, emergency care, awareness programs, and medical support to remote communities.",
            impact: "50,000+ People Helped",
        },

        {
            slug: "water",
            title: "Clean Water Mission",
            category: "Sustainability",
            country: "Brazil",
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
            description:
                "Creating sustainable water systems and clean drinking water access in drought-affected communities.",
            impact: "350+ Water Systems",
        },

        {
            slug: "women",
            title: "Women Empowerment Network",
            category: "Community",
            country: "South Africa",
            image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
            description:
                "Helping women build careers through entrepreneurship training, leadership programs, and financial literacy.",
            impact: "8,500+ Women Empowered",
        },

        {
            slug: "digital",
            title: "Digital Education Initiative",
            category: "Technology",
            country: "Singapore",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            description:
                "Building AI-powered learning platforms and coding education for future-ready students worldwide.",
            impact: "15,000+ Students Trained",
        },

        {
            slug: "climate",
            title: "Climate Sustainability Project",
            category: "Environment",
            country: "Norway",
            image:
                "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
            description:
                "Protecting ecosystems through renewable energy, green innovation, and environmental sustainability programs.",
            impact: "1 Million Trees Planted",
        },
    ]

    return (

        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 py-24 px-6 overflow-hidden relative">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >

                    <span className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide">

                        GLOBAL IMPACT PROGRAMS

                    </span>

                    <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-slate-900">

                        Transforming Lives

                        <span className="text-emerald-600">
                            {" "}Across The World
                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">

                        Explore innovative humanitarian initiatives creating measurable
                        social impact in education, healthcare, sustainability,
                        women empowerment, and technology.

                    </p>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-24">

                    {programs.map((program, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/80 backdrop-blur-xl border border-white/40 rounded-[36px] overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={program.image}
                                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                            </div>

                            <div className="p-10">

                                <div className="flex items-center justify-between">

                                    <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">

                                        {program.category}

                                    </span>

                                    <span className="text-slate-500 font-medium">

                                        {program.country}

                                    </span>

                                </div>

                                <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900">

                                    {program.title}

                                </h2>

                                <p className="mt-6 text-slate-600 text-lg leading-relaxed">

                                    {program.description}

                                </p>

                                <div className="mt-8 bg-slate-100 rounded-2xl p-5">

                                    <p className="text-sm text-slate-500">

                                        Impact Reach

                                    </p>

                                    <h3 className="text-2xl font-bold mt-1 text-slate-900">

                                        {program.impact}

                                    </h3>

                                </div>

                                <div className="mt-10 flex items-center justify-between">

                                    <div className="flex -space-x-3">

                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-white"
                                        />

                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-white"
                                        />

                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-white"
                                        />

                                    </div>

                                    <Link href={`/programs/${program.slug}`}>

                                        <button
                                            type="button"
                                            className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition hover:scale-105 duration-300"
                                        >

                                            View Details →

                                        </button>

                                    </Link>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>

        </main>
    )
}