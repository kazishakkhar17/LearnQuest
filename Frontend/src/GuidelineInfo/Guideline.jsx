import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GuidelineUpdate from '../components/GuidelineUpdate'

function Guideline() {

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <GuidelineUpdate />
            </div>
            <Footer />
        </>
    )
}

export default Guideline
