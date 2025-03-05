

import Header from './Components/Header'
import Slider from './Components/Slider'
import AllProduct from './Components/Product/AllProduct'
import AcSection from './Components/Product/AcSection'
import Refrigerator from './Components/Product/Refrigerator'
import Footer from './Components/Footer'
import { useState } from 'react'



function App() {

 
  const [wishCount, setWishCount] = useState(0)
  const [cartCount, setCartCount] = useState(0)
  const handleWishCount = () => {
    setWishCount(wishCount + 1)
  }
  const handleCartCount = () => {
    setCartCount(cartCount + 1)
  }



  return (
    <>
      <Header wishCount={wishCount} cartCount={cartCount}></Header>
      <Slider></Slider>
      <AllProduct handleWishCount={handleWishCount} handleCartCount={handleCartCount}></AllProduct>
      <AcSection></AcSection>
      <Refrigerator></Refrigerator>
      <Footer></Footer>
    </>
  )
}

export default App
