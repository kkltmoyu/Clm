const basicUrl = 'http://172.30.113.47:3333'
// const basicUrl = 'http://192.168.1.101:3333'
const routerMode = 'history';
const bMapAK = 'WrXbRe8gO1bFqqMUwj6PHgcnBQBO6Lpj'

if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){

}

export {
	basicUrl,
	routerMode,
	bMapAK,
}