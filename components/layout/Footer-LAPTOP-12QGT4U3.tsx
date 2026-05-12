import Link from "next/link"

export default function Footer() {

    return (

        <footer className="bg-slate-950 text-white border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

                    <div>

                        <h1 className="text-4xl font-black text-emerald-400">

                            ImpactBridge

                        </h1>

                        <p className="mt-6 text-gray-400 leading-relaxed">

                            Transforming communities worldwide through technology,
                            sustainability, healthcare, and humanitarian innovation.

                        </p>

                    </div>

                    <div>

                        <h2 className="text-2xl font-black mb-6">

                            Impact

                        </h2>

                        <div className="space-y-4 text-gray-400">

                            <Link href="/programs/education" className="block hover:text-emerald-400 transition">

                                Education

                            </Link>

                            <Link href="/programs/healthcare" className="block hover:text-emerald-400 transition">

                                Healthcare

                            </Link>

                            <Link href="/programs/water" className="block hover:text-emerald-400 transition">

                                Water Access

                            </Link>

                            <Link href="/programs/digital" className="block hover:text-emerald-400 transition">

                                Sustainability

                            </Link>

                        </div>

                    </div>

                    <div>

                        <h2 className="text-2xl font-black mb-6">

                            Company

                        </h2>

                        <div className="space-y-4 text-gray-400">

                            <Link href="/about" className="block hover:text-emerald-400 transition">

                                About

                            </Link>

                            <Link href="/careers" className="block hover:text-emerald-400 transition">

                                Careers

                            </Link>

                            <Link href="/partners" className="block hover:text-emerald-400 transition">

                                Partners

                            </Link>

                            <Link href="/transparency" className="block hover:text-emerald-400 transition">

                                Transparency

                            </Link>

                        </div>

                    </div>

                    <div>

                        <h2 className="text-2xl font-black mb-6">

                            Newsletter

                        </h2>

                        <p className="text-gray-400">

                            Get global impact stories and updates.

                        </p>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="mt-6 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none"
                        />

                        <button className="mt-4 w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-4 rounded-2xl font-black transition">

                            Subscribe

                        </button>

                    </div>

                </div>

                <div className="border-t border-white/10 mt-20 pt-10 text-center text-gray-500">

                    © 2026 ImpactBridge. All rights reserved.

                </div>

            </div>

        </footer>
    )
}