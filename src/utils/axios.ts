import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3004';

axios.defaults.timeout = 8000;

//设置post请求头
axios.defaults.headers.post['Content-Type'] = 'Content-Type: application/json';

// 响应拦截器
axios.interceptors.response.use(    
    response => {   
        if (response.status === 200) {            
            return Promise.resolve(response);        
        } else {       
            return Promise.reject(response);        
        }    
    },     
);

export default axios