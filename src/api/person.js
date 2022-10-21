import request from '@/utils/request'

export function GetVisitorInfo(data, keyword) {
  if (keyword) {
    data.where = '(name,like,%' + keyword + '%)'
  }
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/访客列表',
    method: 'get',
    params: data
  })
}

export function GetVisitorStatics() {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/访客统计',
    method: 'get',
  })
}

export function GetEmployeeStatics() {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/员工基本统计信息',
    method: 'get',
  })
}

export function GetEmployeeEducation() {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/员工教育程度',
    method: 'get',
  })
}

export function GetEmployeeAges() {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/员工年龄统计',
    method: 'get',
  })
}

export function GetCheckoutStatics() {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/考勤统计',
    method: 'get',
  })
}

export function GetDateList(table, params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/' + table,
    method: 'get',
    params: params
  })
}
