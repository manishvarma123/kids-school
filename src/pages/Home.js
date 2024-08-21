import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Strive from '../components/Strive'
import Embark from '../components/Embark'
import Start from '../components/Start'
import Best_School from '../components/Best_School'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Best_School />
        <Start />
        <Strive />
        <Embark />
        <Footer />
    </div>
  )
}

export default Home