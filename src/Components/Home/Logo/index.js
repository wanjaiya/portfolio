import './index.scss'
import LogoP from '../../../assets/images/logo-p.png'
import { useRef } from 'react'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoP} alt="P" />
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="114.000000pt"
        height="128.000000pt"
        viewBox="0 0 114.000000 128.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
         className='svg-container'
          transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
          fill="none"
         
        ></g>
      </svg>
    </div>
  )
}

export default Logo
