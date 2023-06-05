export const baseURL = 'https://pokeapi.co/api/v2/'

export const constructPokeObject = (pokeInfo, index) => {
    let pokeObject = {
        height: pokeInfo['height'],
        weight: pokeInfo['weight'],
        // types: [pokeInfo.types[0], pokeInfo.types[1] || null],
        id: pokeInfo['id'],
        // img: pokeInfo.sprites.versions.generation-viii.icons.front_default,
        key: index,
    }; //construct necessary info, type, evolutions, description, etc.
}