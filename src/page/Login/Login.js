import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../UserContext/UserContext";
import "./style.css";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const logInHandle = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="bg-slate-100 rounded-xl boxColor">
        <div className="w-96 p-7">
          <h3 className="text-xl text-center">Login</h3>
          <form className="" onSubmit={handleSubmit(logInHandle)}>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                className="input input-bordered w-full "
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                className="input input-bordered w-full "
                {...register("password")}
              />
              <label className="label">
                <span className="label-text">Forget Password</span>
              </label>
            </div>

            <input
              className="btn btn-accent w-full text-white mt-5"
              type="submit"
            />
            <div>
              {loginError && <p className="text-red-600">{loginError}</p>}
            </div>
          </form>
          <p className="mt-5">
            New to Doctors Portal{" "}
            <Link className="text-secondary" to={"/singup"}>
              Creat new Account
            </Link>
          </p>
          <div className="divider"></div>
          <button className="btn btn-outline w-full">
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
