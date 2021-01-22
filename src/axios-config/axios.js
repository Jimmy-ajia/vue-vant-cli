import request from './request'
import config from './config'
const { default_headers } = config

function fetch({ url, method, params, data, headersType, responseType }) {
  return request({
    url: url,
    method,
    params,
    data,
    responseType: responseType,
    headers: {
      'Content-Type': headersType || default_headers
    }
  })
}

export {
  fetch
}
