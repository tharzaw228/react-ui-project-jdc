import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopNavbar from './components/TopNavbar'
import { Feature } from './components/feature'
import { Delivery } from './components/delivery'
import { TopPicks } from './components/topPicks'
import { Meal } from './components/Meal'
import { Categories } from './components/Categories'
import { NewsLetter } from './components/NewsLetter'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TopNavbar/>
      <Feature></Feature>
      <Delivery></Delivery>
      <TopPicks></TopPicks>
      <Meal></Meal>
      <Categories></Categories>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  )
}

export default App
