import React from 'react'
import VedioCard from '../../components/cards/vedioCards/VedioCard'
import './vediolisting.css'
import { useVedioData } from '../../context/vedio-data-context'
const VedioListing = () => {
  const { vedio } = useVedioData()

  
  return (
    <>
      <div className="vedioListing-cont-sec">
        <div className="vediolisting-heading">Gallery</div>
        <div className="vediolisting-category">
          <span>All</span>
          <span>History</span>
          <span>Watch Later</span>
          <span>PlayList</span>
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