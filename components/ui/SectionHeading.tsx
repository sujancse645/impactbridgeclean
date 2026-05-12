"use client"

import { motion } from "framer-motion"

export default function SectionHeading({
    badge,
    title,
    highlight,
    description,
}: {
    badge: string
    title: string
    highlight: string
    description: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
        >
            <span className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-semibold">
                {badge}
            </span>

            <h2 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
                {title}

                <span className="text-emerald-600">
                    {" "}{highlight}
                </span>
            </h2>

            <p className="mt-8 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {description}
            </p>
        </motion.div>
    )
}