import Navbar from './components/Navbar'
import MainBoard from './components/MainBoard'
import HeaderBox from './components/HeaderBox'

export default function Home() {
  return (
    <main className="flex items-center justify-between ">
      <div class="w-1/4 border-r-4 h-screen ">
        <HeaderBox />
        <Navbar />
      </div>

      <MainBoard />
    </main>
  )
}
