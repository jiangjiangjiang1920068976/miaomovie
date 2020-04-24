<template lang="">
    <div class='nowplay'>
        <ul>
          <li v-for='item in movieList' :key='item.id'>
            <div class='pic'>
              <img :src="item.img | setWH('128.180') "/>
            </div>
            <div class='box'>
              <h4>{{ item.nm }}</h4>
              <p>观众评:<span>{{ item.sc }}</span></p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.showInfo }}</p>
              <div class='goupiao'>购票</div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'NowPlaying',
  data () {
    return {
      movieList: []
    }
  },
  mounted () {
    this.$http.get('/api/movieOnInfoList?cityId=10').then((res) => {
      if (res.data.msg === 'ok') {
        this.movieList = res.data.data.movieList
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.nowplay {
  margin-top: 45px;
  z-index: -888;
  ul li {
    display: flex;
    height: 100px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    position: relative;
    .box {
      margin-left: 13px;
      p {
        padding: 1px;
        font-size: 13px;
        span {
          color: orange;
          margin-left: 5px;
          font-size: 15px;
        }
      }
      .goupiao {
        padding: 7px 10px;
        background-color: #e54847;
        color: #fff;
        position: absolute;
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
