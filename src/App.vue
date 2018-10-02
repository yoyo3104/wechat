<template>
<div id="app">
 <button class="userinfo" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">
        去登陆
         
        
        
 </button>
</div>
</template>



<script>
import qcloud from 'wafer2-client-sdk'

export default{

  created () {
    // 调用API从本地缓存中获取数据
    
   console.log('app created and cache logs by setStorageSync');
},

}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.btn{
  color:white;
  background:#EA5A49;
  margin-bottom:10px;
  padding-left:15px;
  padding-right:15px;
  font-size:16px;
  height:40px;
  line-height:40px;
  border-radius:2px;
  width:80%;

}
.btn:active{
  background:#FA5A49;
}
</style>
