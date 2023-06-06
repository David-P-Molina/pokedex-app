import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseURL } from '../utils';

export const fetchAllTypes = async () => {
    const response = await fetch(`${baseURL}type`)
    const data = await response.json()
    return data.results
}

export const fetchOneType = async ({ typeURL }) => {
    const response = await fetch(`${typeURL}`)
    const data = await response.json()
    return data
}