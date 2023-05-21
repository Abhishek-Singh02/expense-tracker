import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://expense-tracker-server-999.herokuapp.com";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URI || baseURI }),
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: (data) => ({
        url: "/api/transactions",
        params: data,
      }),
      providesTags: ["transaction"],
    }),
    createTransactions: builder.mutation({
      query: (data) => ({
        url: "/api/transactions",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["transaction"],
    }),
    deleteTransactions: builder.mutation({
      query: (data) => ({
        url: "/api/transactions",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["transaction"],
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/api/signup",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.mutation({
      query: (data) => ({
        url: "/api/signin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export default apiSlice;
