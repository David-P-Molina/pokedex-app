import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../utils';

export const typeApi = createApi({
  reducerPath: 'typeApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getAllTypes: builder.query({
      query: () => 'type',
    }),
    getOneType: builder.query({
      query: ({ typeURL }) => typeURL,
    }),
  }),
});

export const { useGetAllTypesQuery, useGetOneTypeQuery } = typeApi;