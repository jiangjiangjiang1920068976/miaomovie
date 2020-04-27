<template>
    <div class="quancheng">
      <Loading v-if='isloading'></Loading>
      <Scroll v-else>
      <ul>
        <li v-for='item in cinemas' :key='item.id'>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>{{ item.nm }}</span>
            </p>
            <p class="p2">{{ item.addr }}<span>{{ item.distance }}</span></p>
            <p class="p3" v-for='(num,key) in item.tag' :key='key'>
              <span v-if="num==1" :class='key | classCard'>{{ key | formatkey }}</span>
            </p>
          </div>
        </li>
      </ul>
      </Scroll>
    </div>
</template>
<script>
export default {
  name: 'Quancheng',
  data () {
    return {
      cinemas: [],
      isloading: true,
      preCity: -1
    }
  },
  mounted () {
    var city = this.$store.state.city.id
    // 如果当前id相等 则不用再发起请求
    if (this.preCity === city) return
    this.isloading = true
    this.$http.get('/api/cinemaList?cityId=' + city).then((res) => {
      if (res.data.msg === 'ok') {
        this.cinemas = res.data.data.cinemas
        this.isloading = false
        this.preCity = city
      }
    })
  },
  filters: {
    formatkey (key) {
      var card = [
        { key: 'allowRefund', value: '改签' },
        { key: 'endorse', value: '退' },
        { key: 'sell', value: '折扣卡' },
        { key: 'snack', value: '小吃' }
      ]
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    },
    classCard (key) {
      var card = [
        { key: 'allowRefund', value: 'or' },
        { key: 'endorse', value: 'or' },
        { key: 'sell', value: 'bl' },
        { key: 'snack', value: 'bl' }
      ]
      for (var i = 0; i < card.length; i++) {
        if (card[i].key === key) {
          return card[i].value
        }
      }
      return ''
    }
  }
}
</script>
<style lang="scss" scoped>
.quancheng {
  margin-top: 45px;
  flex: 1;
  overflow: auto;
  ul {
    z-index: -2;
  }
  ul li {
    display: flex;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    align-items: center;
    position: relative;
    z-index: -9999;
    .box1 {
      .p1 {
        .span1 {
          font-size: 16px;
          font-weight: 600;
        }
      }
      .p2 {
        font-size: 14px;
        font-weight: 300;
        padding: 8px 0;
        span {
          position: absolute;
          bottom: 15px;
          right: 15px;
          z-index: -9999;
        }
      }
      .p3 {
        float: left;
        span {
          font-size: 13px;
          border: 1px solid orange;
          color: orange;
          margin-right: 6px;
          border-radius: 4px;
          padding: 2px 3px;
        }
        .bl {
          border: 1px solid rgb(139, 139, 214);
          color: rgb(139, 139, 214);
        }
      }
    }
  }
  ul li:last-child {
    border-bottom: 0px;
  }
}
</style>
