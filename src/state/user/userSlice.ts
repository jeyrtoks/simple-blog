import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  email: string;
  loading: boolean;
}

const initialState: UserState = {
  username: "",
  email: "",
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
