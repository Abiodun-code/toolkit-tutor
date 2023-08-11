const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
  numOfIceCream: 20
}

const icecreamSlice = createSlice({
  name: "ice cream",
  initialState,
  reducers:{
    ordered:(state)=>{
      state.numOfIceCream --
    },
    restocked:(state)=>{
      state.numOfIceCream ++
    }
  },
  extraReducers:{
    ["cake/ordered"]:(state, action)=>{
      state.numOfIceCream --
    }
  }
})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions