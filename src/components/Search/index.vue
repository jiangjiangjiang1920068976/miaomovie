<template>
  <div class="content">
    <div class="search">
      <div class="box1">
        <i class="iconfont icon-search"></i>
        <input type="text" v-model="message" />
      </div>
    </div>
    <div class="box2">
      <p>电影/电视剧/综艺</p>
    </div>
    <div class="search_box">
      <ul>
        <li v-for="item in moveList" :key='item.id'>
          <div class="pic">
            <img :src="item.img | setWH('128.180') " />
          </div>
          <div class="box3">
            <h4>{{ item.nm }}</h4>
            <p>{{ item.enm }}</p>
            <p>{{ item.cat }}</p>
            <p>{{ item.rt }}</p>
            <span class="pinfen">{{ item.sc }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Search',
  data () {
    return {
      message: '',
      moveList: []
    }
  },
  methods: {
    cancelRequest () {
      if (typeof this.source === 'function') {
        this.source('终止请求')
      }
    }
  },
  watch: {
    message (newVal) {
      var that = this
      var city = this.$store.state.city.id
      this.cancelRequest()
      this.$http.get('/api/searchList?cityId=10' + city + '&kw=' + newVal, {
        cancelToken: new this.$http.CancelToken(function (c) {
          that.source = c
        })
      }).then((res) => {
        if (res.data.msg && res.data.data.movies) {
          this.moveList = res.data.data.movies.list
          console.log(this.moveList)
        }
      }).catch((err) => {
        if (this.$http.isCancel(err)) {
          console.log('Request canceled', err.message)
        } else {
          console.log(err)
        }
      })
    }
  }
}
</script>
<style lang="scss">
.content {
  margin-top: 45px;
  width: 100%;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.search {
  width: 100%;
  height: 30px;
  padding: 15px 0;
  position: absolute;
  z-index: 999;
  // background-color: rgb(235, 233, 233);
  background-color: #fff;
  border-top: 0.4px solid #ccc;
  margin-top: -1px;
  .box1 {
    height: 25px;
    margin: 0 12.5px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid orange;
    i {
      position: absolute;
      line-height: 25px;
      margin-left: 5px;
    }
    input {
      width: 80%;
      height: 25px;
      margin-left: 27px;
      border: none;
      outline: none;
    }
  }
}
.box2 {
  width: 100%;
  margin-top: 50px;
  height: 36px;
  border-bottom: 0.5px solid #ccc;
  line-height: 36px;
  padding-left: 10px;
  color: rgb(134, 130, 130);
  background-color: #fff;
}
.search_box {
  z-index: -8888;
  flex: 1;
  ul li {
    display: flex;
    height: 100px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    position: relative;
    z-index: -9999;
    .box3 {
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
      .pinfen {
        padding: 7px 10px;
        color: orange;
        position: absolute;
        right: 13px;
        top: 10px;
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
