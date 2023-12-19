import { useEffect, useState } from "react"
import { SneakersData } from "../services/sneakers.service"
import { CustomContext } from "./CustomContext"

const SneakersState = ({ children }) => {
    const [data, setData] = useState([])
    const [filteredSneaker, setFilteredSneaker] = useState([])
    const [purchase, setPurchase] = useState([])
    const [favorite, setFavorite] = useState([])
    const [showPurchase, setShowPurchase] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            setTimeout(async () => {
                const data = await SneakersData.getAll()
                setData(Array.from(data))
                setFilteredSneaker(data)
                setLoading(false)
            }, 500)
        }
        if (localStorage.getItem('purchases') != null) {
            setPurchase(JSON.parse(localStorage.getItem('purchases')))
        }
        if (localStorage.getItem('favorites') != null) {
            setFavorite(JSON.parse(localStorage.getItem('favorites')))
        }
        fetchData()
    }, [])

    const sumPurchase = purchase.reduce((acum, item) => acum + item.cost, 0)

    const formatCost = new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency: 'RUB'
    })

    const formatSumPurchase = new Intl.NumberFormat('ru-Ru', {
        currency: 'RUB'
    })

    const addFavorite = (product) => {
        setFavorite(prev => {
            const fav = [...prev, { ...product }]
            localStorage.setItem('favorites', JSON.stringify(fav))
            return fav
        })
    }
    const removeFavorite = (product) => {
        setFavorite(prev => {
            const fav = prev.filter(prev => prev.id != product.id)
            localStorage.setItem('favorites', JSON.stringify(fav))
            return fav
        })
    }

    const addPurchase = (product) => {
        setPurchase(prev => {
            const pur = [...prev, {...product}]
            localStorage.setItem('purchases', JSON.stringify(pur))
            return pur
        })
    }

    const removePurchase = (product) => {
        setPurchase(prev => {
            const pur = prev.filter(prev => prev.id != product.id)
            localStorage.setItem('purchases', JSON.stringify(pur))
            return pur
        })
    }

    const value = {
        data,
        purchase,
        setPurchase,
        addPurchase,
        removePurchase,
        sumPurchase,
        formatCost,
        formatSumPurchase,
        showPurchase,
        favorite,
        setShowPurchase,
        addFavorite,
        removeFavorite,
        loading,
        setLoading,
        filteredSneaker,
        setFilteredSneaker
    }

    return <CustomContext.Provider value={value}>
        {children}
    </CustomContext.Provider>
}

export default SneakersState