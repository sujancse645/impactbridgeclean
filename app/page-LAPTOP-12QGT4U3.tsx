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
        "Providing smart classrooms, mentorship programs, and digital learning opportunities for underserved children.",
    },

    {
      slug: "healthcare",
      title: "Rural Healthcare Access",
      category: "Healthcare",
      country: "India",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop",
      description:
        "Delivering mobile clinics, emergency care, and healthcare awareness to remote villages.",
    },

    {
      slug: "water",
      title: "Clean Water Mission",
      category: "Water Access",
      country: "Brazil",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
      description:
        "Creating sustainable water systems and safe drinking water infrastructure.",
    },

    {
      slug: "women",
      title: "Women Empowerment Network",
      category: "Community",
      country: "South Africa",
      image:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
      description:
        "Helping women through leadership training, entrepreneurship, and digital literacy.",
    },

    {
      slug: "digital",
      title: "Digital Education Initiative",
      category: "Technology",
      country: "Singapore",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      description:
        "Building AI-powered learning systems and future-ready coding education.",
    },

    {
      slug: "climate",
      title: "Climate Sustainability Project",
      category: "Environment",
      country: "Norway",
      image:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200&auto=format&fit=crop",
      description:
        "Driving renewable energy innovation and protecting ecosystems worldwide.",
    },
  ]

  return (

    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative py-32 px-6">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-300/20 blur-3xl rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold tracking-wide">

              GLOBAL HUMANITARIAN PLATFORM

            </span>

            <h1 className="mt-10 text-6xl md:text-8xl font-black leading-tight text-slate-900">

              Building A Better

              <span className="text-emerald-600">
                {" "}Future
              </span>

            </h1>

            <p className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">

              Empowering communities through education, healthcare,
              sustainability, innovation, and humanitarian action.

            </p>

            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

              <Link href="/programs">

                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl transition hover:scale-105 duration-300">

                  Explore Programs

                </button>

              </Link>

              <Link href="/donate">

                <button className="border-2 border-slate-300 hover:bg-slate-100 px-10 py-5 rounded-2xl text-lg font-bold transition">

                  Donate Now

                </button>

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FEATURED PROGRAMS */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <span className="bg-emerald-100 text-emerald-700 px-6 py-3 rounded-full text-sm font-bold">

              FEATURED PROGRAMS

            </span>

            <h2 className="mt-8 text-5xl md:text-6xl font-black text-slate-900">

              Creating Global Impact

            </h2>

            <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">

              Discover innovative humanitarian programs transforming lives worldwide.

            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20">

            {programs.map((program, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-[36px] overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-2xl transition duration-500"
              >

                <div className="overflow-hidden">

                  <img
                    src={program.image}
                    className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-10">

                  <div className="flex items-center justify-between">

                    <span className="bg-emerald-100 text-emerald-700 px-5 py-2 rounded-full text-sm font-semibold">

                      {program.category}

                    </span>

                    <span className="text-slate-500 font-medium">

                      {program.country}

                    </span>

                  </div>

                  <h3 className="mt-8 text-4xl font-black text-slate-900 leading-tight">

                    {program.title}

                  </h3>

                  <p className="mt-6 text-slate-600 text-lg leading-relaxed">

                    {program.description}

                  </p>

                  <div className="mt-10 flex items-center justify-between">

                    <div className="flex -space-x-3">

                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-12 h-12 rounded-full border-4 border-white"
                      />

                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        className="w-12 h-12 rounded-full border-4 border-white"
                      />

                      <img
                        src="https://randomuser.me/api/portraits/women/68.jpg"
                        className="w-12 h-12 rounded-full border-4 border-white"
                      />

                    </div>

                    <Link href={`/programs/${program.slug}`}>

                      <button className="bg-gradient-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-bold shadow-lg transition hover:scale-105 duration-300">

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