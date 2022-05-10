import React from "react";

const Review = ({review}) => {
  const {img, name, location} = review;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          tenetur maiores praesentium numquam error deserunt omnis, modi
          laudantium cupiditate.
        </p>
        <div class="flex items-center gap-">
          <div class="avatar">
            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
              <img src={img} alt=""/>
            </div>
          </div>
          <div>
            <h4 className="text-xl">{name}</h4>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
