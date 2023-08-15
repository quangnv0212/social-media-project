import * as React from "react";
import { useAppSelector } from "../../app/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { Login } from "../../pages/Login";

export interface ILoggedInRoutesProps {}

export function NotLoggedInRoutes(props: ILoggedInRoutesProps) {
  const { isLoggedIn } = useAppSelector((state) => state.user);

  return isLoggedIn ? <Navigate to="/" /> : <Outlet />;
}
