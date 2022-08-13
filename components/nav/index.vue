<template>
  <div class="nav">
    <div class="nav-main">
      <template v-for="(item, i) in navList">
        <div
          v-if="item.children"
          :key="i"
          class="nav-label"
          :class="{ active: navActive === item.value }"
        >
          <sy-popover :options="{ placement: 'bottom' }">
            <div class="sub-nav">
              <NavLink
                v-for="(sub, idx) in item.children"
                :key="idx"
                :item="sub"
                class="sub-nav-item"
                :class="{ active: navActive === sub.value }"
              />
            </div>

            <span slot="reference">
              <NavLink class="nav-pop-txt" :item="item" />
              <i class="icon-down"></i>
            </span>
          </sy-popover>
        </div>
        <div
          v-else
          :key="i"
          class="nav-label"
          :class="{ active: navActive === item.value }"
        >
          <NavLink :item="item" class="nav-txt" />
        </div>
      </template>
      <div class="tip_text"><span>整形有风险&nbsp;&nbsp;决策需谨慎</span></div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    navList: { type:Array, default: () => [] },
    NavType: { default: 'top-nav' }
  },
  components: {
    navActive() {
    let path = this.$route.path
    const { keyword } = this.$route.query
    let str = 'home'
    if (path.includes('/search/') && !keyword) {
      str = path.split('/search/')[1] || 'product'
    } else {
      path.indexOf('/') === 0 && (path = path.replace(/\//, ''))
      str = path.split('/')[0] || 'home'
      if (/p(\d+)/.test(str)) {
        str = 'dp'
      }
    }

    return str
  }
  }
}
</script>
<style lang="scss" scoped>
.nav {
  flex: 1;
  .nav-main {
    display: flex;
    height: 100%;
    .nav-label {
      text-decoration: none;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      .nav-txt {
        font-family: PingFangSC-Medium;
        display: block;
        width: 100%;
        height: 100%;
      }
      //
    }

    .tip_text {
      align-self: center;
      margin-left: auto;

      height: 26px;
      line-height: 26px;
      padding: 0 12px;
      box-sizing: border-box;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 4px;

      span {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
        letter-spacing: 0;
        text-align: right;
        font-weight: 400;
      }
    }
  }
}
.top-nav {
  .nav-main {
    justify-content: center;
    .nav-label {
      width: 96px;
      font-size: 18px;
      font-weight: 500;
      transition: all 0.3s;
      position: relative;
      .nav-txt {
        color: $--color-text;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        height: 4px;
        width: 100%;
        //border-radius: 4px;
        background: $--color-primary;
        opacity: 0;
        transition: opacity 0.3s;
        left: 0;
      }
      &.active {
        .nav-txt {
          color: $--color-primary;
        }
        background: $--color-backbgc;
        &::after {
          opacity: 1;
        }
      }

      &:hover {
        background: $--color-backbgc;
        .nav-txt {
          color: $--color-primary;
        }
      }
    }
  }
}
.home-nav {
  height: 50px;
  background: $--color-primary;
  .nav-main {
    @extend .base-container;
    .nav-label {
      width: 136px;
      font-size: 16px;
      transition: background 0.3s;
      .nav-txt {
        color: #fff;
      }
      &.active,
      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }
}
.top-nav-old {
  .nav-main {
    justify-content: center;
    .nav-label {
      // padding-right: 20px;
      padding: 0 30px;
      font-size: 14px;
      transition: color 0.3s;
      color: $--color-text;
      position: relative;
      .icon-down {
        font-size: 12px;
      }
      &.active {
        background: #ebf9f6;
        &::after {
          content: '';
          height: 4px;
          background: #00ab84;
          display: block;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .nav-txt,
        .nav-pop-txt {
          color: $--color-primary;
        }
      }

      &:hover {
        .nav-txt,
        .nav-pop-txt {
          color: $--color-primary;
        }
      }
    }
    .sub-nav {
      background: #fff;
      padding-left: 15px;
      &-item {
        display: block;
        text-align: left;
        font-size: 13px;
        width: 60px;
        line-height: 25px;
        &.active,
        &:hover {
          color: $--color-primary;
        }
      }
    }
  }
}
</style>
