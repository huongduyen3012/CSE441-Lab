import { createSlice, configureStore } from "@reduxjs/toolkit";
import { v4 } from 'uuid';

export const mapContact = (contact) => {
    const { name, picture, phone, cell, email } = contact;

    return {
        id: v4(),
        name: name.first + ' ' + name.last,
        avatar: picture.large,
        phone,
        cell,
        email,
        favorite: Math.random() < 0.1 ? true : false,
    };
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        fetchContactSuccess: (state, action) => {
            state.contacts = action.payload;
        },
    },
});

export const { fetchContactSuccess } = contactSlice.actions;
const Store = configureStore({
    reducer: contactSlice.reducer,
});

export default Store;