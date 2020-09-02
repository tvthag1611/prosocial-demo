import React from 'react'
import './styles/AboutUs.css'
import SlideCompanion from './components/SlideCompanion'
import SlideSponsor from './components/SlideSponsor'
import clb from './assets/clb.JPG'
import Header from './components/SlideHeader'
import Intro from './components/SlideIntro'
import Activities from './components/SlideActivities'
import Mem from './components/SlideMems'
import Contact from './components/SlideContact'
import Login from './components/SlideLogin'
import Footer from './components/SlideFooter'

export const AboutUs = () => {
    return (
        <div className="Row" id="row">
            <div className="header">
                <Header/>
            </div>

            <div className="view-clb">
                <img src={clb} alt="clb" />
                <a href="https://www.facebook.com/clubproptit" className="view-page" target="_blank" rel="noopener noreferrer" >CLB Lập Trình PTIT</a>
            </div>

            <div className="intro" id="intros">
                {/* <h3 style={{marginLeft: '5%'}}>INTRODUCE</h3> */}
                <Intro/>
            </div>

            <div className="activity" id="activities">
                <div className="activityContent">
                    {/* <h3 style={{ marginLeft: '5%', color:'blue' }}>ACTIVITIES</h3> */}
                    <Activities />
                </div>
                
            </div>

            <div className="member" id="members">
                <div className="memberContent">
                    <h3 style={{ marginLeft: '5%' }}>MEMBERS</h3>
                    <Mem /> 
                </div>
               
            </div>

            <div className="sponsor" id="sponsors">
                <h3>Sponsors</h3>
                <SlideSponsor/>
            </div>
            
            <div className="companion" id="companions">
                <div className="companionContent">
                    <h3>Contributors</h3>
                    <SlideCompanion />
                </div>
                
            </div>
            <div className="Login" id="logins">
                <Login />
            </div>
            
            <div className="footer">
                <Contact/>
                <Footer/>
            </div>
        </div>
    )
}
