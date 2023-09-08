import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="" ><BsTwitter /></a>
      </div>
      <div>
        <a href=""><FaFacebookF /></a>
      </div>
      <div>
        <a href=""><BsInstagram /></a>
      </div>
    </div>
  )
}

export default SocialMedia