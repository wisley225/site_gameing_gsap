import { useEffect, useState } from 'react'
import React from 'react'
import Hero from './Hero'
import About from './About'
import Galerie from './Galerie'
import Contact from './Contact'
import Navbar from './Navbar'
import Chargement from './Chargement'
import { Suspense,lazy } from 'react'
const loading=lazy(()=>import('./Chargement'))

function App() {



  return (
    <>

<Suspense fallback={ <Chargement/>}>

<div className=' bg-gray-300'>
<Navbar/>
<Hero/>
<About/>
<Galerie/>
<Contact/>
</div>
</Suspense>



    </>
  )
}

export default App
