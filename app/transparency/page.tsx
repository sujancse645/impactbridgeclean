"use client"

export default function TransparencyPage() {

    return (

        <main className="min-h-screen bg-slate-950 text-white overflow-hidden">

            <section className="relative px-6 py-24">

                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 blur-3xl rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

                <div className="max-w-7xl mx-auto relative z-10">

                    <div className="text-center">

                        <h1 className="text-6xl md:text-7xl font-black">

                            Radical Transparency

                        </h1>

                        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">

                            Real-time accountability systems ensuring every donation
                            creates measurable humanitarian impact.

                        </p>

                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
                        className="mt-20 rounded-[40px] h-[600px] w-full object-cover shadow-2xl"
                    />

                    <div className="grid md:grid-cols-3 gap-10 mt-20">

                        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">

                            <h2 className="text-5xl font-black text-emerald-400">

                                92%

                            </h2>

                            <p className="mt-4 text-gray-300 leading-relaxed">

                                Donations directly fund humanitarian programs and sustainable projects.

                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">

                            <h2 className="text-5xl font-black text-blue-400">

                                Live

                            </h2>

                            <p className="mt-4 text-gray-300 leading-relaxed">

                                Real-time financial tracking and public reporting dashboard.

                            </p>

                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">

                            <h2 className="text-5xl font-black text-orange-400">

                                Global

                            </h2>

                            <p className="mt-4 text-gray-300 leading-relaxed">

                                Audited international operations ensuring maximum trust and accountability.

                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )
}