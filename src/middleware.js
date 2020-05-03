import api from 'services/api'
export const promiseMiddleware= store=> next=>action=>{
    if(isPromise(action.payload)){
        console.log(action)
        action.payload.then((res)=>{
            if(res){
                if(res.constructor === Array){
                    action.payload=res
                    next(action)
                    return
                }
                action.payload=res.data
                next(action)
            }
        })
        .catch(({response})=>{
            action.payload=response.data
            action.error=true
            next(action);
        })
        return
    }
    next(action)
}

export const localStorageMiddleware= store => next =>action=>{
    if(action.type==='LOGIN' || action.type === 'REGISTER'){
        if(action.payload.token){
            sessionStorage.setItem('jwt',action.payload.token)
            api.setHeader(action.payload.token)
        }
    }
    next(action)
}
function isPromise(payload){
    return payload && typeof payload.then==='function'
}