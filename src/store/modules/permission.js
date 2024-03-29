import {
  asyncRouterMap
} from '@/router'

/**
 *
 * @param {*} router
 * @param {*} authInfo
 */
function checkAuth(router, authInfo) {
  // 判断当前路由在权限数组中是否存在
  if (router.meta) {
    const metaInfo = router.meta
    // if meta info did not indicate the need for persmission control
    if (!metaInfo.requiresAuth) {
      return true
    } else {
      // judging the permissons under multi-level routing
      if (metaInfo.index == 0) {
        return !!authInfo[metaInfo.type]
      } else if (metaInfo.index == 1) {
        if (authInfo[metaInfo.type]) {
          return !!authInfo[metaInfo.type][metaInfo.subType]
        }
        return false
      } else {
        var typeAuth = authInfo[metaInfo.type]
        for (let index = 0; index < metaInfo.subType.length; index++) {
          const field = metaInfo.subType[index];
          typeAuth = typeAuth[field]
          if (typeAuth && metaInfo.subType.length - 1 == index) {
            return true
          } else if (!typeAuth) {
            return false
          }
        }
      }
    }
  }
  return true
}

/**
 *
 * @param {*} routers
 * @param {*} authInfo
 */
const filterAsyncRouter = function(routers, authInfo) {
  const res = []
  routers.forEach(router => {
    const tmp = {
      ...router
    }
    if (checkAuth(tmp, authInfo)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, authInfo)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    addRouters: [],
    crmRouters: {
      name: 'crm',
      children: []
    },
    biRouters: {
      name: 'bi',
      children: []
    },
    manageRouters: {
      name: 'manager',
      children: []
    }
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      for (let index = 0; index < routers.length; index++) {
        const element = routers[index]
        if (element.name == 'crm') {
          state.crmRouters = element
        } else if (element.name == 'bi') {
          state.biRouters = element
        } else if (element.name == 'manager') {
          state.manageRouters = element
        }
      }
    }
  },
  actions: {
    GenerateRoutes({
      commit
    }, data) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, data)
        for (let index = 0; index < accessedRouters.length; index++) {
          const element = accessedRouters[index]
          if (element.children && element.children.length > 0) {
            element.redirect = element.path + '/' + element.children[0].path
          }
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
