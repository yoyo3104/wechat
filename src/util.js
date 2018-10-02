//工具函数库
//http的get工具函数库
import config from './config'
export function get(url,data){
    return request(url,'GET',data)
}
export function post(url,data){
    return request(url,'POST',data)
}
//import {get} from './utils
//async created(){
  //  const res =await .get('/wwdd')
  //  console.log(djsklfljds)
//}


export function showSuccess(text){
    wx.showToast({
        title:text,
        icon:'success'
    })
}
export function request(url,data,method) { 
    return new Promise((resolve,reject)=>{
        wx.request({
            data,
            url:'https://uc0ju7rw.qcloud.la'+url,
            method,
            success:function(res){
                if (res.data.code==0) {
                    resolve(res.data.data)
                    
                }else{
                    reject(res.data)
                }
            }
        })
    })
 }

