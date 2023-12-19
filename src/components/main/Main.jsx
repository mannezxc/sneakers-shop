import Sneakers from "./sneakers-list/Sneakers"
import Banner from "./banner/Banner"
import './main.scss'

const Main = () => {
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