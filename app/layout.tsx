import type { Metadata } from 'next'
import { Fira_Code, Inter, Raleway } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })
const firaCode = Fira_Code({ subsets: ['latin'] })
const raleway = Raleway({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'THink',
  description: 'A Blog designed by creator sohail ahmed',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className} >
          <Header/>
              {children}
          <Footer/>
      </body>
    </html>
  )
}
