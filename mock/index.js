import Mock from 'mockjs'
import featureList from './data/featureList'
import menuList from './data/menuList'
import advanced from './data/advanced'
import vue3 from './data/vue3'

Mock.mock(/getList\/feature/, featureList)
Mock.mock(/getList\/menus/, menuList)
Mock.mock(/getList\/advanced/, advanced)
Mock.mock(/getList\/vue3/, vue3)