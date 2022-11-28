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

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_交易额
export function GetFinanceStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_交易额',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全球交易额
export function GetGlobalFinanceStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全球交易额',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全球交易额总额
export function GetGlobalFinanceTotal(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全球交易额总额',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全国交易额
export function GetCountryFinanceStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全国交易额',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全国交易额总额
export function GetCountryFinanceTotal(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_全国交易额总额',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_交易额产品线分布
export function GetFinanceProductStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_交易额产品线分布',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_实时基准利率
export function GetFinanceRateStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_实时基准利率',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_美元
export function GetFinanceRateUSDStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_美元',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_欧元
export function GetFinanceRateEURStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_欧元',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_英镑
export function GetFinanceRateGBPStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_英镑',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_日元
export function GetFinanceRateJPYStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_日元',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_韩元
export function GetFinanceRateKRWStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_韩元',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_迪拉姆
export function GetFinanceRateAEDStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/财务管理_汇率_迪拉姆',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户级别占比
export function GetCustomerLevelStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户级别占比',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_活跃客户占比
export function GetCustomerActiveStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_活跃客户占比',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计
export function GetCustomerDealStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计_月',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_全球客户分布
export function GetCustomerDistributionStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_全球客户分布',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_全国客户分布
export function GetCustomerDistributionCNStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_全国客户分布',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户行业分布
export function GetCustomerIndustryStatics(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户行业分布',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计_日
export function GetCustomerDealStaticsDay(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计_日',
    method: 'get',
    params: params
  })
}

// /nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计_年
export function GetCustomerDealStaticsYear(params) {
  return request({
    url: '/nocodbv2/api/v1/db/data/noco/三奇数字孪生/客户管理_客户成交统计_年',
    method: 'get',
    params: params
  })
}