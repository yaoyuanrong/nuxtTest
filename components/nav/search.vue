<template>
  <div class="search-container">
    <h1>123</h1>
  </div>
</template>
<script>

</script>
<style lang="scss" scoped>
.search-container {
  @extend .base-container;
  padding-top: 30px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 101;

  .search-left {
    display: flex;
    align-items: center;
    .logo {
      cursor: pointer;
      img {
        height: 60px;
      }
    }
    em {
      height: 32px;
      width: 2px;
      background: #dedede;
      margin-right: 23px;
      margin-left: 15px;
    }
  }
  .search-content {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  .search-right {
    font-family: PingFangSC-Medium;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 19px;
    font-weight: 500;
    .ass-box {
      display: flex;
      text-decoration: none;
      align-items: center;
    }
    .ass-logo {
      width: 38px;
      height: 38px;
      margin-right: 5px;
      background-repeat: no-repeat;
      background-position: -233px 0;
      background-size: 497px 95px;
    }
    .ass-text {
      font-family: PingFangSC-Medium;
      font-size: 12px;
      color: #333333;
      letter-spacing: 0;
      line-height: 19px;
      font-weight: 500;
    }
  }

  .search-primary {
    height: 40px;
    width: 440px;
    border: 2px solid $--color-primary;
    border-radius: 25px;
    .search-btn {
      width: 70px;
      outline: none;
      background: $--color-primary;
      color: $--color-white;
      font-size: 18px;
      border: none;
      height: 100%;
      border-radius: 25px;
      font-weight: 700;
      margin-right: -1px;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
    .suggest-list {
      max-height: 400px;
      overflow: auto;
      overflow: overlay;
      padding: 10px 0;
      li.hover {
        a {
          background: #f6f9f9;
        }
      }
      a {
        @extend .link-style-base;
        display: flex;
        align-items: center;
        height: 36px;
        font-size: 14px;
        &:hover {
          background: #f6f9f9;
        }
      }
      .icon-sousuo {
        font-size: 14px;
        margin: 0 10px;
        color: $--color-text1;
      }
      ::v-deep.key {
        color: $--color-primary;
      }
    }
  }
}
</style>
