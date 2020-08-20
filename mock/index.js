import Mock from 'mockjs'
import featureList from './data/featureList'
import menuList from './data/menuList'

Mock.mock(/getList\/feature/, featureList)
Mock.mock(/getList\/menus/, menuList)