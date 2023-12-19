import { useContext } from "react"
import { CustomContext } from "./context/CustomContext"

const Purchase = () => {
    const { purchase, 
        sumPurchase, 
        showPurchase, 
        setShowPurchase, 
        removePurchase 
    } = useContext(CustomContext);

    let five_percent = parseInt(5 / 100 * sumPurchase)
    const purchaseButtonClick = () => {
        setShowPurchase(false)
        document.body.style = null
    }
    document.addEventListener('keyup', (e) => {
        if (e.key == 'Escape') {
            setShowPurchase(false)
            document.body.style = null
        }
    })

    return showPurchase ? <div className="purchase-bg" onClick={purchaseButtonClick}>
        <div className='purchases-block' onClick={(e) => e.stopPropagation()}>
            <div className="purchases-block-items">
                <div className="purchases-block-title">
                    <span className="purchases-bi-trash">Корзина</span>
                    <button className="purchases-bi-btn" onClick={purchaseButtonClick}>
                        <img src='/public/plus.svg' alt="" />
                    </button>
                </div>
            </div>
            {purchase.length > 0 ? <div className="purchases-block-true" >
                <div className="purchases-block-list">
                    <ul className="purchases-bi-list">
                        {purchase.map(item => <li className="purchases-bi-item" key={item.id}>
                            <div className="purchase-item">
                                <img className="purchases-item-image" src={item.image} alt="" />
                                <div className="purchases-item-title">
                                    <p>{item.title}</p>
                                    <span>{item.cost}</span>
                                </div>
                            </div>
                            <button className="purchases-bi-btn" onClick={() => removePurchase(item)}>
                                <img src="/public/plus.svg" alt="" />
                            </button>
                        </li>
                        )}
                    </ul>
                </div>
                <div className="purchases-block-total">
                    <div className="purchases-tax">
                        <span>Налог 5%</span>
                        <p>{five_percent} руб.</p>
                    </div>
                    <div className="purchases-total">
                        <span>Итого</span>
                        <p>{sumPurchase} руб.</p>
                    </div>
                    <button className="btn checkout-btn">Оформить заказ</button>
                </div>
            </div>
            : <div className="purchases-block-false">
                <img src="/public/trash-box.svg" alt="" />
                <span>Корзина пустая</span>
                <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                <button onClick={purchaseButtonClick} className="btn back-button">Вернуться назад</button>
            </div>}
        </div>
    </div> : null
}

export default Purchase