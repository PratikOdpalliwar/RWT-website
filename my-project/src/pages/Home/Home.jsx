import React from 'react'
import "./home.css"
import Slider from '../../components/Slider/Slider'
import Scroller from '../../components/Scroller/Scroller'
import Banner from "../../assets/banner.jpg"
import ServicesPage from '../../components/ServicePage/ServicePage'
import OurServices from '../../components/service2/Service2'
import HeroSection from '../../comp2/hero-section/HeroSection'



const Home = () => {
  return (
    <>
    <div className='relative -z-0'>
{/* <img
className='h-screen w-full'
src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}
<HeroSection/>
    </div>

<div>
  <ServicesPage/>
</div>

<div>
  <OurServices/>
</div>



    {/* <div>
     <Scroller/>
    </div> */}

     {/* <div className="ripple-background">
      <div className="circle xxlarge shade1"></div>
      <div className="circle xlarge shade2"></div>
      <div className="circle large shade3"></div>
      <div className="circle medium shade4"></div>
      <div className="circle small shade5"></div> 
    </div>  */}
    </>
  )
}

export default Home
