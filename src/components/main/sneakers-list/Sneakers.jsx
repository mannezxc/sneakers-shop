import { CustomContext } from '../../../context/CustomContext';
import { useContext, useState } from 'react';
import './sneakers.scss'

const Sneakers = () => {
    const { data, 
        purchase,
        addPurchase, 
        formatCost, 
        favorite, 
        addFavorite, 
        removePurchase, 
        loading, 
        removeFavorite,
        filteredSneaker,
        setFilteredSneaker
    } = useContext(CustomContext)
    
    const [value, setValue] = useState('')

    let SNEAKERS = []
    SNEAKERS = data

    const onChange = (e) => {
        setValue(e.target.value.toLowerCase())
        const res = SNEAKERS.filter((sneaker) => {
            return sneaker.title.toLowerCase().includes(value)
        })
        e.target.value.toLowerCase() ? 
        setFilteredSneaker(res) : setFilteredSneaker(data)
    }

    return <div className="sneakers">
        <div className="title-sneakers">
            <span>Все кроссовки</span>
            <input id='search-input' type="text" placeholder='Поиск...' value={value} onChange={onChange} />
        </div>
        <div className='sneakers-block'>
            <ul className='sneakers-list'>
                {loading ? new Array(8).fill(0).map((item, id) => {
                    return <li key={id} className='unload-item'>
                        <div className='unload-con'>
                            <div className='unload-image'>
                                {item.length}
                            </div>
                            <div className='unload-title'>
                                <span />
                                <p />
                            </div>
                            <div className='unload-cost'>
                                <span></span>
                                <p></p>
                            </div>
                        </div>
                    </li>
                }) : filteredSneaker.map(sneaker => {
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
                                    ? <button className='sneaker-purchase-added' onClick={() => removePurchase(sneaker)} />
                                    : <button className='sneaker-purchase-add' onClick={() => addPurchase(sneaker)} />}
                            </div>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </div>
}

export default Sneakers