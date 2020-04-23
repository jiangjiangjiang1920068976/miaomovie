<template>
    <div class="quancheng">
      <ul>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
        <li>
          <div class='box1'>
            <p class='p1'>
              <span class='span1'>大地影院(奥东世纪城店)</span>
              <span class='span2'>22.9<span>元起</span></span>
            </p>
            <p class="p2">金州区大连经济开发区佛东世纪3层<span>176.3km</span></p>
            <p class="p3">
              <span>小吃</span>
              <span>折扣卡</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'Quancheng'
}
</script>
<style lang="scss" scoped>
.quancheng {
  margin-top: 45px;
  ul li {
    display: flex;
    height: 80px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    align-items: center;
    .box1 {
      .p1 {
        .span1 {
          font-size: 16px;
          font-weight: 600;
        }
        .span2 {
          font-size: 18px;
          color: red;
          margin-left: 4px;
          span {
            font-size: 13px;
            margin-left: 3px;
          }
        }
      }
      .p2 {
        font-size: 14px;
        font-weight: 300;
        padding: 8px 0;
        span {
          position: absolute;
          right: 15px;
        }
      }
      .p3 {
        span {
          font-size: 13px;
          border: 1px solid orange;
          color: orange;
          margin-right: 6px;
          border-radius: 4px;
        }
      }
    }
  }
  ul li:last-child {
    border-bottom: 0px;
  }
}
</style>
