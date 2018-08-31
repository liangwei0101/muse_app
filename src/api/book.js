import request from '@/utils/request'

export function reqBookDetail(query) {
  return request({
    url: '/book' + '/' + query,
    method: 'get',
  })
}

export function reqBookList(query) {
  return request({
    url: '/book',
    method: 'get',
    params: query
  })
}

export function reqBookCountList() {
  return request({
    url: '/book/test',
    method: 'get',
  })
}

export function addBookComment(parameter) {
  return request({
    url: '/bookComment/add',
    method: 'post',
    params: parameter
  })
}

export function borrowBook(parameter) {
  return request({
    url: '/borrowBook/add',
    method: 'post',
    params: parameter
  })
}