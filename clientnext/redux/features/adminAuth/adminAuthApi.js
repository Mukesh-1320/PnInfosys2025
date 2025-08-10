import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminAuthApi = createApi({
    reducerPath: 'adminAuthApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:2000/api/',
        credentials: 'include'
    }),
    tagTypes: ['AdminAuth'],
    endpoints: (builder) => ({
        // Admin Login
        loginAdmin: builder.mutation({
            query: (data) => ({
                url: 'login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['AdminAuth'],
        }),
        //Admin Register
        registerAdmin: builder.mutation({
            query: (data) => ({
                url: 'register',
                method: 'POST',
                body: data,
            })
        }),

        //Get Admin Profile
        getAdminProfile: builder.query({
            query: () => 'profile',
            providesTags: ['AdminAuth']
        }),
        //Logout
        logoutAdmin: builder.query({
            query: () => ({
                url: 'logout',
                method: 'POST'
            }),
            invalidatesTags: ['AdminAuth']
        })
    })
})

export const { useRegisterAdminMutation, useLoginAdminMutation, useGetAdminProfileQuery, useLogoutAdminQuery } = adminAuthApi