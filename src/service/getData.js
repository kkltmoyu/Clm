import fetch from '../util/fetch'
// import util from '../util/util'

export const locateSketchy = (cityInfo) =>{
	return fetch('city/sketch',cityInfo)
}

export const getCitiesByChar = () =>{
	return fetch('city/getAllByChar')
}

export const getHotCities = () =>{
	return fetch('city/hotCities')
}

export const searchDestination = (params) =>{
	let url = params !== '' ? 'city/addressFill?' + params : 'city/addressFill'
	return fetch(url)
}