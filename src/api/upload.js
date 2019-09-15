import request from '@/utils/request'

export function uploadImages(query) {
  return request({
    url: 'backend/images',
    method: 'post',
    params: query
  })
}
