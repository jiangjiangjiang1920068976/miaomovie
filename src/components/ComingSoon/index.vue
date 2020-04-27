<template lang="">
    <div class='nowplay'>
      <Loading v-if='isloading'></Loading>
      <Scroll v-else :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd'>
        <ul>
          <li class='pull'>{{ pullDownMsg }}</li>
          <li v-for='item in comingList' :key='item.id'>
            <div class='pic' @tap='handleToDetail(item.id)'>
              <img :src="item.img | setWH('128.180') " />
            </div>
            <div class='box'>
              <h4 @tap='handleToDetail(item.id)'>{{ item.nm }}</h4>
              <p><span class='span_p'>{{ item.wish }}</span>人想看</p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.rt }}上映</p>
              <div class='goupiao'>预告</div>
            </div>
          </li>
        </ul>
        </Scroll>
    </div>
</template>
<script>
export default {
  name: 'NowPlaying',
  data () {
    return {
      comingList: [],
      isloading: true,
      preCity: -1,
      pullDownMsg: ''
    }
  },
  methods: {
    handleToDetail (id) {
      this.$router.push('/movie/detail/2/' + id)
    },
    // 父组件Scroll传递过来的方法
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDownMsg = '正在加载中'
      }
      console.log(this.pullDownMsg)
    },
    // 父组件Scroll传递过来的方法
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        this.$http.get('/api/movieComingList?cityId=1').then((res) => {
          if (res.data.msg === 'ok') {
            this.pullDownMsg = '加载完成'
            setTimeout(() => {
              this.comingList = res.data.data.comingList
              this.pullDownMsg = ''
            }, 1000)
          }
        })
      }
    }
  },
  activated () {
    var city = this.$store.state.city.id
    console.log(city)
    // 如果当前id相等 则不用再发起请求
    if (this.preCity === city) return
    this.isloading = true
    this.$http.get('/api/movieComingList?cityId=' + city).then((res) => {
      if (res.data.msg === 'ok') {
        this.comingList = res.data.data.comingList
        this.isloading = false
        this.preCity = city
        console.log(this.preCity)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.nowplay {
  margin-top: 45px;
  width: 100%;
  flex: 1;
  overflow: auto;
  .pull {
    margin: 0;
    padding: 0;
    border: 0;
    display: block;
    text-align: center;
  }
  ul li {
    display: flex;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    position: relative;
    .box {
      margin-left: 13px;
      p {
        padding: 1px;
        font-size: 13px;
        color: rgba(0, 0, 0,0.6);
        .span_p {
          color: skyblue;
          font-size: 15px;
        }
      }
      h4 {
        font-weight: 400;
      }
      .goupiao {
        padding: 5px 10px;
        background-color: skyblue;
        color: #fff;
        position: absolute;
        font-size: 13px;
        right: 13px;
        top: 42px;
        border-radius: 5px;
      }
    }
  }
  ul li:last-child {
    border-bottom: none;
  }
  img {
    width: 75px;
    height: 100px;
  }
}
</style>
