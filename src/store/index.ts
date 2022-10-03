import { configureStore } from '@reduxjs/toolkit'

import profileReducer from './reducers/profile'

export const store = configureStore({
  reducer: {
    profile:profileReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch