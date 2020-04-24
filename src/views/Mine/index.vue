<template lang="">
    <div id='main'>
        <Header title='我的'/>
          <div class='box'>
            <input type='text' placeholder='用户名/手机号/Email' />
            <input type='password' placeholder='请输入您的密码' />
            <div class='btn'>
              <button>登陆</button>
            </div>
            <p class='p'>
              <span>立即注册</span>
              <span>找回密码</span>
            </p>
          </div>
        <Tabbar />
    </div>
</template>
<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
  name: 'Mine',
  components: {
    Header,
    Tabbar
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin-top: 50px;
  input {
    width: 100%;
    height: 45px;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    font-size: 14px;
    text-indent: 14px;
  }
  .btn {
    padding: 10px;
    button {
    width: 100%;
    height: 50px;
    background-color: #e54847;
    color: #fff;
    border: 0;
    margin-top: 10px;
    border-radius: 3px;
    font-size: 18px;
   }
  }
  .p {
    padding: 0 5px;
    color: #e54847;
    display: flex;
    justify-content: space-between;
  }
}
</style>
