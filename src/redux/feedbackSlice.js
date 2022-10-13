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

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = 
//     [
//         { name: 'Alan', email: 'alan@gmail.com', message: 'Service was great!' }
//     ];

// const feedbackSlice = createSlice({
//     name: 'feedback',
//     initialState,
//     reducers: {
//         addFeedback(state, action) {
//             state.push(action.payload)
//             // console.log(state)
//         },
//         removeFeedback(state, action) {
//       state = state.filter(feedback => feedback.id !== action.payload)
//       },
//     },
// })
// export const { addFeedback, removeFeedback } = feedbackSlice.actions;
// export const feedbackReducer = feedbackSlice.reducer;
// export const getFeedbacks = state => state.feedback;