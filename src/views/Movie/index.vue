<template lang="">
    <div id='main'>
          <Header></Header>
          <div id='content'>
            <div class='header'>
                <div class='movie_menu'>
                  <router-link class='city_name' tag='div' to='city'>
                    <span>大连</span>
                    <i class='iconfont icon-triangle'></i>
                  </router-link>
                  <div class='hot_switch'>
                    <router-link class='hot_item_active' tag='div' to='nowPlaying'>正在热映</router-link>
                    <router-link class='hot_item' tag='div' to='comingSoon'>即将上映</router-link>
                  </div>
                  <router-link class='search_entry' tag='div' to='search'>
                    <i class='iconfont icon-search'></i>
                  </router-link>
              </div>
              </div>
              <router-view></router-view>
              <!-- <NowPlaying></NowPlaying> -->
          </div>
        <Tabbar />
    </div>
</template>
<script>
import Header from '@/components/Header'
import Tabbar from '@/components/Tabbar'
// import NowPlaying from '@/components/NowPlaying'
export default {
  name: 'Movie',
  components: {
    Header,
    Tabbar
    // NowPlaying
  }
}
</script>
<style lang="scss" scoped>
#content {
  margin-top: 50px;
  .header {
    position: fixed;
    width: 100%;
    background-color: #fff;
  }
}
.movie_menu {
  display: flex;
  text-align: center;
  height: 45px;
  line-height: 45px;
  z-index: 8000;
  font-size: 15px;
  border-bottom: 0.4px solid #ccc;
  .city_name {
    flex: 1;
    margin-left: 10px;
  }
  .city_name.router-link-active {
      border-bottom: 1.5px solid red;
      color: #ef4238;
    }
  .hot_switch {
    flex: 2;
    display: flex;
    div {
      flex: 1;
    }
     .active {
         border-bottom: 1.5px solid red;
       }
       .router-link-active {
         border-bottom: 1.5px solid red;
         color: #ef4238;
       }
  }
  .search_entry {
    width: 80px;
  }
  .search_entry.router-link-active {
    border-bottom: 1.5px solid red;
    color: #ef4238;
  }
}
</style>
