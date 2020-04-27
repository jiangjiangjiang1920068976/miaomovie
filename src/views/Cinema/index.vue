<template lang="">
    <div id='main'>
        <Header title='喵喵影院'/>
        <div id='content'>
            <div class='cinema_header'>
                <div class='cinema_menu'>
                  <router-link class='cinema_hed' tag='div' to='city'>
                    <span>全城</span>
                    <i class='iconfont icon-triangle'></i>
                  </router-link>
                  <div class='cinema_hed'>
                    <span>品牌</span>
                    <i class='iconfont icon-triangle'></i>
                  </div>
                   <div class='cinema_hed'>
                    <span>特色</span>
                    <i class='iconfont icon-triangle'></i>
                  </div>
              </div>
              </div>
              <router-view></router-view>
          </div>
        <Tabbar />
    </div>
</template>
<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
export default {
  name: 'Cinema',
  components: {
    Header,
    Tabbar
  }
}
</script>
<style lang="scss" scoped>
#content {
  margin-top: 50px;
  .cinema_header {
    position: fixed;
    width: 100%;
    height: 45px;
    background-color: #fff;
  }
}
.cinema_menu {
  display: flex;
  text-align: center;
  height: 45px;
  line-height: 45px;
  z-index: 8000;
  font-size: 15px;
  border-bottom: 0.4px solid #ccc;
  .cinema_hed {
    width: 33.333333%;
  }
}
</style>
