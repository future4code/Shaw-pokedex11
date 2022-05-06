import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage";
import DetailPage from "../pages/DetailPage";
import { GlobalState } from "../global/GlobalState";


const RouterComp = () => {
    return (
        <GlobalState>
            <BrowserRouter>
                <Routes>
                    <Route index element = {<HomePage />} />
                    <Route path="/pokedex" element = {<PokedexPage />} />
                    <Route path="/pokemon/:id" element = {<DetailPage />} />
                </Routes>
            </BrowserRouter>
        </GlobalState>
    )
}

export default RouterComp; 