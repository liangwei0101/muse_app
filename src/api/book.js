import request from '@/utils/request'

export function bookList(query) {
  return request({
    url: '/book',
    method: 'get',
    params: query
  })
}