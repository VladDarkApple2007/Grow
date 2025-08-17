import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const apiSlice = createApi({
   reducerPath: 'api',
   baseQuery: fetchBaseQuery({baseUrl:  'https://6853fbc9a2a37a1d6f4ab196.mockapi.io/'}),
   endpoints: (builder) => ({
      getProduct: builder.query({
         query: () => 'product',
      }),
      getBlogs: builder.query({
         query: () => 'blogs'
      })
   })
})

export const {
  useGetProductQuery,
  useGetBlogsQuery,
} = apiSlice;