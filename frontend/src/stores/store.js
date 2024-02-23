import { configureStore } from '@reduxjs/toolkit'
import { blogPostApi } from '../services/blogPosts'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/user'
export const store = configureStore({
    reducer: {
        [blogPostApi.reducerPath]: blogPostApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(blogPostApi.middleware)
        .concat(userApi.middleware)
})

setupListeners(store.dispatch)