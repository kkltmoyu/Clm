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
    const basicUrl = '192.168.1.100:8082'
    // var basicUrl = 'http://10.75.137.41:8080';
    config.url = basicUrl + config.url;

    const defaults = {
        method: 'get',
        // headers: {
        //     'token': getAccessToken()
        // },
    };
    const request = _.merge(defaults, config);
    // const ax = this.$axios(request);
    // return ax;
    return request;
}

export default utils