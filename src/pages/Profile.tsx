import * as React from "react";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/userSlice";

export interface IProfileProps {}

export function Profile(props: IProfileProps) {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log out
      </button>
    </div>
  );
}
