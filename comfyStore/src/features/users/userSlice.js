import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  autumn: "autumn",
  dim: "dim",
};
const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem("theme") || themes.dim;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

export const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThemeFromLocalStorage(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log(action.payload);
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("Logged in successfully");
    },
    logoutUser: (state) => {
      console.log("logout");
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged out Successfully");
    },
    toggleTheme: (state) => {
      console.log("toggleTheme");
      const { dim, autumn } = themes;
      state.theme = state.theme === dim ? autumn : dim;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});
export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
