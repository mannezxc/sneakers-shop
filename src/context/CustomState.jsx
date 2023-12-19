import { createContext, useEffect, useState } from "react"
import { SneakersData } from "../servces/sneakers.service"
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
            }, 1000)
        }
        if (localStorage.getItem('purchases') != null) {
            setPurchase(JSON.parse(localStorage.getItem('purchases')))
        }
        fetchData()
    }, [])

    useEffect(() => {
        if (purchase.length > 0) {
            localStorage.setItem('purchases', JSON.stringify(purchase))
        }
    }, [purchase])

    const sumPurchase = purchase.reduce((acum, item) => acum + item.cost, 0)

    const formatCost = new Intl.NumberFormat('ru-Ru', {
        style: 'currency',
        currency: 'RUB'
    })

    const formatSumPurchase = new Intl.NumberFormat('ru-Ru', {
        currency: 'RUB'
    })

    const addFavorite = (product) => {
        setFavorite(prev => [...prev, { ...product }])
    }
    const removeFavorite = (product) => {
        setFavorite(prev => prev.filter(prev => prev.id != product.id))
    }

    const addPurchase = (product) => {
        setPurchase(prev => [...prev, {
            ...product
        }])
    }

    const removePurchase = (product) => {
        setPurchase(prev => prev.filter(prev => prev.id != product.id))
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