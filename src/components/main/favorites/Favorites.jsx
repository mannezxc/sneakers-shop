import Purchase from "../../../Purchase"
import Header from "../../header/Header"
import FavoritesMaket from "./FavoritesMaket"

const Favorites = () => {
    return <>
        <Purchase />
        <div className="main">
            <div className="block">
                <Header />
                <FavoritesMaket />
            </div>
        </div>
    </>
}

export default Favorites