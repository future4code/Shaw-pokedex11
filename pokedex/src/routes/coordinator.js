export const goToHomePage = (navigate) => {
    navigate("/")
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToPokeDexPage = (navigate) => {
    navigate("/pokedex")
}

export const goToPokemonDetailPage = (navigate, id) => {
    navigate(`/pokemon/${id}`)
}