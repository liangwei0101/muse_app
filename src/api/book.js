import request from '@/utils/request'

export function reqBookList(query) {
  return request({
    url: '/book',
    method: 'get',
    params: query
  })
}

export function addBookComment(parameter) {
  return request({
    url: '/bookComment/add',
    method: 'post',
    params: parameter
  })
}