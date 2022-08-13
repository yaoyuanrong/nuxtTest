<template>
  <span v-if="item.vrouter" @click="handleClickLink(item)">{{
    item.name
  }}</span>
  <a v-else :href="getHref()">
    {{ item.name }}
  </a>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    handleClickLink(item) {
      let _obj = {}
      if (item.to.includes('/search/')) {
        _obj = {
          path: item.to,
        }
      } else {
        _obj = {
          path: item.to,
        }
      }
      this.$router.push(_obj)
    },
    getHref() {
      const item = this.item || {}
      const url = this.envInfo[`${item.domain || 'www'}Domain`]
      return item.domain === 'y' ? url + item.to : item.to
    }
  }
}
</script>
