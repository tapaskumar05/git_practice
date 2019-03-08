const GoogleMapsAPI = "https://maps.googleapis.com/maps/api"

const getAddressFromCoords = ({lat, lng}) => {
  const url = `${GoogleMapsAPI}/geocode/json?latlng=${lat},${lng}&key=AIzaSyDFwu1MmuOatqW-283LSCbsxqHcp89ouiw`

  return fetch(url).then(res => res.json()).then(json => {
    return json.results[0].formatted_address
  })
}

export default getAddressFromCoords
