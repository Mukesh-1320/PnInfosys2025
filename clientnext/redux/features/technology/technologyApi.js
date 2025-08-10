import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const technologyApi = createApi({
  reducerPath: 'technologyApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Technology'],
  endpoints: (builder) => ({
    // Get all tech items
    getAllTechnologies: builder.query({
      query: () => 'techdisplay',
      providesTags: ['Technology'],
    }),

    // Create a new tech entry
    createTechnology: builder.mutation({
      query: (formData) => ({
        url: 'techinsert',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Technology'],
    }),

    // Update an existing tech entry
    updateTechnology: builder.mutation({
      query: ({ id, formData }) => ({
        url: `techupdate/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Technology'],
    }),

    // Delete a tech entry
    deleteTechnology: builder.mutation({
      query: (id) => ({
        url: `techdelete/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Technology'],
    }),
  }),
});

export const {
  useGetAllTechnologiesQuery,
  useCreateTechnologyMutation,
  useUpdateTechnologyMutation,
  useDeleteTechnologyMutation,
} = technologyApi;
