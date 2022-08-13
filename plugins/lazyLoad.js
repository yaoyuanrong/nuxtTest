import VueLazyload from 'vue-lazyload'
import Vue from 'vue'

const isCDN = /img2.soyoung.com|static.soyoung.com/
const imageView2 = '?imageView2/0'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  attempt: 1,
  filter: {
    webp(listener, options) {
      if (isCDN.test(listener.src) && !listener.src.includes('?')) {
        if (!options.supportWebp) return
        listener.src = `${listener.src}${imageView2}/format/webp`
      }
    },
  },
})
