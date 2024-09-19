/* eslint-disable @typescript-eslint/no-explicit-any */
import {createEntityAdapter, EntityId} from '@reduxjs/toolkit';
import {apiSlice} from '../config/apiSlice';

type productType = {_id: string; title: string};

export const productsAdapter = createEntityAdapter({
  selectId: (notes: productType) => notes._id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
export const initialState = productsAdapter.getInitialState();
export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getProduct: builder.query({
      query: () => '/product',
      transformResponse: responseData => {
        return productsAdapter.setAll(initialState, responseData);
      },
      providesTags: (result: any, error, arg): any =>
        result
          ? [
              {type: 'Product', id: 'LIST'},
              ...result.ids.map((id: string | number) => ({
                type: 'Product',
                id,
              })),
            ]
          : ['Product'],
    }),
    getProdDetails: builder.query({
      query: ({prodId}: {prodId: string}) => `/product/${prodId}`,
      transformResponse: responseData => {
        return responseData;
      },
    }),
  }),
  overrideExisting: true,
});

export const {useGetProductQuery, useGetProdDetailsQuery} = productApiSlice;
