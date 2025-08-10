
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const portfolioApi = createApi({
  reducerPath: 'portfolioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Portfolio'],
  endpoints: (builder) => ({
    getAllPortfolio: builder.query({
      query: () => 'displayPortfolio',
      providesTags: ['Portfolio'],
    }),

    createPortfolio: builder.mutation({
      query: (formData) => ({
        url: 'createPortfolio',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Portfolio'],
    }),

    updatePortfolio: builder.mutation({
      query: ({ id, formData }) => ({
        url: `updatePortfolio/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Portfolio'],
    }),

    deletePortfolio: builder.mutation({
      query: (id) => ({
        url: `deletePortfolio/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Portfolio'],
    }),
  }),
});

export const {
  useGetAllPortfolioQuery,
  useCreatePortfolioMutation,
  useUpdatePortfolioMutation,
  useDeletePortfolioMutation,
} = portfolioApi;
