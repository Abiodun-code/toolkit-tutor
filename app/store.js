const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer  = require("../features/cake/cakeSlice")
const icecreamReducer = require("../features/icecream/creamSlice")
const usersReducer = require("../features/user/userSlice")

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: usersReducer
  },
})

module.exports = store