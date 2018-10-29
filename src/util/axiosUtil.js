const initAxios = (axios) => {
    //axios前置拦截器
    axios.interceptors.request.use((config) => {
        return config;
    }, (error) => {
        // return Promise.reject(error);
    });

    //axios后置拦截器
    axios.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            return Promise.reject(error);
            // this.$router.push('/login');
            // if (error.response) 
            //     window.$Message.error('与服务器连接失败')
            // else
            //     window.$Message.error('与服务器连接失败')
        }
    );
}

export default initAxios
