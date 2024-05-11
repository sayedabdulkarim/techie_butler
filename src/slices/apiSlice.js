import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  // credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Typicode"],
  endpoints: (builder) => ({}),
});
