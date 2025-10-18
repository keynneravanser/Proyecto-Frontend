import React, { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Logueo = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      
    >
      <div
        className="position-relative bg-white rounded-4 shadow-lg overflow-hidden"
        style={{ width: "900px", maxWidth: "100%", minHeight: "480px" }}
      >
        {/* --- Contenedor Sign In / Sign Up --- */}
        <div className="d-flex h-100">

          {/* --- Sign In --- */}
          <div
            className={`d-flex flex-column align-items-center justify-content-end pt-5 text-center w-50  transition-all ${
              isSignUp ? "opacity-0" : "opacity-100"
            }`}
            style={{
              transition: "opacity 0.6s ease",
              pointerEvents: isSignUp ? "none" : "auto",
            }}
          >
            <h1 className="fw-bold mb-3">Sign In</h1>
            <div className="d-flex gap-3 justify-content-center mb-3">
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaGooglePlusG />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaGithub />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="small mb-2 d-block">or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-2 text-center mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-2 text-center mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <a
              href="#"
              className="small text-primary mb-3 d-block text-decoration-none"
            >
              Forgot your password?
            </a>
            <button className="btn btn-primary rounded-pill px-4">Sign In</button>
          </div>

          {/* --- Sign Up --- */}
          <div
            className={`d-flex flex-column align-items-center pt-5 justify-content-center text-center w-50 transition-all ${
              isSignUp ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transition: "opacity 0.6s ease",
              pointerEvents: isSignUp ? "auto" : "none",
            }}
          >
            <h1 className="fw-bold mb-3">Create Account</h1>
            <div className="d-flex gap-3 justify-content-center mb-3">
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaGooglePlusG />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaGithub />
              </a>
              <a href="#" className="btn btn-outline-primary rounded-circle p-2">
                <FaLinkedinIn />
              </a>
            </div>
            <span className="small mb-2 d-block">or use your email for registration</span>
            <input
              type="text"
              placeholder="Name"
              className="form-control mb-2 text-center mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <input
              type="email"
              placeholder="Email"
              className="form-control mb-2 text-center mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3 text-center mx-auto"
              style={{ maxWidth: "250px" }}
            />
            <button className="btn btn-primary rounded-pill px-4">Sign Up</button>
          </div>
        </div>

        {/* --- Overlay --- */}
        <div
          className="position-absolute top-0 h-100 w-50 text-white d-flex flex-column align-items-center justify-content-center transition-all"
          style={{
            background: "linear-gradient(to right, #6366f1, #4f46e5)",
            right: isSignUp ? "50%" : "0",
            borderTopLeftRadius: "0",
            borderBottomLeftRadius: "0",
            transition: "all 0.6s ease",
          }}
        >
          {isSignUp ? (
            <>
              <h1 className="fw-bold mb-3">Welcome Back!</h1>
              <p className="small mb-4">
                To keep connected with us please login with your personal info
              </p>
              <button
                onClick={() => setIsSignUp(false)}
                className="btn btn-outline-light rounded-pill px-4"
              >
                Sign In
              </button>
            </>
          ) : (
            <>
              <h1 className="fw-bold mb-3">Hello, Friend!</h1>
              <p className="small mb-4">
                Enter your personal details and start your journey with us
              </p>
              <button
                onClick={() => setIsSignUp(true)}
                className="btn btn-outline-light rounded-pill px-4"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logueo;
