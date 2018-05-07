import request from '@/utils/request'

export function userLogin(data) {
  return request({
    url: `app/login`,
    method: 'post',
    data
  })
}

export function checkMobile(data) {
	return request({
			url: `app/checkMobile`,
			method: 'post',
			data
	})
}
  
