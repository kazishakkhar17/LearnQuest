import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Freebook/>
    <div className="flex justify-center items-center space-x-4">
  <a href="https://admission.iutoic-dhaka.edu/assets/admission/2016-2017.pdf" target="_blank" rel="noopener noreferrer">
    <button className="cursor-pointer px-4 py-2 rounded-full border-2 hover:bg-green-500 hover:text-white duration-200">
      Preview Question 2016-17
    </button>
  </a>

  <a href="https://admission.iutoic-dhaka.edu/assets/admission/2017-2018.PDF" target="_blank" rel="noopener noreferrer">
    <button className="cursor-pointer px-4 py-2 rounded-full border-2 hover:bg-green-500 hover:text-white duration-200">
      Preview Question 2017-18
    </button>
  </a>
</div>



    <Footer/>

    
    
    </>
  )
}

export default Home
