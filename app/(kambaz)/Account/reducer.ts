import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./client"

export interface AccountType {
  currentUser: User | null;
}
const initialState : AccountType = {
  currentUser: null
}
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;