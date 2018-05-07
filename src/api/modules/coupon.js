import request from '@/utils/request'

export function queryActivityById(data) {
  return request({
    url: `wcwc/couponInterface/queryActivityById`,
    method: 'post',
    data
  })
}

export function receiveCoupon(data) {
  return request({
    url: `wcwc/couponInterface/receiveCoupon`,
    method: 'post',
    data
  })
}

