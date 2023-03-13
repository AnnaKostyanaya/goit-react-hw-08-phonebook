import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from "../../shared/services/auth";


export const fetchContacts = createAsyncThunk(
'contacts/fetchContacts',
async (_, { rejectWithValue }) => {
try {
    const contacts = await instance.get('/contacts');
    return contacts.data;
} catch (error) {
    return rejectWithValue(error.message);
}
},
);

export const addContacts = createAsyncThunk(
    "contacts/addContacts",
    async ({ name, number }, thunkAPI) => {
    try {
        const response = await instance.post("/contacts", { name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    );

    export const deleteContacts = createAsyncThunk(
    "contacts/deleteContacts",
    async (id, thunkAPI) => {
    try {
        const response = await instance.delete(`/contacts/${id}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    );

    export const changeContactDetail = createAsyncThunk(
    "contacts/changeContact",
    async ({id, name, number }, thunkAPI) => {
    try {
        const response = await instance.patch(`/contacts/${id}`, { name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    );
