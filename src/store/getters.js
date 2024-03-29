const getters = {
  userInfo: state => state.user.userInfo,
  lang: state => state.app.lang,
  logo: state => {
    if (state.app.logo) {
      return state.app.logo
    }
    return require('@/assets/img/logo.png')
  },
  name: state => {
    if (state.app.name) {
      return state.app.name
    }
    return '云课堂CRM系统'
  },
  activeIndex: state => state.app.sidebar.activeIndex,
  navActiveIndex: state => state.app.navbar.activeIndex,
  // 权限
  allAuth: state => state.user.allAuth,
  crm: state => state.user.crm,
  bi: state => state.user.bi,
  manage: state => state.user.manage,
  // 路由
  addRouters: state => state.permission.addRouters,
  crmRouters: state => state.permission.crmRouters,
  biRouters: state => state.permission.biRouters,
  manageRouters: state => state.permission.manageRouters

}
/**
 * 使用说明
 * import { mapGetters } from 'vuex'
 * computed: {
    ...mapGetters([
      'userInfo'
    ])
  }
 */

export default getters
