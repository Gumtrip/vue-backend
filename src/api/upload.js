import request from '@/utils/request'

export function uploadImages(query) {
  return request({
    url: 'admin/images',
    method: 'post',
    params: query
  })
}
