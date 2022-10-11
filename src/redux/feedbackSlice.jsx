import { createSlice } from '@reduxjs/toolkit';

const initialState = 
    [
        { name: 'Alan', email: 'alan@gmail.com', message: 'Service was great!' }
    ];

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addFeedback(state, action) {
            state.push(action.payload)
            // console.log(state)
        },
        removeFeedback(state, action) {
      state = state.filter(feedback => feedback.id !== action.payload)
      },
    },
})
export const { addFeedback, removeFeedback } = feedbackSlice.actions;
export const feedbackReducer = feedbackSlice.reducer;
// export const getFeedbacks = state => state.feedback;