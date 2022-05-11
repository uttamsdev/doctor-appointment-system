import React from 'react'

const Service = ({service}) => {
    const {name, slots} = service;

    //card from daisyui
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title text-secondary">{name}</h2>
    <p>
        {
            slots.length > 0 ? <span>{slots[0]}</span>
            : 
            <span className='text-red-500'>No slot Available</span>
        }
    </p>
    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div class="card-actions justify-center">
      <button disabled={slots.length===0} class="btn btn-secondary text-white uppercase">Book Appointment</button>
      {/* slots length 0 hole button disable hobe */}
    </div>
  </div>
</div>
  )
}

export default Service;