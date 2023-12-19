import { useEffect, useRef } from 'react'
import './banner.scss'

const Banner = () => {
   const bannerRef = useRef()
   let banner = null
   let offset = 0
   const onChangeRight = () => {
      offset += 960
      if (offset > 1920) {
         offset = 0
      }
      banner.style.left = -offset + 'px'
   }
   const onChangeLeft = () => {
      offset -= 960
      if (offset < 0) {
         offset = 1920
      }
      banner.style.left = -offset + 'px'
   }
   useEffect(() => {
      banner = bannerRef.current
      setInterval(() => {
         onChangeRight()
      }, 4000)
   }, [bannerRef])

   return <div className="banner">
      <button className='btn-slide-left' onClick={banner && onChangeLeft} />
      <div className='banner-block-slider'>
         <div ref={bannerRef} className='banner-block-image'>
            <img className='banner-image' src="/banner.svg" alt="" />
            <img className='banner-image' src="/banner.svg" alt="" />
            <img className='banner-image' src="/banner.svg" alt="" />
         </div>
      </div>
      <button className='btn-slide-right' onClick={onChangeRight} />
   </div>
}

export default Banner