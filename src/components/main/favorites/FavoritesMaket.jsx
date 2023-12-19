import { useContext } from 'react'
import '../../main/main.scss'
import './favorites.scss'
import '../sneakers-list/sneakers.scss'
import { CustomContext } from '../../../context/CustomContext'
import { Link } from 'react-router-dom'

const FavoritesMaket = () => {
    const { data, purchase, addPurchase, formatCost, favorite, addFavorite, removeFavorite } = useContext(CustomContext)

    return <main>
        <div className="container">
            {favorite.length > 0 ? <div className='favorites-true'>
                <div className='favorites-title'>
                    <Link className='back-btn' to={'/'} />
                    <span>Мои закладки</span>
                </div>
                <ul className='sneakers-list'>
                    {favorite.map(sneaker => {
                        return <li key={sneaker.id} className='sneakers-item'>
                            <div className='sneaker-con'>
                                <div className='sneaker-image'>
                                    {favorite.findIndex(product => product.id == sneaker.id) > -1
                                        ? <button className='favorite-icon-btn-added' onClick={() => removeFavorite(sneaker)} />
                                        : <button className='favorite-icon-btn-add' onClick={() => addFavorite(sneaker)} />}
                                    <img src={sneaker.image} alt="" />
                                </div>
                                <p className='sneaker-name'>{sneaker.title}</p>
                                <div className='sneaker-cost-block'>
                                    <div className='sneaker-cost'>
                                        <p>ЦЕНА:</p>
                                        <span>{formatCost.format(sneaker.cost)}</span>
                                    </div>
                                    {purchase.findIndex(product => product.id == sneaker.id) > -1
                                        ? <button className='sneaker-purchase-added' onClick={() => addPurchase(sneaker)} />
                                        : <button className='sneaker-purchase-add' onClick={() => addPurchase(sneaker)} />}

                                </div>
                            </div>
                        </li>
                    })}
                </ul>
            </div> :
                <div className='favorites-false'>
                    <img src="/public/smile-plead.svg" alt="" />
                    <span>Закладок нет :(</span>
                    <p>Вы ничего не добавляли в закладки</p>
                    <Link to={'/'} className=''>Вернуться назад</Link>
                </div>}


        </div>
    </main>
}

export default FavoritesMaket