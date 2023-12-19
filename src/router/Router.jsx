import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "../App"

import UnknownLink from "../MissingPage"
import Favorites from "../components/main/favorites/Favorites"
import SneakersState from "../context/CustomState"

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