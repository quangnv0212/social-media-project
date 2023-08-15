import * as React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/Input";
import Button from "../components/Button";
import { Schema, loginSchema } from "../utils/rules";

export interface ILoginFormProps {}

export function Register(props: ILoginFormProps) {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
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
              name="firstname"
              register={register}
              className="mt-8 rounded-lg"
              placeholder="First name"
              errorMessage={errors.firstname?.message}
            />
            <Input
              name="lastname"
              register={register}
              className="mt-8 rounded-lg"
              placeholder="Last name"
              errorMessage={errors.lastname?.message}
            />
            <Input
              name="email"
              register={register}
              className="mt-8 rounded-lg"
              placeholder="Email"
              errorMessage={errors.email?.message}
            />
            <Input
              name="password"
              register={register}
              type="password"
              className="mt-8 rounded-lg"
              placeholder="Password"
              errorMessage={errors.password?.message}
            />
            <Button
              type="submit"
              className="flex rounded-xl font-bold w-full items-center justify-center bg-blue-500 py-4 px-2 text-sm uppercase text-white hover:bg-blue-600"
            >
              Sign Up
            </Button>
            <p className="text-xs block py-2 text-gray-400">
              By clicking Sign Up, you agree to our Terms, Data Policy and
              Cookie Policy. You may receive SMS notifications from us and can
              opt out at any time.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
