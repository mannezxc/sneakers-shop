import { CustomContext } from '../../context/CustomContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import './header.scss'

const Header = () => {
   const { sumPurchase, formatSumPurchase, showPurchase, setShowPurchase } = useContext(CustomContext)

   const addPurchaseButton = () => {
      setShowPurchase(!showPurchase) 
      document.body.style.overflow = 'hidden'
   }

   return (
      <header>
         <div className="hinn">
            <div className="ptit">
               <img style={{ width: '40px', height: '40px', marginRight: '16px' }} src="/logo.jpg" alt="Logo" />
               <div className="logo-name">
                  <h1>SNEAKERS</h1>
                  <p>Магазин лучших кроссовок</p>
               </div>
            </div>
            <div className="hbtns">
               <button className='btn-purchases' onClick={addPurchaseButton}>
                  <img src="/purchases.svg" alt="" />
                  {formatSumPurchase.format(sumPurchase)} руб.
               </button>
               <Link to={'/favorites'}>
                  <img src="/favorites.svg" alt="" />
               </Link>
               <button>
                  <img src="/user.svg" alt="" />
               </button>
            </div>
         </div>
      </header>
   )
}

export default Header