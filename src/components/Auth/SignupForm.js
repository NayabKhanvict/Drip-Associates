"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password) {
      setError("All Field are necessary");
      return;
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        setError("User registration failed.");
      }
    } catch (error) {
      setError("Error during registration: ", error);
    }
  };

  return (
    <>
      <div className="signup-area ptb-60">
        <div className="container">
          <div className="signup-content">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Create an Account
              </h2>
            </div>

            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="fname"
                  name="fname"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  id="lname"
                  name="lname"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>

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
                Signup
              </button>
              <div style={{ color: "red", marginTop: "8px" }}>{Error}</div>

              <Link href="/" className="return-store">
                or Return to Store
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
