import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.facebook.com/detegledane/"><FaFacebookF /></a>
      </div>
      <div>
        <a href="https://www.instagram.com/detegledane/"><BsInstagram /></a>
      </div>
    </div>
  )
}

export default SocialMedia