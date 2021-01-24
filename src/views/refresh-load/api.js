import { fetch } from '@/axios-config/axios'

export const getListApi = ({ params }) => {
  return fetch({ url: '/example/list', method: 'get', params })
}

export const getEmptyListApi = ({ params }) => {
  return fetch({ url: '/example/empty', method: 'get', params })
}
