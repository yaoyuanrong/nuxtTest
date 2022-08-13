<template>
  <div class="card-diary">
    <div class="cover">
      <div
        v-show="data.base && String(data.base.post_video_yn) === '1'"
        class="video"
      ></div>
      <img v-lazy="image.url" height="100%" width="100%" alt="" />
    </div>
    <div class="intro">
      <p class="title" v-html="data.base ? data.base.title : ''"></p>
      <div class="info">
        <div class="user">
          <img v-lazy="avatar" />
          <div class="v sprite" :class="[certifiedClass]"></div>
        </div>
        <div class="name">{{ userName }}</div>
        <div class="support">
          <span class="sprite" :class="[isFavor ? 'liked' : 'like']"></span>
          <span :class="[isFavor ? 'strong' : '']">{{
            data.stat ? data.stat.favorite_cnt : 0
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Object, default: () => {} }
  },
  data() {
    return {
      user: 0, // 普通用户
      pro: 1, // 达人
      hospital: 2, // 医院
      doctor: 3, // 医生
      teacher: 4, // 老师
      official: 5, // 官方账号
      kefu: 7, // 客服
      customerService: 8, // 服务账号
      graduate: 10, // 研究生
      consult: 11, // 面诊师
      answer: 14, // 答主
      supplier: 15, // 供应商
      houseKeeper: 17, // 管家
      brand: 18, // 品牌
      beauty: 101, // 生美
      unSign: 102, // 未认证
    }
  },
  computed: {
    userName() {
      return this.data.post_user?.user_name || 'soyoung'
    },
    avatar() {
      return (
        String(this.data.post_user?.avatar?.u) ||
        'https://img2.soyoung.com/user/3_100_100.png?imageView2/0/format/webp'
      )
    },
    certifiedClass() {
      return Number(this.data.post_user?.certified_type || 0)
    },
    isFavor() {
      return String(this.data.base?.is_favor) === '1'
    },
    media() {
      return this.data.media || {}
    },
    image() {
      return this.media.image || this.media.cover_image || {}
    }
  }
}
</script>
<style lang="scss" scoped>
.sprite {
  display: inline-block;
  overflow: hidden;
  background-repeat: no-repeat;
  background-image: url(https://static.soyoung.com/sy-pre/card-icon-image-1618193400704.png);
}

.user {
  width: 10px;
  height: 10px;
  background-position: -10px -10px;
}

.brand {
  width: 10px;
  height: 10px;
  background-position: -0px -0px;
}
.business {
  width: 10px;
  height: 10px;
  background-position: -10px -0px;
}
.doctor {
  width: 10px;
  height: 10px;
  background-position: -20px -0px;
}
.hospital {
  width: 10px;
  height: 10px;
  background-position: -30px -0px;
}
.liked {
  width: 14px;
  height: 14px;
  background-position: -54px -0px;
}
.like {
  width: 14px;
  height: 14px;
  background-position: -40px -0px;
}
.not_v {
  width: 10px;
  height: 10px;
  background-position: -68px -0px;
}
.official {
  width: 10px;
  height: 10px;
  background-position: -78px -0px;
}
.pro {
  width: 10px;
  height: 10px;
  background-position: -88px -0px;
}

.card-diary {
  position: relative;
  width: 180px;
  cursor: pointer;
  // &:hover {
  //   &:after {
  //     // opacity: 1;
  //   }
  // }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    height: 100%;
    width: 100%;
    transition: opacity 0.2s ease-in;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    opacity: 0;
  }
  &::before {
    content: '';
    z-index: 2;
    @include border(#dedede);
    border-radius: 16px;
  }
  .cover {
    position: relative;
    width: 180px;
    height: 240px;
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    img {
      object-fit: cover;
    }
    .video {
      position: absolute;
      top: 10px;
      right: 10px;
      height: 20px;
      width: 20px;
      z-index: 5;
      background: url(https://static.soyoung.com/sy-pre/play-1557198611587.png)
        no-repeat center center transparent;
      background-size: contain;
      border-radius: 50% 50%;
    }
  }
  .intro {
    box-sizing: border-box;
    padding: 10px;
    background: white;
    // border: 1px solid #dedede;
    border-top: none;
    border-radius: 0 0 8px 8px;
    position: relative;
  }
  .title {
    margin-bottom: 10px;
    box-sizing: border-box;
    line-height: 18px;
    height: 36px;
    max-height: 36px;
    font-size: 13px;
    color: #333333;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 18px;
    .user {
      position: relative;
      height: 18px;
      width: 18px;
      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }
      .v {
        position: absolute;
        right: 0;
        bottom: 0px;
        height: 10px;
        width: 10px;
        z-index: 4;
      }
    }
    .name {
      flex: 1;
      flex-basis: 95px;
      margin-left: 5px;
      font-size: 11px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #777777;
    }
    .support {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 10px;
      color: #777777;
      span {
        white-space: nowrap;
      }
      .strong {
        color: #333;
      }
      .sprite {
        margin-right: 3px;
      }
    }
  }
}
</style>
<style lang="scss">
.img_motion {
  vertical-align: bottom;
  height: 16px;
  width: 16px;
}
</style>
