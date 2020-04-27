<template>
    <div class="content">
      <div class='left'>
        <Loading v-if='isloading'></Loading>
        <Scroll ref="scrollBox" v-else>
          <div>
            <p class='box_p'>热门城市</p>
            <div class="city_box1">
              <div class="left_box" v-for="item in hotList" :key='item.id'>
              <span @tap='handleToCity(item.nm, item.id)'>{{ item.nm }}</span>
              </div>
            </div>
            <div ref='city_sort'>
              <div v-for="item in cityList" :key='item.id'>
                <p class='box_p p_a'>{{ item.index }}</p>
                <div class="city_box2" >
                  <p v-for="itemList in item.list" :key='itemList.id' @tap='handleToCity(itemList.nm, itemList.id)'>{{ itemList.nm }}</p>
                </div>
              </div>
            </div>
          </div>
        </Scroll>
      </div>
      <div class='right'>
        <span v-for="(item, index) in cityList" :key='item.id' @touchstart='handleIndex(index)'>{{ item.index }}</span>
      </div>
    </div>
</template>
<script>
export default {
  name: 'City',
  data () {
    return {
      cityList: [],
      hotList: [],
      isloading: true
    }
  },
  mounted () {
    var cityList = window.localStorage.getItem('cityList')
    var hotList = window.localStorage.getItem('hotList')
    if (cityList && hotList) {
      this.cityList = JSON.parse(cityList)
      this.hotList = JSON.parse(hotList)
      this.isloading = false
    } else {
      this.$http.get('/api/cityList').then((res) => {
        if (res.data.msg === 'ok') {
          this.isloading = false
          var citys = res.data.data.cities
          var { cityList, hotList } = this.formatCityList(citys)
          this.cityList = cityList
          this.hotList = hotList
          window.localStorage.setItem('cityList', JSON.stringify(cityList))
          window.localStorage.setItem('hotList', JSON.stringify(hotList))
        }
      })
    }
  },
  methods: {
    formatCityList (citys) {
      var cityList = []
      var hotList = []
      // 遍历找出热门城市
      for (var k = 0; k < citys.length; k++) {
        if (citys[k].isHot === 1) {
          hotList.push(citys[k])
        }
      }
      for (var i = 0; i < citys.length; i++) {
        var firstLetter = citys[i].py.substring(0, 1).toUpperCase()
        if (toCom(firstLetter)) { // 新添加的
          cityList.push({ index: firstLetter, list: [{ nm: citys[i].nm, id: citys[i].id }] })
        } else { // 已经存在的 累加
          cityList.forEach((item, val) => {
            if (cityList[val].index === firstLetter) {
              cityList[val].list.push({ nm: citys[i].nm, id: citys[i].id })
            }
          })
        }
      }
      // 排序
      cityList.sort((n1, n2) => {
        if (n1.index > n2.index) {
          return 1
        } else if (n1.index < n2.index) {
          return -1
        } else {
          return 0
        }
      })
      // 判断abcd..是否存在 存在返回false 否则为true
      function toCom (firstLetter) {
        for (var i = 0; i < cityList.length; i++) {
          if (cityList[i].index === firstLetter) {
            return false
          }
        }
        return true
      }
      return {
        cityList,
        hotList
      }
    },
    // 点击跳转到指定位置
    handleIndex (index) {
      var p = this.$refs.city_sort.getElementsByClassName('p_a')
      // 原生实现跳转 但是加了scroll组件就行不通
      // this.$refs.city_sort.parentNode.scrollTop = p[index].offsetTop - 45
      // 使用better-scroll实现的跳转
      this.$refs.scrollBox.toScrollTop(-p[index].offsetTop)
    },
    handleToCity (nm, id) {
      this.$store.commit('city/CITY_INFO', { nm, id })
      // 记录上一次点击的 nm和id
      window.localStorage.setItem('now_nm', nm)
      window.localStorage.setItem('now_id', id)
      // 切换了城市使用编程式路由进行跳转
      this.$router.push('/movie/nowPlaying')
    }
  }
}
</script>
<style lang="scss" scoped>
.content {
  margin-top: 45px;
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: 0;
  display: flex;
  background-color: #fff;
  .left {
    flex: 1;
    height: 100%;
    padding-right: 20px;
    overflow: auto;
    .box_p {
      background-color: rgba(204, 204, 204,0.2);
      margin-top: 20px;
      padding: 3px 15px;
    }
    .p_a {
      margin-top: 0;
    }
    .city_box1 {
      display: flex;
      flex-wrap: wrap;
      padding: 7px 0;
      .left_box {
        width: 33.333333%;
        height: 42px;
        text-align: center;
        line-height: 40px;
        // padding: 7px 0 0 0;
        span {
         width: 30px;
         padding: 3px 25px;
        //  margin-right: 15px;
        //  margin-bottom: 15px;
         text-align: center;
         background-color: #fff;
         border: 1px solid rgb(236, 233, 233);
         border-radius: 3px;
        }
      }
    }
    .city_box2 {
      padding: 15px 15px 25px;
      p {
        padding: 5px 0;
      }
    }
  }
  .right {
    width: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    background-color: #fff;
    right: 0;
    padding-top: 50px;
    color: #e54847;
    overflow: hidden;
  }
}
</style>
