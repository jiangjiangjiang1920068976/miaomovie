<template lang="">
    <div class='nowplay'>
        <ul>
          <li>
            <div class='pic'>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box'>
              <h4>无名之辈</h4>
              <p>观众评<span>9.3</span></p>
              <p>主演:</p>
              <p>今天是</p>
              <div class='goupiao'>预告</div>
            </div>
          </li>
          <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box'>
              <h4>无名之辈</h4>
              <p>观众评<span>9.2</span></p>
              <p>主演:</p>
              <p>今天是</p>
              <div class='goupiao'>预告</div>
            </div>
          </li>
           <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box'>
              <h4>无名之辈</h4>
              <p>观众评<span>9.2</span></p>
              <p>主演:</p>
              <p>今天是</p>
              <div class='goupiao'>预告</div>
            </div>
          </li>
           <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box'>
              <h4>无名之辈</h4>
              <p>观众评<span>9.2</span></p>
              <p>主演:</p>
              <p>今天是</p>
              <div class='goupiao'>预告</div>
            </div>
          </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'NowPlaying'
}
</script>
<style lang="scss" scoped>
.nowplay {
  margin-top: 45px;
  ul li {
    display: flex;
    height: 100px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    align-items: center;
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
    width: 90px;
    height: 100px;
  }
}
</style>
