import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdmissionUpdate from '../components/AdmissionUpdate'

function Admission() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <AdmissionUpdate />
    </div>
    <Footer/>
    </>
  )
}

export default Admission
