/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import useStore from "../app/ZustandStore";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [auth, setAuth] = useState("signin");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const { signup, signin } = useAuth();
  const { loading, error, setError } = useStore();
  //toggle auth to change between signin and signup
  const toggleAuth = () => {
    if (auth === "signin") {
      setAuth("signup");
    } else {
      setAuth("signin");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //validation for signup and signin inputs
    if (!password.length || !email.length) {
      setInvalid(true);
    }
    setInvalid(false);
    setEmail("");
    setPassword("");
    setError("");
    if (auth === "signup") {
      signup(email, password);
    } else {
      signin(email, password);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          Amazon
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {auth === "signup" ? "signup" : "signin"}
            </h1>
            {error && <div className="text-red-500">{error}</div>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    invalid ? "border-red-500" : null
                  }`}
                  placeholder="name@company.com"
                  required=""
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                    invalid ? "border-red-500" : null
                  }`}
                  required=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                {loading
                  ? "Loading..."
                  : auth === "signup"
                  ? "create an account"
                  : "log in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {auth === "signup"
                  ? "Already have an account?"
                  : "no account yet"}
                {auth === "signup" ? (
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    onClick={toggleAuth}
                  >
                    sign in
                  </a>
                ) : (
                  <a
                    href="#"
                    onClick={toggleAuth}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    sign up now
                  </a>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
