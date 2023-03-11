import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./filter/filter-slice";
import { authReducer } from "./auth/auth-slice";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['token', "contacts"]
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedContactReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
    contacts: persistedContactReducer,
    filter: filterReducer,
    auth: persistedAuthReducer,
})

export default rootReducer;