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
                "Providing smart classrooms, AI learning tools, mentorship programs, and digital education resources.",
            impact: "12,000+ Students Empowered",
            color: "from-emerald-500 to-green-700",
        },

        {
            slug: "healthcare",
            title: "Rural Healthcare Access",
            category: "Healthcare",
            country: "India",
            image:
                "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
            description:
                "Delivering mobile healthcare clinics, emergency medical support, and healthcare awareness.",
            impact: "50,000+ Lives Saved",
            color: "from-blue-500 to-cyan-700",
        },

        {
            slug: "water",
            title: "Clean Water Mission",
            category: "Water Access",
            country: "Brazil",
            image:
                "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",
            description:
                "Creating sustainable water systems and eco-friendly clean drinking water infrastructure.",
            impact: "350+ Water Systems Installed",
            color: "from-cyan-500 to-blue-700",
        },

        {
            slug: "women",
            title: "Women Empowerment Network",
            category: "Community",
            country: "South Africa",
            image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
            description:
                "Empowering women through entrepreneurship, leadership training, and digital literacy.",
            impact: "8,500+ Women Empowered",
            color: "from-pink-500 to-rose-700",
        },

        {
            slug: "digital",
            title: "Digital Education Initiative",
            category: "Technology",
            country: "Singapore",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            description:
                "Building AI-powered learning systems, robotics labs, and future-ready classrooms.",
            impact: "15,000+ Students Trained",
            color: "from-violet-500 to-purple-700",
        },

        {
            slug: "climate",
            title: "Climate Sustainability Project",
            category: "Environment",
            country: "Norway",
            image:
                "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
            description:
                "Driving renewable energy innovation, climate action, and sustainability programs worldwide.",
            impact: "1 Million Trees Planted",
            color: "from-green-500 to-emerald-800",
        },
    ]

    return (

        <main className="min-h-screen bg-black overflow-hidden relative py-24 px-6">

            {/* BACKGROUND EFFECTS */}

            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute top-[40%] left-[35%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* HEADER */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >

                    <span className="bg-white/10 border border-white/10 text-emerald-400 px-6 py-3 rounded-full text-sm font-bold tracking-[3px] backdrop-blur-xl">

                        GLOBAL HUMANITARIAN PROGRAMS

                    </span>

                    <h1 className="mt-10 text-6xl md:text-8xl font-black leading-tight text-white">

                        Transforming

                        <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            {" "}Communities
                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">

                        Explore world-class humanitarian initiatives creating measurable impact
                        across education, healthcare, sustainability, climate action,
                        women empowerment, and digital innovation.

                    </p>

                </motion.div>

                {/* PROGRAMS GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-24">

                    {programs.map((program, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden hover:-translate-y-4 hover:shadow-[0_20px_80px_rgba(16,185,129,0.35)] transition duration-700"
                        >

                            {/* IMAGE */}

                            <div className="overflow-hidden relative">

                                <img
                                    src={program.image}
                                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-20`}></div>

                            </div>

                            {/* CONTENT */}

                            <div className="p-10">

                                <div className="flex justify-between items-center">

                                    <span className="bg-white/10 text-white px-5 py-2 rounded-full text-sm font-bold">

                                        {program.category}

                                    </span>

                                    <span className="text-gray-400 font-medium">

                                        {program.country}

                                    </span>

                                </div>

                                <h2 className="mt-8 text-4xl font-black text-white leading-tight">

                                    {program.title}

                                </h2>

                                <p className="mt-6 text-gray-400 text-lg leading-relaxed">

                                    {program.description}

                                </p>

                                {/* IMPACT */}

                                <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">

                                    <p className="text-gray-500 text-sm">

                                        Global Impact

                                    </p>

                                    <h3 className="text-2xl font-black mt-2 text-emerald-400">

                                        {program.impact}

                                    </h3>

                                </div>

                                {/* FOOTER */}

                                <div className="mt-10 flex items-center justify-between">

                                    <div className="flex -space-x-3">

                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-black"
                                        />

                                        <img
                                            src="https://randomuser.me/api/portraits/men/32.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-black"
                                        />

                                        <img
                                            src="https://randomuser.me/api/portraits/women/68.jpg"
                                            className="w-12 h-12 rounded-full border-4 border-black"
                                        />

                                    </div>

                                    {/* CORRECT NAVIGATION */}

                                    <Link href={`/programs/${program.slug}`}>

                                        <button
                                            className={`bg-gradient-to-r ${program.color} hover:scale-105 transition duration-300 text-white px-8 py-4 rounded-2xl font-black shadow-2xl`}
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