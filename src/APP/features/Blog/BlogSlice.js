import { createSlice } from '@reduxjs/toolkit'
import { Update } from '../../../Config/blogManage'

const initialState = {
  Image: "",
  Title: "",
  Context: "",
  id:"",
  documentID : "",
  modal_Open: false,
  mode: "",
  Like : "",
  CurrentLike : ""
}

export const BlogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    Updateblog: (state,action) => {
      state.modal_Open = action.payload.modal_Open
      state.Image = action.payload.Image
      state.Title = action.payload.Title
      state.Context = action.payload.Context
      state.id = action.payload.id
      state.documentID= action.payload.documentID,
      state.mode = action.payload.mode,
      state.Like = action.payload.Like,
      state.CurrentLike = action.payload.CurrentLike
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      
    },
    Destoryblog: (state) => {
      state.Image = null
      state.Title = null
      state.Context = null
      state.id = null
      state.modal_Open = false,
      state.documentID = null
      state.mode = null,
      state.Like = null,
      state.CurrentLike = null
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { Updateblog, decrement, incrementByAmount } = BlogSlice.actions

export default BlogSlice.reducer