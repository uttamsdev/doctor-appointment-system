import React from 'react'
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

function Home() {
  return (
    <div className='px-16'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
    </div>
  )
}

export default Home;