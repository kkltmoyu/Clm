import fetch from '../util/fetch'
// import util from '../util/util'

export const locateSketchy = () =>{
	return fetch('city/sketch')
	// return util.makeRequest({
	// 	url:'city/sketch'
	// })
}

export const getCitiesByChar = () =>{
	return fetch('city/getAllByChar')
}