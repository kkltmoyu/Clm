import _ from 'lodash'
let utils = {

}

utils.mapBottomIcons = (routeName,state)=>{
	let iconName=''
	if (routeName === 'Home') {
        iconName = `ios-information-circle${state ? '' : '-outline'}`;
    } else if (routeName === 'Order') {
        iconName = `ios-options${state ? '' : '-outline'}`;
    }
    return iconName
}

//构造request请求
utils.makeRequest = (config) => {
    //url可根据环境配置或者config传入
    const basicUrl = 'http://172.30.113.47:3333'
    let url = basicUrl + '/' + config.url;

    const defaults = {
        method: 'GET',
        // body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        },
        mode: 'cors', // no-cors, cors, *same-origin
        // redirect: 'follow', // manual, *follow, error
        // referrer: 'no-referrer', // *client, no-referrer
    };
    const request = _.merge(defaults, config);
    // const ax = this.$axios(request);
    // return ax;
    delete request['url']
    return fetch(url,request)
}

utils.makeFetch = (config) =>{
    return fetch('http://api.map.baidu.com/place/v2/suggestion?query=天&region=北京市&city_limit=true&output=json&ak=WrXbRe8gO1bFqqMUwj6PHgcnBQBO6Lpj')
    .then(response => response.json())
    .then(responseJson => {
      return responseJson.movies;
    })
    .catch(error => {
      console.error(error);
    });
}

export default utils