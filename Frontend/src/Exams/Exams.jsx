import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Exam from '../components/Exam'

function Exams() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <Exam />
    </div>
    <Footer/>
    </>
  )
}

export default Exams;
