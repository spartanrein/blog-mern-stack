import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/user'}),
    tagTypes:['user'],
    endpoints: (builder) => ({
        postLoginUser: builder.mutation({
            query: ({email, password}) => ({
                url: '/login',
                method: 'POST',
                body: {
                    email: email,
                    password: password
                }
            }),
        }),
        postSignUpUser: builder.mutation({
            query: ({email, password}) => ({
                url: `/signup`,
                method: 'POST',
                body: {
                    email: email,
                    password: password
                }
            }),
        })
    })
})

export const { usePostLoginUserMutation, usePostSignUpUserMutation } = userApi