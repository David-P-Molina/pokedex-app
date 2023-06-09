export const baseURL = 'https://pokeapi.co/api/v2/'

export const constructPokeObject = (pokeInfo, index) => {
    let pokeObject = {
        height: pokeInfo['height'],
        weight: pokeInfo['weight'],
        id: pokeInfo['id'],
        key: index,
    }; //construct necessary info, type, evolutions, description, etc.
    return pokeObject
}

export const generateDamageTypes = ((damageInfo, propertyKey) => {
    if( !damageInfo[propertyKey] || damageInfo[propertyKey].length === 0) return <span>None</span>
  const damageInfoList = damageInfo[propertyKey].map((item) => (
    <p key={item.name}>{item.name}</p>
    )
  )
  return damageInfoList
})