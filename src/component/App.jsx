import { useEffect, useState } from 'react'
import React from 'react'
import Hero from './Hero'
import About from './About'
import Galerie from './Galerie'
import Contact from './Contact'
import Navbar from './Navbar'


function App() {



  return (
    <>



<div className=' bg-gray-300'>
<Navbar/>
<Hero/>
<About/>
<Galerie/>
<Contact/>
</div>




    </>
  )
}

export default App
