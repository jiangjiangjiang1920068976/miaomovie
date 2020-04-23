<template>
    <div id="content">
        <div class="search">
            <div class="box1">
            <i class='iconfont icon-search'></i>
            <input type="text">
            </div>
        </div>
        <div class="box2">
            <p>电影/电视剧/综艺</p>
        </div>
        <div class='search_box'>
        <ul>
          <li>
            <div class='pic'>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box3'>
              <h4>无名之辈</h4>
              <p>观众评</p>
              <p>主演:</p>
              <p>今天是</p>
              <span class="pinfen">8.5</span>
            </div>
          </li>
          <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box3'>
              <h4>无名之辈</h4>
              <p>观众评</p>
              <p>主演:</p>
              <p>今天是</p>
              <span class="pinfen">8.5</span>
            </div>
          </li>
           <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box3'>
              <h4>无名之辈</h4>
              <p>观众评</p>
              <p>主演:</p>
              <p>今天是</p>
              <span class="pinfen">8.5</span>
            </div>
          </li>
           <li>
            <div>
              <img src='/images/pic.jpg' />
            </div>
            <div class='box3'>
              <h4>无名之辈</h4>
              <p>观众评</p>
              <p>主演:</p>
              <p>今天是</p>
              <span class="pinfen">8.5</span>
            </div>
          </li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Search'
}
</script>
<style lang="scss">
.search {
  background-color: rgba(204, 204, 204,0.2);
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
}
.search_box {
  ul li {
    display: flex;
    height: 100px;
    border-bottom: 0.3px solid #ccc;
    padding: 13px;
    align-items: center;
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
    width: 90px;
    height: 100px;
  }
}
</style>
