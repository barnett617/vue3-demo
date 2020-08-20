import axios from 'axios'
const COMMON_PREFIX = 'http://localhost'
const getFeatureList = params => _post('/getList/feature', params)
const getMenus = params => _post('/getList/menus', params)

const _post =  async (url, params = {}) => {
  const { data } = await axios.post(`${COMMON_PREFIX}${url}`, JSON.stringify(params))
  console.log('response', data)
  return data.data
}

export {
  getFeatureList,
  getMenus
}