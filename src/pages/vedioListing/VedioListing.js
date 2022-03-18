import React from 'react'
import VedioCard from '../../components/cards/vedioCards/VedioCard'
import './vediolisting.css'
const VedioListing = () => {
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
                <VedioCard/>
                <VedioCard/>
                <VedioCard/>
                <VedioCard/>
            </div>
        </div>
    </>
  )
}

export default VedioListing