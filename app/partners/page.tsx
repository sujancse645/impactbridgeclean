"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function PartnersPage() {

    const partners = [

        {
            slug: "unicef",
            name: "UNICEF",
            role: "Global Child Welfare Partner",
            image:
                "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
            description:
                "UNICEF collaborates with ImpactBridge to provide education, nutrition, healthcare, and emergency humanitarian support worldwide.",
            impact:
                "120,000+ children supported globally.",
            stats: "120K+ Children Supported",
            color: "from-emerald-500 to-green-700",
        },

        {
            slug: "who",
            name: "World Health Organization",
            role: "Healthcare Innovation Partner",
            image:
                "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
            description:
                "WHO expands healthcare access, disease prevention, and emergency medical response systems globally.",
            impact:
                "70+ rural healthcare communities transformed.",
            stats: "70+ Communities",
            color: "from-blue-500 to-cyan-700",
        },

        {
            slug: "google-for-nonprofits",
            name: "Google For Nonprofits",
            role: "Technology Transformation Partner",
            image:
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
            description:
                "Google provides AI systems, analytics, and cloud infrastructure for humanitarian innovation.",
            impact:
                "15,000+ students empowered with digital education.",
            stats: "15K+ Students",
            color: "from-purple-500 to-indigo-700",
        },

        {
            slug: "un-women",
            name: "UN Women",
            role: "Women Empowerment Partner",
            image:
                "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
            description:
                "UN Women drives leadership, entrepreneurship, and financial independence programs for women.",
            impact:
                "8,500+ women empowered globally.",
            stats: "8.5K+ Women",
            color: "from-pink-500 to-rose-700",
        },

        {
            slug: "water-org",
            name: "Water.org",
            role: "Clean Water Sustainability Partner",
            image:
                "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
            description:
                "Water.org builds sustainable clean water systems and sanitation infrastructure.",
            impact:
                "350+ water systems installed worldwide.",
            stats: "350+ Systems",
            color: "from-cyan-500 to-blue-700",
        },

        {
            slug: "tesla-energy",
            name: "Tesla Energy",
            role: "Renewable Energy Partner",
            image:
                "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
            description:
                "Tesla Energy powers green innovation with renewable infrastructure and solar systems.",
            impact:
                "40+ solar projects launched globally.",
            stats: "40+ Solar Projects",
            color: "from-orange-500 to-red-700",
        },
    ]

    return (

        <main className="min-h-screen bg-slate-950 text-white overflow-hidden relative">

            {/* BACKGROUND GLOW */}

            <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>

            {/* HERO */}

            <section className="relative z-10 px-6 py-32">

                <div className="max-w-7xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >

                        <span className="bg-white/10 border border-white/10 px-6 py-3 rounded-full text-sm font-semibold tracking-wide backdrop-blur-xl">

                            GLOBAL STRATEGIC PARTNERS

                        </span>

                        <h1 className="mt-10 text-6xl md:text-8xl font-black leading-tight">

                            Building Impact

                            <span className="text-emerald-400">
                                {" "}Together
                            </span>

                        </h1>

                        <p className="mt-10 text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">

                            Collaborating with global organizations to transform healthcare,
                            education, sustainability, climate innovation, and humanitarian support worldwide.

                        </p>

                    </motion.div>

                    {/* STATS */}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-24">

                        {[
                            ["25+", "Global Partners"],
                            ["120+", "Countries Reached"],
                            ["500K+", "Lives Impacted"],
                            ["$12M+", "Community Funding"],
                        ].map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[32px] p-10 hover:border-emerald-400/40 transition duration-500"
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

                </div>

            </section>

            {/* PARTNERS */}

            <section className="relative z-10 px-6 pb-32">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {partners.map((partner, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[40px] overflow-hidden hover:-translate-y-4 hover:border-emerald-400/40 transition duration-500 shadow-2xl"
                        >

                            <div className="overflow-hidden relative">

                                <img
                                    src={partner.image}
                                    className="h-[380px] w-full object-cover group-hover:scale-110 transition duration-700"
                                />

                                <div className={`absolute inset-0 bg-gradient-to-t ${partner.color} opacity-30`}></div>

                            </div>

                            <div className="p-10">

                                <div className="flex items-center justify-between flex-wrap gap-4">

                                    <div>

                                        <h2 className="text-4xl font-black">

                                            {partner.name}

                                        </h2>

                                        <p className="mt-2 text-emerald-400 font-semibold text-lg">

                                            {partner.role}

                                        </p>

                                    </div>

                                    <div className="bg-emerald-500/20 border border-emerald-400/20 px-5 py-3 rounded-2xl">

                                        <p className="font-bold text-emerald-300">

                                            {partner.stats}

                                        </p>

                                    </div>

                                </div>

                                <p className="mt-8 text-lg text-gray-300 leading-relaxed">

                                    {partner.description}

                                </p>

                                <div className="mt-10 bg-white/5 border border-white/10 rounded-[28px] p-8">

                                    <h3 className="text-2xl font-bold">

                                        Partnership Impact

                                    </h3>

                                    <p className="mt-5 text-gray-300 leading-relaxed text-lg">

                                        {partner.impact}

                                    </p>

                                </div>

                                <div className="mt-10 flex flex-wrap gap-5">

                                    <Link href={`/partners/${partner.slug}`}>

                                        <button className={`bg-gradient-to-r ${partner.color} hover:scale-105 transition duration-300 px-8 py-4 rounded-2xl font-bold shadow-2xl`}>

                                            Explore Partnership →

                                        </button>

                                    </Link>

                                    <Link href={`/partners/${partner.slug}`}>

                                        <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-2xl font-bold transition">

                                            View Global Impact

                                        </button>

                                    </Link>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </section>

        </main>
    )
}