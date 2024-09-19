
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://hosting-api-xhd4.onrender.com/",
  credentials: "include",
  prepareHeaders: (headers: any) => {
    return headers;
  },
});

const baseQueryWithAuth = async (
  args: string,
  api: any,
  extraOptions: string
) => {
  let result: any = await baseQuery(args, api, extraOptions);
  return result;
};

export const apiSlice = createApi<any, any>({
  baseQuery: baseQueryWithAuth,
  reducerPath: "api",
  endpoints: (builder) => ({}),
  tagTypes: ["Product","ProductDetails"] as any,
});
