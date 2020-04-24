<template>
  <div id="content">
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
      this.cancelRequest()
      this.$http.get('/api/searchList?cityId=10&kw=' + newVal, {
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
.search {
  background-color: rgba(204, 204, 204, 0.2);
  width: 100%;
  height: 50px;
  .box1 {
    height: 25px;
    margin: 12.5px;
    background-color: #fff;
    border-radius: 5px;
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
  height: 40px;
  border-bottom: 0.5px solid #ccc;
  line-height: 40px;
  padding-left: 10px;
  color: rgb(134, 130, 130);
  z-index: -777;
}
.search_box {
  z-index: -888;
  ul li {
    display: flex;
    height: 100px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    position: relative;
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
