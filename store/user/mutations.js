export default {
  setUser(state, user) {
    state.user = user
  },
  logoutUser(state) {
    state.user = null
  },
  setToken(state, token) {
    state.token = token
  },
  resetToken(state) {
    state.token = ''
  }
}
