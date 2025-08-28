import React, { useState } from "react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginData.username || !loginData.password) {
      alert("Please fill all fields");
      return;
    }
    console.log("Logging in:", loginData);
    alert("Login successful (mock)");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupData.fullName || !signupData.email || !signupData.password) {
      alert("Please fill all fields");
      return;
    }
    console.log("Signing up:", signupData);
    alert("Signup successful (mock)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(circle_at_center,_#10b981_20%,_#0ea5e9_70%)] px-4">
      <div className="relative w-[800px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden flex">
        {/* Login Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-6 text-black">Login</h1>
          <form onSubmit={handleLoginSubmit} className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Username</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                placeholder="Enter your username"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded transition duration-200"
            >
              Login
            </button>
          </form>
        </div>

        {/* Signup Form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-6 text-black">Sign Up</h1>
          <form onSubmit={handleSignupSubmit} className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                value={signupData.fullName}
                onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* Slider Panel on top */}
        <div
          className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-br from-emerald-500 to-sky-500 text-white flex flex-col items-center justify-center p-8 transition-transform duration-700 ease-in-out ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-bold mb-2">
            {isLogin ? "New here?" : "Welcome back!"}
          </h2>
          <p className="text-center mb-4">
            {isLogin
              ? "Create an account to start tracking your stocks."
              : "Login to see your portfolio."}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="bg-white text-emerald-600 font-semibold px-4 py-2 rounded shadow hover:bg-gray-100 transition duration-200"
          >
            {isLogin ? "Go to Login" : "Go to Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
