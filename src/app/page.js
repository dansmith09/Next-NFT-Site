import Background from './components/Background'
import WalletBtn from './components/WalletBtn'
import NFT from './components/NFT'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Background />
      <WalletBtn />
      <NFT />
    </main>
  )
}
