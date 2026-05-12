import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "ImpactBridge",
  description: "Global humanitarian platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable}`}>

        <Navbar />

        <main className="pt-24">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}