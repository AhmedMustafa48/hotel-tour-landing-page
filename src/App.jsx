import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Products from './Products'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offers from './components/Offers'
import Plan from './components/Plan'
import Rooms from './components/Rooms'
import ImageSlider from './components/ImageSlider'


function App() {
 const [val, setVal] = useState(0)
  return (
   <div>
    <Navbar />
    <Hero />
    <Offers />
    <Plan />
    <Rooms />
    <ImageSlider />


    {/* <h1>Value is changing in other component</h1>
    <button className='bg-green-500 text-white p-2 rounded-md' onClick={()=> setVal(val + 1)}>click for +1</button>
    <Products value={val} name="Ahmed"/> */}
   </div>
  )
}

export default App
