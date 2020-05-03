import axios from 'axios'
const API_URL="https://rest-api.jubelio.com"

const request={
    get: (arg)=>(axios.get(`${API_URL}/${arg}`)),
    post: (resource,param)=>(axios.post(`${API_URL}/${resource}`,param)),
    delete:(resource)=>(axios.delete(`${API_URL}/${resource}`))
}
const auth={
    current:()=>
        request.get('/user'),
    register:(username,email,password)=>
        request.post('users',{user:{username,email,password}}),
    login:(email,password)=>
        request.post('login',{email,password})    
}
const common={
    getUserInfo: ()=>{
        return request.get('sales/pos/v2/userInfo')
    },
    getPosSettings: ()=>{
        return request.get('sales/pos/v2/settings')
    }
}
const sale = {
    getLocationItems: ()=>{
        return request.get('sales/pos/v2/locations/-1/items?page=1&pageSize=50')
    },
    getLocationItemsByQuery: (query)=>{
        return request.get(`sales/pos/v2/locations/-1/items?q=${query}`)
    },
    getPromotionsByLocations: ()=>{
        return request.get('sale/pos/v2/locations/-1/promotions')
    },
    getDiscountsByLocations: ()=>{
        return request.get('sale/pos/v2/locations/-1/discounts')
    }
}
const setHeader=(token)=>{
    axios.defaults.headers.common['Authorization'] = `${token}`;
}
const api={
    auth,
    common,
    sale,
    setHeader
}
export default api