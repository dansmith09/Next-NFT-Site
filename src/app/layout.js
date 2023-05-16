import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AlphaBink NFT | Making ETH Staking Fun!',
  description: 'AlphaBink is an NFT project that leverages Ethereum’s staking yields to provide a thrilling experience for all token holders - perpetually!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
