import { fetch } from '@/axios-config/axios'

export const getListApi = ({ params }) => {
  return fetch({ url: '/example/list', method: 'get', params })
}

export const delsApi = ({ data }) => {
  return fetch({ url: '/example/delete', method: 'post', data })
}

export const setApi = ({ data }) => {
  return fetch({ url: '/example/save', method: 'post', data })
}

export const getDetApi = ({ params }) => {
  return fetch({ url: '/example/detail', method: 'get', params })
}
