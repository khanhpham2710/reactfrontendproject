import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import FAQ from '../../components/FAQ/FAQ'
import LoginButton from '../../components/LoginButton/LoginButton'

function LandingPage() {
  return (
    <div id="landing_page">
      <header>
        <nav>
        <img src="" alt=""/>
        <Link to="/login">Sign in</Link>
        </nav>
        <slider>
          <h1>Unlimited anime movies, shows and more</h1>
          <p>Watch anywhere. Cancel anytime</p>
          <p>Ready to watch? Enter your email to create or restart your membership</p>
          <LoginButton label="Get Started"/>
        </slider>
        </header>
        <section className='tv'>
          
        </section>
        <section className='mobile'>

        </section>
        <section className='both'>

        </section>
        <section className='kid'>

        </section>
        <FAQ id="FAQ"/>
        <Footer id="footer"/>
    </div>
  )
}

export default LandingPage
