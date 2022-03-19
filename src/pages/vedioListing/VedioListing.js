import React from 'react'
import VedioCard from '../../components/cards/vedioCards/VedioCard'
import './vediolisting.css'
import { useVedioData } from '../../context/vedio-data-context'
const VedioListing = () => {
  const { vedio } = useVedioData()

  console.log(vedio)
  return (
    <>
      <div className="vedioListing-cont-sec">
        <div className="vediolisting-heading">Gallery</div>
        <div className="vediolisting-category">
          <span>All</span>
          <span>Fashion</span>
          <span>Beauty</span>
          <span>Clothing</span>
          <span>Fashion Shows</span>
        </div>
        <div className="vedio-cards-cont" >
          {!vedio ? <>
            <img src="https://freefrontend.com/assets/img/css-loaders/loading.gif" alt="load" className='loadImg' />
          </> :
            vedio.map((val, index) => {
              return (
                <VedioCard key={index} vedioData={val} />
              )
            })}


        </div>
      </div>
    </>
  )
}

export default VedioListing