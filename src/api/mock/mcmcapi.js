import request from '@/utils/request'

export function mcmcUser(params) {
  return request({
    url: `/mcmc/user`,
    method: 'get',
    params
  })
}

