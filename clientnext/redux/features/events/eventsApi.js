
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => 'displayEvents',
      providesTags: ['Events'],
    }),

    createEvents: builder.mutation({
      query: (formData) => ({
        url: 'createEvents',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Events'],
    }),

    updateEvents: builder.mutation({
      query: ({ id, formData }) => ({
        url: `updateEvents/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Events'],
    }),

    deleteEvents: builder.mutation({
      query: (id) => ({
        url: `deleteEvents/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useCreateEventsMutation,
  useUpdateEventsMutation,
  useDeleteEventsMutation,
} = eventsApi;
