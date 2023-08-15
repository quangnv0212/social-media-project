const path = {
    home: '/',

    profile: '/profile',
    changePassword: '/user/password',
    historyPurchase: '/user/purchase',
    login: '/login',
    register: '/register',
    logout: '/logout',
    productDetail: ':nameId',
    cart: '/cart'
  } as const
  
  export default path
  