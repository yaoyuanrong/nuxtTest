<template>
  <div class="dp-container">
    <NavSearch :show-area="false" class="hospital-searchnav">
      <div slot="handler" class="handler">写日记</div>
    </NavSearch>
    <div
      item-selector=".card-wrap"
      column-width="180"
      gutter="20"
      transition-duration="0"
      class="masonry"
    >
      <div
        v-for="diary in list"
        :key="diary.data.post_id"
        class="card-wrap js-observe js-will-expose"
        @click="actJump(diary.data.post_id)"
        >
        <diary :data="diary.data" />
      </div>
    <div class="listMore">
      查看更多
      <i class="icon-chakangengduo"></i>
    </div>
  </div>
</div>
</template>

<script>
import diary from '~/components/cards/diary.vue'
export default {
  async asyncData({ $api, error }) {
    const res = await $api({
      url: '/feapi/post/score_post?limit=18&index=0',
    }).catch((err) => {
      console.log(err)
      error({ statusCode: 404, message: err })
      return false
    })
    console.log(res)
    if (!res) return
    const {
      responseData: { list, has_more: more },
    } = res
    return {
      list,
      more,
    }
  },
  methods: {
    actJump(postId) {
      window.open(`/p${postId}`)
      // this.$router.push({
      //   path: `/p${postId}`,
      // })
    }
  },
  components: {
    diary
  }
  
}
</script>
<style scoped lang="scss">
.hospital-searchnav {
  ::v-deep.search-left {
    .logo {
      img {
        height: 58px;
      }
    }
  }
}
.handler {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $--color-primary;
  border-radius: 5px;
  width: 135px;
  color: $--color-white;
  font-size: 16px;
}

.masonry {
  @extend .base-container;
  column-width: 180px;
  column-count: 6;
  column-gap: 20px;
}

.listMore {
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 13px;
  color: $--color-primary;
  margin-bottom: 40px;
  cursor: pointer;
  .icon-chakangengduo {
    font-size: 8px;
  }
}
.card-wrap {
  display: inline-block;
  width: 180px;
  margin-bottom: 20px;
}

.loading {
  padding: 20px 0 30px;
  text-align: center;
  color: #777;
}
</style>
