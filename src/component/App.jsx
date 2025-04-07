import { useState } from 'react'
import React from 'react'
import Hero from './Hero'
import About from './About'
import Galerie from './Galerie'
import Contact from './Contact'

function App() {

  return (
    <>
<div className=' bg-gray-300'>
<Hero/>
<About/>
<Galerie/>
<Contact/>
</div>

    </>
  )
}

export default App
