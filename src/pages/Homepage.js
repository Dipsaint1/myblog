import React from 'react';
import {  Herosection, Posts } from '../components/Components';

const Homepage = () => {
  return (
    <main id='homepage'>
      {/* <Navbar /> */}
      <Herosection />
      <Posts />
    </main>
  )
}

export default Homepage