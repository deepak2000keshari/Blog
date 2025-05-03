import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './features/Blog/BlogSlice'
import UserReducer from './features/User/UserSlice'
export const store = configureStore({
  reducer: {
    Blog: blogReducer,
    User: UserReducer,
  },
})
