import React from 'react';

export default function ImageSection() {
  return (
      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
          alt="Background"
        />
      </div>
  )
}
