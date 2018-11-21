import fetch from '../util/fetch'

export const locateSketchy = () =>{
	return fetch('/city/sketch')
}

export const getCitiesLsit = () =>{
	return fetch('city/list')
}