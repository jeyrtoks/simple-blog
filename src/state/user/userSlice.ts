import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  username: string | null;
  email: string | null;
};

type UserPayload = {
  username: string;
  email: string;
};

const initialState: UserState = {
  username: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUser: (state, action: PayloadAction<UserPayload>) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.username = null;
      state.email = null;
    },
  },
});

export const { storeUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
