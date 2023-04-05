import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => ({
      ...state,
      modal: { isOpen: true },
    }),
    closeModal: (state) => ({
      ...state,
      modal: { isOpen: false },
    }),
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
