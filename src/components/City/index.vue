<template>
    <div id="content">
      <div class='box'>
      <div class='left'>
        <p class='box_p'>热门城市</p>
        <div class="city_box1">
          <span v-for="item in hotList" :key='item.id'>{{ item.nm }}</span>
        </div>
        <div v-for="item in cityList" :key='item.id' ref='city_sort'>
          <p class='box_p p_a'>{{ item.index }}</p>
          <div class="city_box2" >
            <p v-for="itemList in item.list" :key='itemList.id'>{{ itemList.nm }}</p>
          </div>
        </div>
      </div>
      <div class='right' @click='handleIndex'>
        <span v-for="(item, index) in cityList" :key='item.id' @touchstart='handleIndex(index)'>{{ item.index }}</span>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'City',
  data () {
    return {
      cityList: [],
      hotList: []
    }
  },
  mounted () {
    this.$http.get('/api/cityList').then((res) => {
      if (res.data.msg === 'ok') {
        var citys = res.data.data.cities
        // console.log(citys)
        var { cityList, hotList } = this.formatCityList(citys)
        this.cityList = cityList
        this.hotList = hotList
        // console.log(this.cityList)
      }
    })
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
          // cityList.push({ list: [{ nm: citys[i].nm, id: citys[i].id }] })
          for (var j = 0; j < cityList.lenght; j++) {
            if (cityList[j].index === firstLetter) {
              cityList[j].list.push({ nm: citys[i].nm, id: citys[i].id })
            }
          }
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
    handleIndex (index) {
      console.log(index)
      console.log(11)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin: 0;
  padding: 0;
  display: flex;
  z-index: -9999;
  .left {
    flex: 1;
    padding-right: 20px;
    background-color: rgba(230, 189, 101,0.2);
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
      padding: 15px;
      padding-bottom: 0;
        span {
         width: 29.1%;
         padding: 5px 0;
         margin-right: 15px;
         margin-bottom: 15px;
         text-align: center;
         background-color: #fff;
        }
    }
    .city_box2 {
      padding: 15px 15px 25px;
      p {
        padding: 3px 0;
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
  }
}
</style>
