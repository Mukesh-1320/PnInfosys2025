import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sliderApi = createApi({
  reducerPath: 'sliderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  tagTypes: ['Slider'],
  endpoints: (builder) => ({
    getAllSlides: builder.query({
      query: () => 'displaySlider',
      providesTags: ['Slider'],
    }),

    createSlide: builder.mutation({
      query: (formData) => ({
        url: 'createSlider',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Slider'],
    }),

    updateSlide: builder.mutation({
      query: ({ id, formData }) => ({
        url: `updateSlider/${id}`,
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['Slider'],
    }),

    deleteSlide: builder.mutation({
      query: (id) => ({
        url: `deleteSlider/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Slider'],
    }),
  }),
});

export const {
  useGetAllSlidesQuery,
  useCreateSlideMutation,
  useUpdateSlideMutation,
  useDeleteSlideMutation
} = sliderApi;
