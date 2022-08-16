import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const historicalPersonsApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://umayadia-apisample.azurewebsites.net/api",
  }),
  endpoints: (builder) => ({
    getHistoricalPersons: builder.query({
      query: () => "/persons",
      providesTags: (result) => ["historicalPerson"],
    }),

    postNewHistoricalPerson: builder.mutation({
      query: (body) => ({
        url: "/persons",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["historicalPerson"],
    }),
  }),
});

export const {
  useGetHistoricalPersonsQuery,
  usePostNewHistoricalPersonMutation,
} = historicalPersonsApiSlice;
