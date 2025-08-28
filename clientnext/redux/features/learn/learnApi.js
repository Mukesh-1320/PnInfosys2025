
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const learnApi = createApi({
  reducerPath: 'learnApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Learn'],
  endpoints: (builder) => ({
    getAllLearn: builder.query({
      query: () => 'displayLearn',
      providesTags: ['Learn'],
    }),

    createLearn: builder.mutation({
      query: (formData) => ({
        url: 'createLearn',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Learn'],
    }),

    updateLearn: builder.mutation({
      query: ({ id, formData }) => ({
        url: `updateLearn/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Learn'],
    }),

    deleteLearn: builder.mutation({
      query: (id) => ({
        url: `deleteLearn/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Learn'],
    }),
  }),
});

export const {
  useGetAllLearnQuery,
  useCreateLearnMutation,
  useUpdateLearnMutation,
  useDeleteLearnMutation,
} = learnApi;
