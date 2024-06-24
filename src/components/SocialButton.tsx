import React from 'react'
import './SocialButton.css'

interface Promp {
    brandName: string;
    brandLink?: string;
}

const SocialButton = ({brandName}:Promp) => {
  
  return (
    <button><img src={'src/assets/icons/' + brandName + '.svg'} />sign in with <span>{brandName}</span></button>
  )
}

export default SocialButton;