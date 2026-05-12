"use client"

import { useEffect, useState } from "react"

const messages = [

    "❤️ Priya donated $50",
    "🌍 Canada funded clean water",
    "📚 120 students enrolled",
    "🚰 New water project completed",
    "🌱 Sustainability campaign launched",

]

export default function LiveDonationFeed() {

    const [message, setMessage] = useState(messages[0])

    useEffect(() => {

        const interval = setInterval(() => {

            const random =
                messages[Math.floor(Math.random() * messages.length)]

            setMessage(random)

        }, 3000)

        return () => clearInterval(interval)

    }, [])

    return (

        <div className="fixed bottom-6 right-6 z-50 bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl px-8 py-5 rounded-3xl animate-bounce">

            <p className="font-semibold text-slate-800">

                {message}

            </p>

        </div>
    )
}