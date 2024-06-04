import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment: any = {
        title: assignment.title,
        description: assignment.description,
        points: assignment.points,
        due: assignment.due,
        available: assignment.available,
        availableUntil: assignment.availableUntil,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (m: any) => m._id !== assignmentId);
    },
    updateAssignment: (state, { payload: Assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === Assignment._id ? Assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: AssignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === AssignmentId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;