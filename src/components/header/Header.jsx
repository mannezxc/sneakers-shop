import { useContext } from 'react'
import './header.scss'
import { CustomContext } from '../../context/CustomContext'
import { Link } from 'react-router-dom'

const Header = () => {
   const { purchase, sumPurchase, formatSumPurchase, showPurchase, setShowPurchase } = useContext(CustomContext)

   const addPurchaseButton = () => {
      setShowPurchase(!showPurchase) 
      document.body.style.overflow = 'hidden'
   }

   return (
      <header>
         <div className="hinn">
            <div className="ptit">
               <img style={{ width: '40px', height: '40px', marginRight: '16px' }} src="/public/logo.jpg" alt="Logo" />
               <div className="logo-name">
                  <h1>REACT SNEAKERS</h1>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
            <div className="hbtns">
               <button className='btn-purchases' onClick={addPurchaseButton}>
                  <img src="/public/purchases.svg" alt="" />
                  {formatSumPurchase.format(sumPurchase)} руб.
               </button>
               <Link to={'/favorites'}>
                  <img src="/public/favorites.svg" alt="" />
               </Link>
               <button>
                  <img src="/public/user.svg" alt="" />
               </button>
            </div>
         </div>
         
      </header>
   )
}

export default Header