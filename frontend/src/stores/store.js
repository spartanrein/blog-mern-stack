import { configureStore } from '@reduxjs/toolkit'
import { blogPostApi } from '../services/blogPosts'
import { setupListeners } from '@reduxjs/toolkit/query'
export const store = configureStore({
    reducer: {
        [blogPostApi.reducerPath]: blogPostApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(blogPostApi.middleware)
    
})

setupListeners(store.dispatch)