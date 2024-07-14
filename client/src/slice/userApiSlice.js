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
        }),
        userData: builder.mutation({
            query: ()=> ({
                url: `${USER_URL}/data`,
            })
        }),
        addExpense: builder.mutation({
            query: (data)=> ({
                url: `${USER_URL}/data/add`,
                method: 'POST',
                body: data
            })
        }),
        deleteExpense: builder.mutation({
            query: (params) => ({
                url: `${USER_URL}/data/${params}/delete`,
                method: 'DELETE'
            })
        }),
        updateExpense: builder.mutation({
            query: ({params, data}) => ({
                url: `${USER_URL}/data/${params}/update`,
                method: 'PUT',
                body: data,
            })
        }),
        updateprofile: builder.mutation({
            query: ({data}) => ({
                url: `${USER_URL}/updateprofile`,
                method: 'PUT',
                body: data
            })
        }),
        updatePassword: builder.mutation({
            query: ({data}) => ({
                url: `${USER_URL}/updateprofile/password`,
                method: "PUT",
                body: data
            })
        }),
        addBudget: builder.mutation({
            query: (data) => {
                console.log("Sending data:", data); // Correct logging inside the function
                return {
                    url: `${USER_URL}/budget`,
                    method: "POST",
                    body: data
                };
            }
        }),
        updateBudget: builder.mutation({
            query: ({params, data}) => ({
                url: `${USER_URL}/budget/${params}/update`,
                method: "PUT",
                body: data
            })
        }),
        deleteBudget: builder.mutation({
            query: ({params, data}) => ({
                url: `${USER_URL}/budget/${params}`,
                method: "DELETE",
                body: data
            })
        }),
        deleteAccount: builder.mutation({
            query: ({data}) => ({
                url: `${USER_URL}/updateprofile/delete`,
                method: "DELETE",
                body: data
            })
        })
    }),
});

export const { 
    useLoginMutation, 
    useSignupMutation, 
    useLogoutMutation,
    useUserDataMutation,
    useAddExpenseMutation,
    useDeleteExpenseMutation,
    useUpdateExpenseMutation,
    useUpdateprofileMutation,
    useUpdatePasswordMutation,
    useAddBudgetMutation,
    useUpdateBudgetMutation,
    useDeleteBudgetMutation,
    useDeleteAccountMutation
} = userApiSlice