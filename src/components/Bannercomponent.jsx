import React from 'react';
import Header from './Header';
import Bannersection from './Bannersection';

const Bannercomponent = () => {
  return (
    <section className='bannerSection'>
        <div className='container-fluid'>
        <Header/>
        {/* <Bannersection/> */}
        </div>
    </section>
  )
}

export default Bannercomponent