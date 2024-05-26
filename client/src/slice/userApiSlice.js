import { apiSlice } from "./apiSlice";

const USER_URL = '/api';

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data)=> ({
                url: `${USER_URL}/login`,
                method: 'POST',
                body: data
            }),
        }),
        signup: builder.mutation({
            query: (data)=>({
                url: `${USER_URL}/signup`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: ()=>({
                url: `${USER_URL}/logout`,
                method: 'POST',
            })
        })
    }),
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = userApiSlice