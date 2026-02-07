import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setProfile(data));
    }
  }, []);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters");
      return;
    }
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      localStorage.setItem("token", data.access_token);
      setIsLoggedIn(true);
      // Fetch profile after login
      fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: { Authorization: `Bearer ${data.access_token}` },
      })
        .then((res) => res.json())
        .then((data) => setProfile(data));
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setProfile(null);
    setEmail("");
    setPassword("");
    navigate("/login");
  };

  return (
    <div className="max-w-7xl my-30 mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-end mb-4">
    
        <Link
          to="/register"
          className="px-4  py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700"
        >
          Register
        </Link>
        {isLoggedIn && (
          <Link
            to="/profile"
            className="px-4 py-2 rounded bg-yellow-600 text-white font-medium hover:bg-yellow-700"
          >
            Profile
          </Link>
        )}
      </div>
      {!isLoggedIn ? (
        <>
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border border-gray-300 px-3 py-2"
                required
              />
            </div>
            <button className="w-full rounded bg-blue-600 py-2 text-white font-medium hover:bg-blue-700">
              Login
            </button>
            {error && <p className="text-red-600 text-center">{error}</p>}
          </form>
        </>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-6">
            Welcome, {profile?.name || "User"}
          </h2>
          <img
            src={profile?.avatar}
            alt="avatar"
            className="w-24 h-24 rounded-full mx-auto mb-4"
          />
          <div>
            <strong>Email:</strong> {profile?.email}
          </div>
          <button
            onClick={handleLogout}
            className="w-full rounded bg-red-600 py-2 text-white font-medium hover:bg-red-700 mt-4"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
