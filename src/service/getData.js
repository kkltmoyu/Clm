import fetch from '../util/fetch'
// import util from '../util/util'

export const locateSketchy = () =>{
	return fetch('city/sketch')
}

export const getCitiesByChar = () =>{
	return fetch('city/getAllByChar')
}

export const getHotCities = () =>{
	return fetch('city/hotCities')
}

export const searchDestination = () =>{
	return fetch('city/addressFill')
}