import React from 'react'
import Banner from './Banner';
import Banner2 from './Banner2';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';

function Home() {
  return (
    <div className='px-16'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Banner2></Banner2>
        <MakeAppointment></MakeAppointment>
    </div>
  )
}

export default Home;