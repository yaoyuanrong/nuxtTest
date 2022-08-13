function generateUUID() {
  let d = new Date().getTime()
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    function (c) {
      const r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x7) | 0x8).toString(16)
    }
  )
  return uuid
}
import qs from 'qs'
export default function ({$axios, $log, $config}, inject) {
  // 本地开发 并且是 客户端请求的时候
  // const isDevClient = process.env.NODE_ENV === 'development' && process.client
  // $axios.setBaseURL(isDevClient ? '' : $config.axios.browserBaseURL)
  $axios.onRequest((config) => {
    const _id = generateUUID()
    const _time = Date.now()
    config.reqID = _id
    config.reqTime = _time
  })

  $axios.onRequest((response) => {
  })

  $axios.onError((err) => {
    // console.log('>?>>>>>>',err);
    // 捕获到异常的时候 记录日志
    // 错误处理
    // $handleError(err, { handler })
  })

  inject('api', (params) => {
    if (!params.data) {
      params.data = {}
    }
    /**
     * @NODE_ENV 开发环境
     * @client 客户端 true  服务端false
     * 区分是否为本地开发环境中   客户端下 才进行代理
     */
    const _url = process.env.NODE_ENV === 'development' && false ? '/api' : ''
    
    const baseURL = `${false ? _url : $config.axios.browserBaseURL}`
    const config = {
      url: params.url,
      method: params.method || 'get',
      onUploadProgress: params.onUploadProgress || function () {},
      baseURL,
    }
    console.log(process.env.NODE_ENV, process.client)
    console.log('_url',_url,'baseURL', baseURL, 'config', config)
    if (config.method === 'get') {
      config.params = params.data || {}
    } else if (config.method === 'post') {
      if (params.headers) {
        config.headers = params.headers
        config.data = params.data
      } else {
        config.headers = {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        config.data = qs.stringify(params.data || {})
      }
    }
    console.log(params)
    console.log(config)
    return new Promise((resolve, reject) =>
      $axios(config)
        .then((res) => {
          resolve(res.data)
        })
        .catch((rej) => {
          reject(rej)
        })
    )
  })
}