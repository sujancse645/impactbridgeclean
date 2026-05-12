"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <Link
                    href="/"
                    className="text-3xl font-black text-emerald-600"
                >
                    ImpactBridge
                </Link>

                <div className="flex items-center gap-6 text-gray-700 font-medium">

                    <Link href="/" className="hover:text-emerald-600 transition">
                        Home
                    </Link>

                    <Link href="/programs" className="hover:text-emerald-600 transition">
                        Programs
                    </Link>

                    <Link href="/impact" className="hover:text-emerald-600 transition">
                        Impact
                    </Link>

                    <Link href="/partners" className="hover:text-emerald-600 transition">
                        Partners
                    </Link>

                    <Link href="/about" className="hover:text-emerald-600 transition">
                        About
                    </Link>

                    <Link
                        href="/donate"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-xl transition"
                    >
                        Donate
                    </Link>

                </div>

            </div>

        </nav>
    )
}