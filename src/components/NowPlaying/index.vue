<template lang="">
    <div class='nowplay' ref="movie_body">
        <Loading v-if='isloading'></Loading>
        <Scroll v-else :handleToScroll='handleToScroll' :handleToTouchEnd='handleToTouchEnd'>
        <ul>
          <li class='pull'>{{ pullDownMsg }}</li>
          <li v-for='item in movieList' :key='item.id'>
            <div class='pic' @tap='handleToDetail(item.id)'>
              <img :src="item.img | setWH('128.180') "/>
            </div>
            <div class='box'>
              <h4 @tap='handleToDetail(item.id)'>{{ item.nm }}</h4>
              <p>观众评:<span>{{ item.sc }}</span></p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.showInfo }}</p>
              <p>今天放映{{ item.wish }}场</p>
              <div class='goupiao'>购票</div>
            </div>
          </li>
        </ul>
        </Scroll>
    </div>
</template>
<script>
// 1、导入包
// import BScroll from 'better-scroll'
export default {
  name: 'NowPlaying',
  data () {
    return {
      movieList: [],
      pullDownMsg: '',
      isloading: true,
      preCity: -1
    }
  },
  activated () {
    var city = this.$store.state.city.id
    console.log(city)
    // 如果当前id相等 则不用再发起请求
    if (this.preCity === city) return
    this.isloading = true
    this.$http.get('/api/movieOnInfoList?cityId=' + city).then((res) => {
      if (res.data.msg === 'ok') {
        this.movieList = res.data.data.movieList
        this.isloading = false
        this.preCity = city
        console.log(this.preCity)
        // // 数据加载完成才执行
        // this.$nextTick(() => {
        //   // 2、配置better-scroll
        //   var scroll = new BScroll(this.$refs.movie_body, {
        //     tap: true,
        //     probeType: 1
        //   })
        //   // 滑动时触发 下拉刷新  pos参数可以检测当前的位置
        //   scroll.on('scroll', (pos) => {
        //     // pos.y表示y轴拖拽的距离
        //     if (pos.y > 30) {
        //       this.pullDownMsg = '正在加载中'
        //     }
        //   })
        //   // 触摸接触时触发
        //   scroll.on('touchEnd', (pos) => {
        //     if (pos.y > 30) {
        //       this.$http.get('/api/movieOnInfoList?cityId=9').then((res) => {
        //         if (res.data.msg === 'ok') {
        //           this.pullDownMsg = '加载完成'
        //           setTimeout(() => {
        //             this.movieList = res.data.data.movieList
        //             this.pullDownMsg = ''
        //           }, 1000)
        //         }
        //       })
        //     }
        //   })
        // })
      }
    })
  },
  methods: {
    // 点击图片时候执行
    handleToDetail (id) {
      this.$router.push('/movie/detail/1/' + id)
    },
    // 父组件Scroll传递过来的方法
    handleToScroll (pos) {
      if (pos.y > 30) {
        this.pullDownMsg = '正在加载中'
      }
    },
    // 父组件Scroll传递过来的方法
    handleToTouchEnd (pos) {
      if (pos.y > 30) {
        this.$http.get('/api/movieOnInfoList?cityId=9').then((res) => {
          if (res.data.msg === 'ok') {
            this.pullDownMsg = '加载完成'
            setTimeout(() => {
              this.movieList = res.data.data.movieList
              this.pullDownMsg = ''
            }, 1000)
          }
        })
      }
    }
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
      h4 {
        font-weight: 400;
      }
      p {
        padding: 1px;
        font-size: 13px;
        color: rgba(0, 0, 0,0.6);
        span {
          color: orange;
          margin-left: 5px;
          font-size: 15px;
        }
      }
      .goupiao {
        padding: 5px 10px;
        background-color: #e54847;
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
