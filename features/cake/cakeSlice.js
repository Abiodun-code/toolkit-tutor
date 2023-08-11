const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfCakes: 10
}

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers:{
    ordered:(state, action)=>{
      state.numOfCakes --
    },
    restocked:(state, action)=>{
      state.numOfCakes ++
    }
  }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions