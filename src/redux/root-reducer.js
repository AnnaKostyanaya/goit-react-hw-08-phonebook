import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from "./contacts/contacts-slice";
import { filterReducer } from "./filter/filter-slice";
import { authReducer } from "./auth/auth-slice";


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['currentUser']
};
const persistContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const rootReducer = combineReducers({
    auth: persistAuthReducer,
    contacts: persistContactsReducer,
    filter: filterReducer,
})

export default rootReducer;

