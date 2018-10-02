<template>
    <div class="progressBar">
    <p>进度条</p>
    <progress :percent="percent" activeColor="#EA5A49" />
    <p>{{year}}年已经过去{{days}}天，{{percent}}%</p>
    <p>现在是{{time}}时{{minute}}分</p>
    </div>
</template>


<script>
export default{

    methods:{
       isLeapYear() {
           const year= new Date().getFullYear()
           if (year % 400 ==0) {
               return true;
           }else if(year % 4==0 && year %100!==0) {
               return  true;
               
           }else{
               return false;
           }

       },
       getDayOfYead() {
           return this.isLeapYear()?366:365

       },


    },
    computed:{
        year(){
            return new Date().getFullYear()
        },
        days(){
            let start= new Date()
            start.setMonth(0)
            start.setDate(1)
            let offset = new Date().getTime()-start.getTime()
            //时间戳是毫秒
            return parseInt(offset/1000/60/60/24)+1

        },
        percent(){
            return (this.days*100/this.getDayOfYead()).toFixed(1)
        },
        time(){
            return new Date().getHours()
        },
        minute(){
            return new Date().getMinutes()
        }

    }

}
    
</script>

<style lang="scss">
  .progressBar{
      text-align:center;
      width:100%;
      margin-bottom:50px;
      progress{
          margin-bottom:10px;
      }
  }  
</style>