import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => '/users'
        })
    })
})


export const {useGetAllUserQuery} = baseApi

export default baseApi;