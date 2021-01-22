const app = {
  state: {
    showLogo: true, // 是否显示logo
    title: 'vue-element-admin', // 标题
    logoTitle: 'vue-ele-admin', // logo标题
    userInfo: 'userInfo', // 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突
    greyMode: false, // 是否开始灰色模式，用于特殊悼念日
    showBackTop: true // 是否显示回到顶部
  },
  mutations: {
    SET_SHOWLOGO: (state, showLogo) => {
      state.showLogo = showLogo
    },
    SET_TITLE: (state, title) => {
      state.title = title
    },
    SET_LOGOTITLE: (state, logoTitle) => {
      state.logoTitle = logoTitle
    },
    SET_GREYMODE: (state, greyMode) => {
      state.greyMode = greyMode
    },
    SET_SHOWBACKTOP: (state, showBackTop) => {
      state.showBackTop = showBackTop
    }
  },
  actions: {
    SetShowLogo({ commit }, showLogo) {
      commit('SET_SHOWLOGO', showLogo)
    },
    SetTitle({ commit }, title) {
      commit('SET_TITLE', title)
    },
    SetLogoTitle({ commit }, logoTitle) {
      commit('SET_LOGOTITLE', logoTitle)
    },
    SetGreyMode({ commit }, greyMode) {
      commit('SET_GREYMODE', greyMode)
    },
    SetShowBackTop({ commit }, showBackTop) {
      commit('SET_SHOWBACKTOP', showBackTop)
    }
  }
}

export default app
