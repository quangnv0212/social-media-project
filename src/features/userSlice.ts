import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export interface User {
  id: string;
  username: string;
  picture: string;
  first_name: string;
  last_name: string;
  token: string;
  verified: boolean;
}
export interface AuthState {
  isLoggedIn: boolean;
  currentUser?:User
}
const user = Cookies.get("user")?JSON.parse(Cookies.get("user")!):undefined

const initialState: AuthState = {
  isLoggedIn: Boolean(user),
  currentUser: user,
};

// const accessToken = Cookies.get("accessToken")?JSON.parse(Cookies.get("accessToken")!):null

export const userSlice = createSlice({
  name: 'user',
  // initialState: accessToken ? user : {
  //   id:"",
  //   username:"",
  //   picture:"",
  //   first_name:"",
  //   last_name:"",
  //   token:"",
  //   verified:false
  // }, 
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.currentUser = action.payload;
      },
        logout: (state) => {
          Cookies.remove("accessToken")
          Cookies.remove("user")
          state.isLoggedIn=false;
          state.currentUser=undefined
            // return {    id: "",
            // username: "",
            // picture: "",
            // first_name: "",
            // last_name: "",
            // token: "",
            // verified: false}
          },
          verify: (state,action: PayloadAction<boolean>) => {
            return {...state,verified:action.payload}
          },
  },

});

export const { login, logout } = userSlice.actions;


export default userSlice.reducer;
