<template>
    <div id="content">
      <div class='box'>
      <div class='left'>
        <p class='box_p'>热门城市</p>
        <div class="city_box1">
            <span>北京</span>
            <span>北京</span>
            <span class='span'>北京</span>
            <span>北京</span>
            <span>北京</span>
            <span class='span'>北京</span>
        </div>
        <p class='box_p p_a'>A</p>
        <div class="city_box2">
          <p>啊啦普盟</p>
          <p>鞍山</p>
          <p>安庆</p>
          <p>安阳</p>
        </div>
        <p class='box_p p_a'>A</p>
        <div class="city_box2">
          <p>啊啦普盟</p>
          <p>鞍山</p>
          <p>安庆</p>
          <p>安阳</p>
        </div>
        <p class='box_p p_a'>A</p>
        <div class="city_box2">
          <p>啊啦普盟</p>
          <p>鞍山</p>
          <p>安庆</p>
          <p>安阳</p>
        </div>
      </div>
      <div class='right'>
        <span>A</span>
        <span>B</span>
        <span>C</span>
        <span>D</span>
        <span>E</span>
      </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'City'
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
         width: 30%;
         padding: 5px 0;
         margin-right: 15px;
         margin-bottom: 15px;
         text-align: center;
         background-color: #fff;
        }
        .span {
            margin-right: 0;
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
    padding-top: 150px;
  }
}
</style>
