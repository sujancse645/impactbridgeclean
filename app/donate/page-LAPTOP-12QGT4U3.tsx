"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function DonatePage() {

    const [loading, setLoading] = useState(false)

    const [form, setForm] = useState({
        name: "",
        email: "",
        amount: "",
        message: "",
    })

    async function handleSubmit(e: any) {

        e.preventDefault()

        setLoading(true)

        setLoading(false)

        toast.success("Form Working Successfully!")
    }

    return (

        <main className="min-h-screen bg-slate-950 text-white overflow-hidden relative py-24 px-6">

            <Toaster position="top-right" />

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto relative z-10"
            >

                <div className="text-center">

                    <span className="bg-emerald-500/20 text-emerald-400 px-6 py-3 rounded-full text-sm font-semibold">

                        DONATE TODAY

                    </span>

                    <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">

                        Change Lives With

                        <span className="text-emerald-400">
                            {" "}Every Contribution
                        </span>

                    </h1>

                    <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">

                        Every contribution creates measurable impact across global communities.

                    </p>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-24">

                    <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[36px] p-10 shadow-2xl">

                        <h2 className="text-4xl font-bold">

                            Donation Impact

                        </h2>

                        <div className="space-y-8 mt-10">

                            <div className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition">

                                <div className="flex justify-between items-center">

                                    <div>

                                        <h3 className="text-3xl font-bold">$25</h3>

                                        <p className="text-gray-400 mt-2">
                                            School supplies for children
                                        </p>

                                    </div>

                                    <div className="text-5xl">📚</div>

                                </div>

                            </div>

                            <div className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition">

                                <div className="flex justify-between items-center">

                                    <div>

                                        <h3 className="text-3xl font-bold">$50</h3>

                                        <p className="text-gray-400 mt-2">
                                            Emergency healthcare kits
                                        </p>

                                    </div>

                                    <div className="text-5xl">❤️</div>

                                </div>

                            </div>

                            <div className="bg-white/5 rounded-3xl p-8 hover:bg-white/10 transition">

                                <div className="flex justify-between items-center">

                                    <div>

                                        <h3 className="text-3xl font-bold">$100</h3>

                                        <p className="text-gray-400 mt-2">
                                            Clean water infrastructure
                                        </p>

                                    </div>

                                    <div className="text-5xl">🚰</div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white text-slate-900 rounded-[36px] p-10 shadow-2xl"
                    >

                        <h2 className="text-4xl font-bold">

                            Make a Donation

                        </h2>

                        <div className="mt-10 space-y-6">

                            <input
                                required
                                value={form.name}
                                onChange={(e) =>
                                    setForm({ ...form, name: e.target.value })
                                }
                                placeholder="Full Name"
                                className="w-full border border-gray-200 px-6 py-5 rounded-2xl outline-none focus:border-emerald-500"
                            />

                            <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                placeholder="Email Address"
                                className="w-full border border-gray-200 px-6 py-5 rounded-2xl outline-none focus:border-emerald-500"
                            />

                            <input
                                required
                                type="number"
                                value={form.amount}
                                onChange={(e) =>
                                    setForm({ ...form, amount: e.target.value })
                                }
                                placeholder="Donation Amount"
                                className="w-full border border-gray-200 px-6 py-5 rounded-2xl outline-none focus:border-emerald-500"
                            />

                            <textarea
                                required
                                rows={5}
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                placeholder="Message"
                                className="w-full border border-gray-200 px-6 py-5 rounded-2xl outline-none focus:border-emerald-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl text-lg font-semibold transition shadow-lg"
                            >

                                {loading ? "Sending..." : "Complete Donation"}

                            </button>

                        </div>

                    </form>

                </div>

            </motion.div>

        </main>
    )
}