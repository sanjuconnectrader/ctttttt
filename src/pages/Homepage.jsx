import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Home/Hero'
import Whythryft from '../components/Home/Whythryft'
import Shoppers from '../components/Home/Shoppers'
import Business from '../components/Home/Business'
import About from '../components/Home/About'
import Pricing from '../components/Home/Pricing'
import Mission from '../components/Home/Mission'
import Join from '../components/Home/Join'
import Footer from '../components/Home/Footer'
import Forshoppers from '../components/Home/Forshoppers'
import Forbusiness from '../components/Home/Forbusiness'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Whythryft />
            <Forshoppers />
            <Forbusiness/>
            <About />
            <Pricing />
            <Mission />
            <Join />
            <Footer />




        </div>
    )
}

export default Homepage