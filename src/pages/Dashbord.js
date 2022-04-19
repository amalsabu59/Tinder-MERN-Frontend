import React from 'react'
import Header from '../components/Header';
import SwipeButtons from "../components/SwipeButtons"
import TinderCards from '../components/TinderCards';

const Dashbord = () => {
  return (
    <div>
      <Header/>
      <TinderCards/>
      <SwipeButtons/>
    </div>
  )
}

export default Dashbord