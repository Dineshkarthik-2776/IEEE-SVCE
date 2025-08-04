import React from 'react'
import './events.css'

import Inug from '../assets/inauguration.jpg'

const Events = () => {
  return (
    <section  className='sec'>
      <h2>Events</h2>
      <div className='events'>

        <div className='event-card'>
          <img src={Inug} alt="Inauguration Event" className='event-img' />
          <div className='event-details'>
            <h2 className='event-title'>Inauguration 2025</h2>
            <p className='event-desc'>Kickstart IEEE SVCE 2025–26 with big reveals, fresh faces & future plans!</p>
            <p className='event-date'>📅 Date: To Be Announced</p>
          </div>
        </div>

        <div className='event-card'>
          <img src={Inug} alt="Inauguration Event" className='event-img' />
          <div className='event-details'>
            <h2 className='event-title'>Inauguration 2025</h2>
            <p className='event-desc'>Kickstart IEEE SVCE 2025–26 with big reveals, fresh faces & future plans!</p>
            <p className='event-date'>📅 Date: To Be Announced</p>
          </div>
        </div>

        <div className='event-card'>
          <img src={Inug} alt="Inauguration Event" className='event-img' />
          <div className='event-details'>
            <h2 className='event-title'>Inauguration 2025</h2>
            <p className='event-desc'>Kickstart IEEE SVCE 2025–26 with big reveals, fresh faces & future plans!</p>
            <p className='event-date'>📅 Date: To Be Announced</p>
          </div>
        </div>
        

      </div>
    </section>

  )
}

export default Events