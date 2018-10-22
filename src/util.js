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

export default utils