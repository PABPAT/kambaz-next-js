import { createSlice } from "@reduxjs/toolkit";
import * as db from "../../../Database";

const initialState = {
  enrollments: db.enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload }) => {
      const alreadyEnrolled = state.enrollments.some(
        (en) => en.course === payload.course && en.user === payload.user
      );
      if (!alreadyEnrolled) {
        state.enrollments.push(payload);
      }
    },
    unenrollCourse: (state, { payload }) => {
      state.enrollments = state.enrollments.filter(
        (en) => !(en.course === payload.course && en.user === payload.user)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;