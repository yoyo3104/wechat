<template>
    <div id="persons">
        

        <div class="userinfo">
        <img class="hahah" :src="userinfo.avatarUrl" alt="">
        <p>{{userinfo.nickName}}</p>
        </div>
        
    <YearProgress></YearProgress>
   <button  v-if='userinfo.openId' @click="scanBook" class="btn">添加图书</button>
<button v-else open-type="getUserInfo" lang="zh_CN" class='btn' @getuserinfo="doLogin">点击登录</button>
<button @click="onShareAppMessage"></button>
    </div>
    
</template>

<script>
  import YearProgress from '../../components/YearProgress.vue'
  import qcloud from 'wafer2-client-sdk'
  import config from '@/config'
  import {get,post,showSuccess} from '@/util'

  export default {
      components:{
      YearProgress
      },
      data() {
          return {
              userinfo:{
                  avatarUrl:'../../../static/img/todo.png',
                  nickName:'登录啊'

              }
          }

      },
 
    methods: {
    async addBook(isbn){
        const res=await post('./weapp/addbook',{
            isbn,
            openId:this.userinfo.openId
        })
        if(res.code==0&& res.data.title){
            showSuccess('添加成功','${res.data.title}添加成功')
        }

    },
    scanBook() {
 wx.scanCode({
  success: (res) => {
    if(res.result){
        this.addBook(res.result)
    }
    console.log(res.result)
  }
})

    },
     loginSuccess (res) {
      showSuccess('登录成功')
      wx.setStorageSync('userinfo', res)
      this.userinfo = res
    },
     doLogin: function () {
        
     qcloud.setLoginUrl('https://uc0ju7rw.qcloud.la/weapp/login')
     const session = qcloud.Session.get()
      if (session) {
        qcloud.loginWithCode({
          success: res => {
            console.log('没过期的登录', res)
            this.loginSuccess(res)
          },
          fail: err => {
            console.error(err)
          }
        })
      } else {
        qcloud.login({
          success: res => {
            console.log('登录成功', res)
            this.loginSuccess(res)
          },
          fail: err => {
            console.error(err)
          }
        })
      }
          
        
      
       
       

    },
  
 onShow () {
    
  },
  
  
 


},
onShareAppMessage: function (res) {

    return {
      title: '来转发啊更多福利',
      path: '/page/user?id=123'
    }
   },
 onShow () {
    wx.showShareMenu()
    let userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  }   
    
}
</script>


<style >

.userinfo{
    margin-top:100rpx;
   
    text-align:center;

}
.hahah{
    width:128rpx;
    height:128rpx;
    margin:20rpx;
    border-radius:50%;
    background:#fff;
    overflow:hidden;
    margin:0 auto;
}

</style>


