import request from '@/utils/request'

export function fetchArticles(query) {
  return request({
    url: '/articles',
    method: 'get',
    params: query
  })
}

export function fetchArticle(id) {
  return request({
    url: 'backend/articles/' + id,
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: 'backend/articles',
    method: 'post',
    data: data
  })
}

export function updateArticle(id, data) {
  return request({
    url: 'backend/articles/' + id,
    method: 'patch',
    data: data
  })
}
export function fetchArticleCategory(params) {
  return request({
    url: '/articleCategories',
    method: 'get',
    params: params
  })
}

