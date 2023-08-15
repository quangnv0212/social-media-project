import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { Outlet } from "react-router-dom";
import { Login } from "../../pages/Login";

export interface ILoggedInRoutesProps {}

export function LoggedInRoutes(props: ILoggedInRoutesProps) {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  return isLoggedIn ? <Outlet /> : <Login />;
}
