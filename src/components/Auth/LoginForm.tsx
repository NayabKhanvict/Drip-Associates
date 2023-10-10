"use client";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCookie("logged", "true");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid Credentials");
        return;
      }
      router.push("/");
    } catch (error) {
      setError(`Error during Sign in: ${error}`);
    }
  };
  return (
    <>
      <div className="login-area ptb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="login-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> Login
                  </h2>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your name"
                      id="name"
                      name="name"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <div style={{ display: "flex" }}>
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        placeholder="Enter your password"
                        id="password"
                        name="password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        onClick={togglePasswordVisibility}
                        style={{ border: "none", outline: "none" }}
                        type="button"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <div style={{ color: "red" }}>{error}</div>
                  <Link href="/forgot-password" className="forgot-password">
                    Lost your password?
                  </Link>
                </form>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="new-customer-content">
                <div className="section-title">
                  <h2>
                    <span className="dot"></span> New Customer
                  </h2>
                </div>

                <span>Create a Account</span>
                <p>
                  Sign up for a free account at our store. Registration is quick
                  and easy. It allows you to be able to order from our shop. To
                  start shopping click register.
                </p>
                <Link href="/signup" className="btn btn-light">
                  Create A Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
