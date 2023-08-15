import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";
import Button from "../components/Button";
import { Schema, loginSchema } from "../utils/rules";
import http from "../utils/http";
import { login } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export interface ILoginFormProps {}
type FormData = Pick<Schema, "email" | "password">;
const schema = loginSchema.pick(["email", "password"]);
export function Login(props: ILoginFormProps) {
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const res = await http.post("login", data);
      dispatch(login(res.data));
      setLoading(false);
      Cookies.set("user", JSON.stringify(res.data));
      Cookies.set("acessToken", JSON.stringify(res.data.token));
    } catch (error) {
      toast.error("Something went wrong, please try again");
      setLoading(false);
    }
  });
  return (
    <div className="lg:flex max-w-5xl min-h-screen mx-auto p-6 py-10">
      <div className="flex flex-col items-center lg: lg:flex-row lg:space-x-10">
        <div className="lg:mb-12 flex-1 lg:text-left text-center">
          <p className="font-medium lg:mx-0 md:text-2xl mt-6 mx-auto sm:w-3/4 text-xl">
            {" "}
            Connect with friends and the world around you on Socialite.
          </p>
        </div>
        <div className="lg:mt-0 lg:w-96 md:w-1/2 sm:w-2/3 mt-10 w-full">
          <form
            noValidate
            onSubmit={onSubmit}
            className="p-6 space-y-4 relative bg-white shadow-lg rounded-lg"
          >
            <Input
              name="email"
              register={register}
              type="email"
              className="mt-8"
              placeholder="Email"
              errorMessage={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              type="password"
              className="mt-8"
              placeholder="Password"
              errorMessage={errors.password?.message}
            />
            <Button
              isLoading={loading}
              type="submit"
              className="flex rounded-xl font-bold w-full items-center justify-center bg-blue-500 py-4 px-2 text-sm uppercase text-white hover:bg-blue-600"
            >
              Login
            </Button>
            <p className="text-blue-500 text-center block py-2">
              Forgot Password?
            </p>
            <div className="flex justify-center">
              <Button
                type="submit"
                className="flex rounded-xl font-bold px-5 items-center justify-center bg-green-600 py-4 text-sm uppercase text-white hover:bg-red-600"
              >
                Create New Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
