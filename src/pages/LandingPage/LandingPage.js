import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

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
          <form>
            <input type='email' placeholder='Email address'/>
            <button type='submit'>Get Started</button>
          </form>
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
        <section id='faq'>

        </section>
        <Footer />
    </div>
  )
}

export default LandingPage
