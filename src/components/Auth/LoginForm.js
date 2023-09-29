"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      setError("Error during signIn: ", error);
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
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      id="password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <div style={{ color: "red", marginTop: "8px" }}>{error}</div>

                  <Link href="#" className="forgot-password">
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
