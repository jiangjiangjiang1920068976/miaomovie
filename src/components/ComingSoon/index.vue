<template lang="">
    <div class='nowplay'>
        <ul>
          <li v-for='item in comingList' :key='item.id'>
            <div class='pic'>
              <img :src="item.img | setWH('128.180') " />
            </div>
            <div class='box'>
              <h4>{{ item.nm }}</h4>
              <p><span>{{ item.wish }}</span>人想看</p>
              <p>主演:{{ item.star }}</p>
              <p>{{ item.rt }}上映</p>
              <div class='goupiao'>预告</div>
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
      comingList: []
    }
  },
  mounted () {
    this.$http.get('/api/movieComingList?cityId=10').then((res) => {
      if (res.data.msg === 'ok') {
        this.comingList = res.data.data.comingList
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.nowplay {
  margin-top: 45px;
  z-index: -777;
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
      }
      .goupiao {
        padding: 7px 10px;
        background-color: skyblue;
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
