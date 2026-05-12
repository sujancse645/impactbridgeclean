"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function HomePage() {

  const programs = [

    {
      slug: "education",
      title: "Rural Education Initiative",
      category: "Education",
      country: "Kenya",
      image:
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop",
      description:
        "Providing smart classrooms, mentorship programs, and digital learning opportunities.",
    },

    {
      slug: "healthcare",
      title: "Rural Healthcare Access",
      category: "Healthcare",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      description:
        "Delivering mobile healthcare clinics and emergency support services.",
    },

    {
      slug: "water",
      title: "Clean Water Mission",
      category: "Water Access",
      country: "Brazil",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Creating sustainable water systems for underserved communities.",
    },

    {
      slug: "women",
      title: "Women Empowerment Network",
      category: "Community",
      country: "South Africa",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Empowering women through entrepreneurship and leadership training.",
    },

    {
      slug: "digital",
      title: "Digital Education Initiative",
      category: "Technology",
      country: "Singapore",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Building AI-powered education systems and coding platforms.",
    },

    {
      slug: "climate",
      title: "Climate Sustainability Project",
      category: "Environment",
      country: "Norway",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Driving renewable energy innovation and environmental protection.",
    },
  ]

  return (

    <main className="min-h-screen bg-[#030712] text-white overflow-hidden">

      {/* BACKGROUND EFFECTS */}

      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-emerald-500/20 blur-3xl rounded-full"></div>

      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      {/* HERO SECTION */}

      <section className="relative min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-6 py-3 rounded-full backdrop-blur-xl">

              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>

              <span className="text-sm font-semibold tracking-wide">

                GLOBAL HUMANITARIAN NETWORK

              </span>

            </div>

            <h1 className="mt-10 text-6xl md:text-8xl font-black leading-tight">

              Transforming

              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Millions
              </span>

              <br />

              Of Lives Worldwide

            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-2xl">

              ImpactBridge connects donors, volunteers, and organizations
              through technology-driven humanitarian programs focused on
              education, healthcare, climate sustainability, and global innovation.

            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">

              <Link href="/programs">

                <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition duration-300 px-10 py-5 rounded-2xl text-lg font-bold shadow-2xl">

                  Explore Programs

                </button>

              </Link>

              <Link href="/donate">

                <button className="border border-white/20 hover:bg-white/10 transition px-10 py-5 rounded-2xl text-lg font-bold backdrop-blur-xl">

                  Donate Now

                </button>

              </Link>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-8 mt-20">

              <div>

                <h2 className="text-5xl font-black text-emerald-400">

                  120K+

                </h2>

                <p className="mt-2 text-gray-400">

                  Lives Impacted

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-cyan-400">

                  45+

                </h2>

                <p className="mt-2 text-gray-400">

                  Countries

                </p>

              </div>

              <div>

                <h2 className="text-5xl font-black text-pink-400">

                  $8M+

                </h2>

                <p className="mt-2 text-gray-400">

                  Donations Raised

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT GLOBE SECTION */}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

            <motion.img
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              src="https://cdn-icons-png.flaticon.com/512/4149/4149670.png"
              className="relative z-10 w-[500px] drop-shadow-[0_0_50px_rgba(16,185,129,0.6)]"
            />

            {/* FLOATING CARDS */}

            <div className="absolute top-10 left-0 bg-white/10 border border-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl">

              <p className="text-sm text-gray-300">

                Recent Donation

              </p>

              <h3 className="mt-2 text-2xl font-bold">

                $25,000

              </h3>

              <p className="mt-1 text-emerald-400">

                Kenya Education Program

              </p>

            </div>

            <div className="absolute bottom-10 right-0 bg-white/10 border border-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl">

              <p className="text-sm text-gray-300">

                Active Volunteers

              </p>

              <h3 className="mt-2 text-2xl font-bold">

                8,500+

              </h3>

              <p className="mt-1 text-cyan-400">

                Across 45 Countries

              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* LIVE DONATIONS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-16">

            <div>

              <span className="bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold">

                LIVE DONATIONS

              </span>

              <h2 className="mt-6 text-5xl font-black">

                Global Impact Activity

              </h2>

            </div>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                amount: "$12,500",
                area: "Healthcare",
                country: "India",
              },
              {
                amount: "$18,000",
                area: "Education",
                country: "Kenya",
              },
              {
                amount: "$9,200",
                area: "Water Access",
                country: "Brazil",
              },
            ].map((donation, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[32px]"
              >

                <h3 className="text-5xl font-black text-emerald-400">

                  {donation.amount}

                </h3>

                <p className="mt-4 text-2xl font-bold">

                  {donation.area}

                </p>

                <p className="mt-2 text-gray-400">

                  {donation.country}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED PROGRAMS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="bg-white/10 border border-white/10 px-6 py-3 rounded-full text-sm font-bold">

              FEATURED PROGRAMS

            </span>

            <h2 className="mt-8 text-6xl font-black">

              Creating Global Impact

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-24">

            {programs.map((program, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -15 }}
                className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[36px] overflow-hidden shadow-2xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={program.image}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-10">

                  <div className="flex justify-between items-center">

                    <span className="bg-emerald-500/20 text-emerald-400 px-5 py-2 rounded-full text-sm font-semibold">

                      {program.category}

                    </span>

                    <span className="text-gray-400">

                      {program.country}

                    </span>

                  </div>

                  <h3 className="mt-8 text-4xl font-black leading-tight">

                    {program.title}

                  </h3>

                  <p className="mt-6 text-gray-300 leading-relaxed">

                    {program.description}

                  </p>

                  <div className="mt-10">

                    <Link href={`/programs/${program.slug}`}>

                      <button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:scale-105 transition duration-300 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl">

                        View Details →

                      </button>

                    </Link>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </main>
  )
}