import React from 'react'

const Service = ({service}) => {
    const {img, name} = service;
  return (
      //card from daisyui
    <div class="card lg:min-w-lg bg-base-100 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
   
  </div>
</div>
  )
}

export default Service;