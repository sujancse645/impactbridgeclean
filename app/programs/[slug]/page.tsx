import Link from "next/link"

const programs = {

    education: {
        title: "Rural Education Initiative",
        category: "Education",
        image:
            "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Providing smart classrooms, AI-powered education, mentorship programs, and digital learning opportunities for underserved children.",

        impact:
            "12,000+ students gained access to modern education and digital learning resources.",

        raised: "$38,000",
        goal: "$50,000",
        location: "Kenya",
        beneficiaries: "12K+ Students",
        volunteers: "240+ Volunteers",
    },

    healthcare: {
        title: "Rural Healthcare Access",
        category: "Healthcare",
        image:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Delivering mobile healthcare clinics, emergency care, and life-saving medical support to remote villages.",

        impact:
            "50,000+ individuals received healthcare support through mobile medical outreach programs.",

        raised: "$54,000",
        goal: "$60,000",
        location: "India",
        beneficiaries: "50K+ Families",
        volunteers: "500+ Medical Experts",
    },

    water: {
        title: "Clean Water Mission",
        category: "Water Access",
        image:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1541544181051-e46607d1f5c8?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502303756762-a7dc8f7d0fdb?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Creating sustainable clean water systems and eco-friendly filtration infrastructure.",

        impact:
            "350+ clean water systems installed in drought-affected communities.",

        raised: "$72,000",
        goal: "$85,000",
        location: "Brazil",
        beneficiaries: "90K+ People",
        volunteers: "180+ Engineers",
    },

    women: {
        title: "Women Empowerment Network",
        category: "Community",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Helping women build careers through leadership programs, entrepreneurship, and financial literacy training.",

        impact:
            "8,500+ women launched sustainable careers and successful businesses.",

        raised: "$46,000",
        goal: "$70,000",
        location: "South Africa",
        beneficiaries: "8.5K+ Women",
        volunteers: "140+ Mentors",
    },

    digital: {
        title: "Digital Education Initiative",
        category: "Technology",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Building AI-powered learning systems, coding labs, robotics education, and future-ready classrooms.",

        impact:
            "15,000+ students trained in AI, coding, and digital technologies.",

        raised: "$63,000",
        goal: "$90,000",
        location: "Singapore",
        beneficiaries: "15K+ Students",
        volunteers: "320+ Tech Mentors",
    },

    climate: {
        title: "Climate Sustainability Project",
        category: "Environment",
        image:
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",

        gallery: [
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
        ],

        description:
            "Protecting ecosystems through renewable energy innovation, climate action, and sustainability programs.",

        impact:
            "1 Million trees planted and 120+ sustainability projects launched globally.",

        raised: "$120,000",
        goal: "$150,000",
        location: "Norway",
        beneficiaries: "Global Communities",
        volunteers: "900+ Climate Leaders",
    },
}

export default async function ProgramDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {

    const { slug } = await params

    const program = programs[slug as keyof typeof programs]

    if (!program) {

        return (

            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-5xl font-black">

                Program Not Found

            </div>

        )
    }

    return (

        <main className="min-h-screen bg-slate-950 text-white overflow-hidden relative">

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    <div>

                        <span className="bg-white/10 border border-white/10 px-6 py-3 rounded-full text-sm font-bold">

                            {program.category}

                        </span>

                        <h1 className="mt-8 text-6xl md:text-7xl font-black leading-tight">

                            {program.title}

                        </h1>

                        <p className="mt-8 text-xl text-gray-300 leading-relaxed">

                            {program.description}

                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-12">

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                                <p className="text-gray-400">
                                    Beneficiaries
                                </p>

                                <h2 className="text-3xl font-black mt-2">

                                    {program.beneficiaries}

                                </h2>

                            </div>

                            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

                                <p className="text-gray-400">
                                    Volunteers
                                </p>

                                <h2 className="text-3xl font-black mt-2">

                                    {program.volunteers}

                                </h2>

                            </div>

                        </div>

                        <div className="mt-12 bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-gray-400">
                                        Raised
                                    </p>

                                    <h2 className="text-4xl font-black mt-2">

                                        {program.raised}

                                    </h2>

                                </div>

                                <div>

                                    <p className="text-gray-400">
                                        Goal
                                    </p>

                                    <h2 className="text-4xl font-black mt-2">

                                        {program.goal}

                                    </h2>

                                </div>

                            </div>

                            <div className="mt-8 h-4 bg-white/10 rounded-full overflow-hidden">

                                <div className="w-[82%] h-full bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full"></div>

                            </div>

                        </div>

                        <div className="mt-12 bg-white/5 border border-white/10 rounded-[32px] p-8">

                            <h2 className="text-3xl font-black">

                                Global Impact

                            </h2>

                            <p className="mt-5 text-lg text-gray-300 leading-relaxed">

                                {program.impact}

                            </p>

                        </div>

                        <div className="mt-12 flex flex-col sm:flex-row gap-6">

                            <Link href="/donate">

                                <button className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl text-lg font-black shadow-2xl">

                                    Donate Now

                                </button>

                            </Link>

                            <Link href="/programs">

                                <button className="border border-white/20 hover:bg-white/10 px-10 py-5 rounded-2xl text-lg font-black transition">

                                    Explore More Programs

                                </button>

                            </Link>

                        </div>

                    </div>

                    <div>

                        <img
                            src={program.image}
                            className="rounded-[40px] h-[750px] w-full object-cover shadow-2xl"
                        />

                    </div>

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-24 relative z-10">

                <div className="text-center">

                    <h2 className="text-5xl font-black">

                        Impact Gallery

                    </h2>

                    <p className="mt-6 text-xl text-gray-400">

                        Real transformations across communities worldwide.

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

                    {program.gallery.map((img, index) => (

                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-[36px]"
                        >

                            <img
                                src={img}
                                className="h-[420px] w-full object-cover group-hover:scale-110 transition duration-700"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>

                            <div className="absolute bottom-0 p-8">

                                <h3 className="text-3xl font-black">

                                    {index === 0 && "Community Innovation"}
                                    {index === 1 && "Future Development"}
                                    {index === 2 && "Global Sustainability"}

                                </h3>

                                <p className="mt-4 text-gray-300 leading-relaxed">

                                    Creating measurable social impact through innovation,
                                    humanitarian support, and sustainable development.

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <section className="max-w-7xl mx-auto px-6 pb-32 relative z-10">

                <div className="bg-white/5 border border-white/10 rounded-[40px] p-14">

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

                        <div>

                            <h2 className="text-6xl font-black text-emerald-400">

                                98%

                            </h2>

                            <p className="mt-4 text-gray-300 text-lg">

                                Project Success Rate

                            </p>

                        </div>

                        <div>

                            <h2 className="text-6xl font-black text-blue-400">

                                120+

                            </h2>

                            <p className="mt-4 text-gray-300 text-lg">

                                Global Partnerships

                            </p>

                        </div>

                        <div>

                            <h2 className="text-6xl font-black text-purple-400">

                                2M+

                            </h2>

                            <p className="mt-4 text-gray-300 text-lg">

                                Lives Impacted

                            </p>

                        </div>

                        <div>

                            <h2 className="text-6xl font-black text-orange-400">

                                24/7

                            </h2>

                            <p className="mt-4 text-gray-300 text-lg">

                                Humanitarian Operations

                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}