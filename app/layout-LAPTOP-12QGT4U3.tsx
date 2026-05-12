import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import "./globals.css"

import Providers from "@/components/Providers"
import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"


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
  description: "Global Humanitarian Platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans`}
      >


        <Providers>
          <Navbar />

          {children}

          <Footer />
        </Providers>
      </body>
    </html>
  )
}