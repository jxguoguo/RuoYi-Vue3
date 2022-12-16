import request from '@/utils/request'

// 获取路由
export const getRouters = (appId) => {
  return request({
    url: '/system/menu/getRouters/'+ appId,
    method: 'get'
  })
}