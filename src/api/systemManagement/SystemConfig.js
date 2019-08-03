
// 系统配置
export function adminSystemSave(data) {
  return ({
    url: 'sysConfig/setSysConfig',
    method: 'post',
    data: data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

// 系统配置
export function adminSystemIndex(data) {
  return ({
    url: 'sysConfig/querySysConfig',
    method: 'post',
    data: data
  })
}

export default {
  adminSystemSave,
  adminSystemIndex
};
