import { BrowserRouter, Route, Routes } from "react-router-dom"
import Favorites from "../components/main/favorites/Favorites"
import SneakersState from "../context/CustomState"
import UnknownLink from "../MissingPage"
import App from "../App"

const Router = () => {
    return (
        <SneakersState>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={App} />
                    <Route path="/favorites" Component={Favorites} />
                    <Route path="/:id/purchases" />

                    <Route path="*" Component={UnknownLink} />
                </Routes>
            </BrowserRouter>
        </SneakersState>
    )
}

export default Router