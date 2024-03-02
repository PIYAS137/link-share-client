import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5022'
    }),
    tagTypes: ['Master'],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => '/users',
            providesTags: ['Master']
        }),
        createUser: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Master']
        }),
        updateUserRole: builder.mutation({
            query: (data) => ({
                url: '/users',
                method: 'PATCH',
                body: data
            }),
            invalidatesTags : ['Master']
        }),
        checkAdmin : builder.query({
            query : (checkEmail)=> `/admin?email=${checkEmail}`
        })
    })
})


export const { useGetAllUserQuery, useCreateUserMutation, useUpdateUserRoleMutation, useCheckAdminQuery } = baseApi

export default baseApi;