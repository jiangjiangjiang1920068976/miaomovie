<template>
    <div class="box" ref="box">
      <slot></slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  // 父子组件通信 父组件Scroll 传参
  props: {
    handleToScroll: {
      type: Function,
      default: function () {}
    },
    handleToTouchEnd: {
      type: Function,
      default: function () {}
    }
  },
  mounted () {
    var scroll = new BScroll(this.$refs.box, {
      tap: true,
      probeType: 1
    })
    this.scroll = scroll
    scroll.on('scroll', (pos) => {
      this.handleToScroll(pos)
    })
    scroll.on('touchEnd', (pos) => {
      this.handleToTouchEnd(pos)
    })
  },
  methods: {
    toScrollTop (y) {
      this.scroll.scrollTo(0, y)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  height: 100%;
}
</style>
