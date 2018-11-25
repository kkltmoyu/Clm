import {
    basicUrl
} from '../config/env'

export default async(url = '', data = {}, type = 'GET',needBasicUrl = true) => {
    type = type.toUpperCase();
    if (needBasicUrl)
    	url = basicUrl + '/' + url;

    if (type === 'GET') {
        let dataStr = '';
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    let requestConfig = {
        credentials: 'include',
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors",
        // cache: "force-cache"
        cache: "no-cache"
    }

    if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
            value: JSON.stringify(data)
        })
    }

    try {
        const response = await fetch(url, requestConfig);
        const responseJson = await response.json();
        return responseJson
    } catch (error) {
        throw new Error(error)
    }
}
