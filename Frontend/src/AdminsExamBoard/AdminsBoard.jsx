import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminExamBoard from '../components/AdminExamBoard'

function AdminsBoard() {

  return (
    <>
    <Navbar/>
    <div className="min-h-screen">
    <AdminExamBoard />
    </div>
    <Footer/>
    </>
  )
}

export default AdminsBoard;
