const getters = {
  uuid: state => state.user.uuid,
  userInfo: state => state.user.userInfo,
  token: state => state.token,
  // addRouters: state => state.permission.addRouters,
}

export default getters
