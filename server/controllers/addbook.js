
const https= require('https')
module.exports= async(ctx)=>{
   const {isbn,openId}=ctx.request.body
   if (isbn,openId) {
       let url='https://api.douban.com/v2/book/isbn/'+isbn 
       console.log(url)//传进来了
       const bookinfo=await getJSON(url)
       const rate=bookinfo.rating.average
   }
}

function getJSON(url) {
    return new Promise((resolve,reject)=>{
        https.get(url,res=>{
            let urlData=''
            res.on('data',data=>{
                urlData+=data
            })
            res.on('end',data=>{
                const bookinfo=Json.parse(urlData)
                if(bookinfo){
                    resolve(bookinfo)
                }
                reject(bookinfo)
            })
        }) 
            
        })

  
    
}
