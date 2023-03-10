import {createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts, changeContactDetail } from "./contacts-operations";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        isLoading: false,
        error: null,
        currentUser: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = action.payload;
        state.currentUser = null;
        })
        builder.addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addCase(addContacts.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
        })
        builder.addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addCase(deleteContacts.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(
            contact => contact.id === action.payload.id)
        state.contacts.splice(index, 1);
        })
        builder.addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addCase(changeContactDetail.pending, (state) => {
        state.isLoading = true;
        })
        builder.addCase(changeContactDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(action.payload);
        state.currentUser = action.payload;
        })
        builder.addCase(changeContactDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        })
        builder.addDefaultCase((state) => {
        return
        })
    },
});

export const contactsReducer = contactsSlice.reducer;

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: {
//         contacts: [],
//         isLoading: false,
//         error: null,
//     },
//     extraReducers: {
//         [fetchContacts.pending](state) {
//         state.isLoading = true;
//         },
//         [fetchContacts.fulfilled](state, action) {
//         state.isLoading = false;
//         state.error = null;
//         state.contacts = action.payload;
//         },
//         [fetchContacts.rejected](state, action) {
//         state.isLoading = false;
//         state.error = action.payload;
//         },
//         [addContacts.pending](state) {
//         state.isLoading = true;
//         },
//         [addContacts.fulfilled](state, action) {
//         state.isLoading = false;
//         state.error = null;
//         state.contacts.push(action.payload);
//         },
//         [addContacts.rejected](state, action) {
//         state.isLoading = false;
//         state.error = action.payload;
//         },
//         [deleteContacts.pending](state) {
//         state.isLoading = true;
//         },
//         [deleteContacts.fulfilled](state, action) {
//         state.isLoading = false;
//         state.error = null;
//         const index = state.contacts.findIndex(
//             contact => contact.id === action.payload.id
//         );
//         state.contacts.splice(index, 1);
//         },
//         [deleteContacts.rejected](state, action) {
//         state.isLoading = false;
//         state.error = action.payload;
//         },
//     },
// });

