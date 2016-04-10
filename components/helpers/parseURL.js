"use strict"

export const getParamObj = (url) => {
  let params = url.split('?')
      params = params[1] || ""
  let paramsArray = params.split('&')
  let paramsObj = {}
  paramsArray.forEach((param) => {
    let data = param.split('=')
    let paramKey = data[0]
    let paramVal = data[1]
    paramsObj[paramKey] = paramVal
  })

  return paramsObj
}
