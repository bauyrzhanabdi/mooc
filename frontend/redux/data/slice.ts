import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        "courses": [
            {
                name: "CSCI 151. Intro to Programming",
                url: "https://img.youtube.com/vi/nykOeWgQcHM/default.jpg",
                id: 1
            },
            {
                name: "CSCI 152. Algorithms and Data Structure",
                url: "https://img.youtube.com/vi/nykOeWgQcHM/default.jpg",
                id:  1
            },
            {
                name: "CSCI 231. Programming Languages",
                url: "https://img.youtube.com/vi/nykOeWgQcHM/default.jpg",
                id:  2
            }
        ]
    },
    reducers: {
        getData(state) { return state},
        setData: (state, action) => {
            const userData = action.payload;
            return { ...state, ...userData };
        }
    },
})

export const {setData, getData } = counterSlice.actions;

export default counterSlice.reducer;