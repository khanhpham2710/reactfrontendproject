import React from 'react'
import "./NotFound.css"
import assets from '../../assets/assets'
import Header from '../../components/Header/Header'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()

  return (
    <>
      <div class="hero-banner">
        <Header />
        <div class="hero-banner__title" aria-hidden="true">404 Not Found</div>
        <img class="hero-banner__image" src={assets.replace} />
        <h1 class="hero-banner__title hero-banner__stroked-title">404 Not Found</h1>
      </div>
    </>
  )
}

export default NotFound
