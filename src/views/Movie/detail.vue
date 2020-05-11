<template>
  <div class="container">
    <Header :title='detail.nm'>
      <i class="iconfont icon-left" id="icon" @touchstart="backMessage"></i>
    </Header>
    <Loading v-if='isloading'></Loading>
    <div v-else>
    <div class="content">
        <video class="yugao" :src="detail.vd" controls="controls"></video>
    </div>
    <div class="detail_intro">
      <h3>{{ detail.nm }}<span>点击试看</span></h3>
      <ul>
        <li>独播</li>
        <li>{{ detail.src }}</li>
        <li>|</li>
        <li>{{ detail.oriLang}}</li>
        <li>|</li>
        <li>{{ time }}</li>
        <li><i class="iconfont icon-shujutu"></i>{{ detail.watched }}万次播放<i class="iconfont icon-bofang" id="icon"></i></li>
      </ul>
      <div class="right_jt">></div>
      <p>
        {{ detail.dra }}
      </p>
    </div>
    </div>
  </div>
</template>
<script>
import Header from '../../components/Header'
export default {
  name: 'Detail',
  data () {
    return {
      detail: {},
      isloading: true,
      time: ''
    }
  },
  components: {
    Header
  },
  props: ['movieId'],
  mounted () {
    this.$http.get('/api/detailmovie?movieId=' + this.movieId).then((res) => {
      if (res.data.msg === 'ok') {
        this.isloading = false
        this.detail = res.data.data.detailMovie
        console.log(this.detail.id)
        this.time = res.data.data.detailMovie.rt.substring(0, 4)
        console.log(this.time)
      }
    })
  },
  methods: {
    backMessage () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
.container {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  min-height: 100%;
  background-color: #fff;
  animation: .3s sliderMove;
  @keyframes sliderMove {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0); }
  }
  #icon {
    top: 0 !important;
  }
  .content {
    margin-top: 51px;
    display: flex;
    width: 100%;
    background-color: #fff;
    .yugao {
      width: 100%;
      height: 200px;
    }
  }
  .detail_intro {
    padding: 15px;
    position: relative;
    h3 {
      span {
        font-size: 11px;
        border: 1px solid #e54847;
        color: #e54847;
        margin-left: 10px;
        padding: 3px 5px;
        border-radius: 4px;
      }
    }
    ul {
      display: flex;
      font-size: 12px;
      padding: 7px 0;
      height: 20px;
      li {
        line-height: 20px;
        margin-right: 5px;
        color: rgba(0,0,0,0.5);
        i {
          color: #e54847;
          margin-right: 5px;
        }
        #icon {
          color: rgba(0,0,0,0.2);
          font-size: 10px;
          margin-left: 2px;
        }
      }
    }
    ul li:first-child {
      border: 1px solid #e54847;
      color: #e54847;
      font-size: 10px;
      padding: 0px 5px;
      border-radius: 5px;
    }
    .right_jt {
      position: absolute;
      right: 10px;
      top: 25px;
      font-size: 25px;
      color: rgba(0,0,0,0.3);
    }
    p {
      font-size: 14px;
      color: rgba(0,0,0,0.7);
    }
  }
}
</style>
