import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
    isLogged:boolean;
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isLogged: false,
  },
  reducers: {
    setLogged: (state: State, action: PayloadAction<boolean>) => {
        state.isLogged = action.payload;
    },
    toggleLogged:(state:State)=>{
        state.isLogged = !state.isLogged;
    }
  },
});

export const { setLogged } = profileSlice.actions;

export default profileSlice.reducer;
