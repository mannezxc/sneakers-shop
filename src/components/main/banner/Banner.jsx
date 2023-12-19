import './banner.scss'

const Banner = () => {
   const banner = document.querySelector('.banner-block-image')
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

   return <div className="banner">
      <button className='btn-slide-left' onClick={onChangeLeft} />
      <div className='banner-block-slider'>
         <div className='banner-block-image'>
            <img className='banner-image' src="/public/banner.svg" alt="" />
            <img className='banner-image' src="/public/banner.svg" alt="" />
            <img className='banner-image' src="/public/banner.svg" alt="" />
         </div>
      </div>
      <button className='btn-slide-right' onClick={onChangeRight} />
   </div>
}

export default Banner

{/* <img className='banner-sponsors' src="/public/sponsor-logo.png" alt="" />
      <div className='banner-buy'>
         <div className='banner-title'>
            <p className='banner-stan'>Stan Smith<span>,</span></p>
            <p>Forever!</p>
         </div>
         <button className='buy-button'>Купить</button>
      </div>
      <div className='banner-image'>
         <img src="/public/banner-image.jpg" alt="" />
      </div> */}