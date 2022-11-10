import React from 'react'
import icon from '/icons/chevron-small.svg'
import '../App.css'
import { car,carInfoProp } from '../interfaces'

const CarInfoCard = ({info}:carInfoProp) => {
  return (
    <div className='card'>
      <div className='body-type-section'>
        <span className="body-type">{info.bodyType}</span>
      </div>
      <div className='body-type-section'>
        <span className='car-name'>{info.modelName}</span>
        <span className='model-type'>{info.modelType}</span>
      </div>
      <div className='image-section'>
      <img src={info.imageUrl} className='image' />
      </div>
      <div className="option">
        <div className="">
          <span className="">LEARN</span>
          <div className='option-item'>
            <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 1.5l4 4-4 4" fill="none" stroke="#1c6bba" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"></path>
            </svg>
          </div>
        </div>
        <div className="">
          <span className="">SHOP</span>
          <div className="option-item">
          <svg viewBox="0 0 11 11" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 1.5l4 4-4 4" fill="none" stroke="#1c6bba" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round"></path>
              </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarInfoCard