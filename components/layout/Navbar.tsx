export default function Navbar() {

    return (

        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">

            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                <h1 className="text-2xl font-bold text-emerald-600">
                    ImpactBridge
                </h1>

                <div className="hidden md:flex items-center gap-8 font-medium">

                    <a href="/" className="hover:text-emerald-600 transition">
                        Home
                    </a>

                    <a href="/programs" className="hover:text-emerald-600 transition">
                        Programs
                    </a>

                    <a href="/impact" className="hover:text-emerald-600 transition">
                        Impact
                    </a>

                    <a href="/donate" className="hover:text-emerald-600 transition">
                        Donate
                    </a>

                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl transition">

                        Donate Now

                    </button>

                </div>

            </div>

        </nav>
    )
}