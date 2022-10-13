import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const myFeedbackApi = createApi({
    reducerPath: 'feedbackApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://calm-island-59372.herokuapp.com/api' }),
    endpoints: builder => ({
        getFeedbacks: builder.query({
            query: () => ({
                url: `/feedback`,
                method: 'GET',
            }),
        }),

        addFeedback: builder.mutation({
            query: (newFeedback) => ({
                url: `/feedback`,
                method: 'POST',
                body: newFeedback    
            }),      
        }),
    }),
});

export const { useGetFeedbacksQuery, useAddFeedbackMutation } = myFeedbackApi;

