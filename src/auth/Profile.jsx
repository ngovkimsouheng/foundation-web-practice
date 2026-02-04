import React, { useState, useEffect } from "react";
import UpdateData from "../pages/utils/UpdateData";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", avatar: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;
    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => {
        setProfile(data);
        setForm({ name: data.name, email: data.email, avatar: data.avatar });
      });
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async e => {
    e.preventDefault();
    setError("");
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`https://api.escuelajs.co/api/v1/users/${profile.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Update failed");
      const data = await res.json();
      setProfile(data);
      setEdit(false);
    } catch (err) {
      setError(err.message);
    }
  };

  if (!profile) return <div className="text-center">Please login to view your profile.</div>;

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
      <img src={profile.avatar} alt="avatar" className="w-24 h-24 rounded-full mx-auto mb-4" />
      {edit ? (
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Avatar URL</label>
            <input name="avatar" value={form.avatar} onChange={handleChange} className="w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <button className="w-full rounded bg-yellow-600 py-2 text-white font-medium hover:bg-yellow-700">Update</button>
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      ) : (
        <div className="space-y-2">
          <div><strong>Name:</strong> {profile.name}</div>
          <div><strong>Email:</strong> {profile.email}</div>
          <div><strong>Avatar:</strong> <img src={profile.avatar} alt="avatar" className="w-12 h-12 inline-block rounded-full" /></div>
          <button onClick={() => setEdit(true)} className="w-full rounded bg-blue-600 py-2 text-white font-medium hover:bg-blue-700 mt-4">Edit Profile</button>
        </div>
      )}
    </div>
  );
}
