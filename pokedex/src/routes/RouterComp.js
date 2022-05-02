import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage"
import PokedexPage from "../pages/PokedexPage";
import DetailPage from "../pages/DetailPage";


const RouterComp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = {<HomePage />} />
                <Route path="/pokedex" element = {<PokedexPage />} />
                <Route path="/pokemon/:id" element = {<DetailPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterComp; 