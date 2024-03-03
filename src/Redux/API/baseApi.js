import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://link-share-server.vercel.app'
    }),
    tagTypes: ['Master','ForLinks'],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => '/users',
            providesTags: ['Master']
        }),
        getAllLinks : builder.query({
            query : () => '/links',
            providesTags : ['ForLinks']
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
            query : (checkEmail)=> `/admin?email=${checkEmail}`,
            invalidatesTags : ['Master']
        }),
        postLink : builder.mutation({
            query : (data)=>({
                url : '/links',
                method : 'POST',
                body : data
            }),
            invalidatesTags : ['ForLinks','Master']
        }),
        deleteLink : builder.mutation({
            query : (sid) =>({
                url :  `/links/${sid}`,
                method : 'DELETE',
                body : ''
            }),
            // invalidatesTags : ['ForLinks']
            invalidatesTags: (result, error, arg) => [{ type: 'Post', id: arg.id }]
        }),
        updateLink : builder.mutation({
            query : (data)=>({
                url : '/edit',
                method : 'PATCH',
                body : data
            }),
            invalidatesTags : ['ForLinks']
        })
    })
})


export const { useGetAllUserQuery, useCreateUserMutation, useDeleteLinkMutation, useUpdateLinkMutation, useUpdateUserRoleMutation, useGetAllLinksQuery, useCheckAdminQuery,usePostLinkMutation } = baseApi

export default baseApi;