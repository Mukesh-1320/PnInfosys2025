
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teamApi = createApi({
  reducerPath: 'teamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Team'],
  endpoints: (builder) => ({
    getAllTeam: builder.query({
      query: () => 'displayTeam',
      providesTags: ['Team'],
    }),

    createTeam: builder.mutation({
      query: (formData) => ({
        url: 'createteam',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Team'],
    }),

    updateTeam: builder.mutation({
      query: ({ id, formData }) => ({
        url: `updateTeam/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Team'],
    }),

    deleteTeam: builder.mutation({
      query: (id) => ({
        url: `deleteTeam/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Team'],
    }),
  }),
});

export const {
  useGetAllTeamQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamApi;
