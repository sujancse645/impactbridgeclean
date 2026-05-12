"use client"

import { useParams } from "next/navigation"

export default function ImpactPage() {
    const params = useParams()
    const slug = params.slug

    const data = {
        "unicef": {
            title: "Child Welfare Impact",
            metrics: ["120K+ Children Supported", "45K Vaccinations", "800+ Schools Improved"],
        },
        "who": {
            title: "Healthcare Transformation",
            metrics: ["70+ Communities", "500+ Health Camps", "200+ Clinics Supported"],
        },
        "google-for-nonprofits": {
            title: "Digital Education Impact",
            metrics: ["15K+ Students", "120 AI Classrooms", "50+ Training Programs"],
        },
        "un-women": {
            title: "Women Empowerment Impact",
            metrics: ["8.5K+ Women Empowered", "12 Countries", "300+ Startups Created"],
        },
        "water-org": {
            title: "Clean Water Impact",
            metrics: ["350+ Water Systems", "90K+ Families", "40+ Villages Covered"],
        },
        "tesla-energy": {
            title: "Renewable Energy Impact",
            metrics: ["40+ Solar Projects", "25 Schools Powered", "10 Hospitals Electrified"],
        },
    }

    const info = data[slug]

    if (!info) {
        return <div className="text-white p-10">No impact data found</div>
    }

    return (
        <main className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-5xl font-black text-blue-400">
                {info.title}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {info.metrics.map((m, i) => (
                    <div
                        key={i}
                        className="bg-white/5 p-8 rounded-2xl border border-white/10"
                    >
                        <h2 className="text-2xl font-bold text-emerald-400">
                            {m}
                        </h2>
                    </div>
                ))}
            </div>

        </main>
    )
}