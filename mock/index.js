import Mock from 'mockjs'
import featureList from './data/featureList'
import menuList from './data/menuList'
import advanced from './data/advanced'

Mock.mock(/getList\/feature/, featureList)
Mock.mock(/getList\/menus/, menuList)
Mock.mock(/getList\/advanced/, advanced)