const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/creamSlice");
const { fetchUser } = require("./features/user/userSlice");

console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(()=>{
  console.log("Update State", store.getState());
})

store.dispatch(fetchUser())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(2))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(3))

// unsubscribe()