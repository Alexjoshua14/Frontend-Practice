// Alex Joshua (c) 2022
'use client'

import '../styles/home.css';
import { TypeAnimation } from "react-type-animation";import Image from 'next/image'

export default function Home() {
  return (
    <div className="home">
      <TypeAnimation 
          sequence={[
              "Practicing JS and CSS in React Framework"
          ]}
          wrapper="div"
          cursor={false}
          className="gradientText"
      />
    </div>
  )
}
