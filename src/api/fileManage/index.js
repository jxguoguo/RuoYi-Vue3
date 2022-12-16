import request from '@/utils/request'

export function getFileList(tableId) {
  return request({
    url: '/mock/dds/ftpFile?customerId=10000',
    method: 'post'
  })
}

 
 
 