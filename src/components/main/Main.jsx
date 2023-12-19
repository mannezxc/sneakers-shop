import { useContext } from "react"
import Banner from "./banner/Banner"
import './main.scss'
import Sneakers from "./sneakers-list/Sneakers"
import SneakersContext from "../../context/CustomState"
import { CustomContext } from "../../context/CustomContext"

const Main = () => {
    const { purchase } = useContext(CustomContext)

    return <>
        <main>
            <div className="container">
                <Banner />
                <Sneakers />
            </div>
        </main>
    </>
}

export default Main