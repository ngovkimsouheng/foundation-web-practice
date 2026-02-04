import { useState } from "react";

function NativeForm() {
  // Store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Store error messages
  const [errors, setErrors] = useState({ email: "", password: "" });

  // Validate inputs and return an object of errors
  const validate = () => {
    const newErrors = { email: "", password: "" };

    // Check email empty
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    // Check email format
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    // Check password empty
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }
    // Check password length
    else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    return newErrors;
  };

  // Run when user submits the form
  const handleSubmit = (e) => {
    e.preventDefault(); // stop refresh

    const newErrors = validate(); // get validation result
    setErrors(newErrors); // show errors in UI

    // Check if there is any error message
    const hasError = Object.values(newErrors).some((msg) => msg !== "");
    if (hasError) return; // stop submit if invalid

    // If valid -> success
    console.log(`Email: ${email}, Password: ${password}`);
  };

  // Clear email error when user types
  const handleEmailChange = (e) => {
    setEmail(e.target.value); // update email
    setErrors((prev) => ({ ...prev, email: "" })); // clear email error
  };

  // Clear password error when user types
  const handlePasswordChange = (e) => {
    setPassword(e.target.value); // update password
    setErrors((prev) => ({ ...prev, password: "" })); // clear password error
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-7xl mx-auto    p-6 bg-white rounded-xl shadow-lg"
    >
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        Login
      </h2>

      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`w-full px-3 py-2 rounded-lg border outline-none transition
          ${
            errors.email
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:ring-2 focus:ring-blue-300"
          }`}
          placeholder="example@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={`w-full px-3 py-2 rounded-lg border outline-none transition
          ${
            errors.password
              ? "border-red-500 focus:ring-2 focus:ring-red-300"
              : "border-gray-300 focus:ring-2 focus:ring-blue-300"
          }`}
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="mt-1 text-sm text-red-500">{errors.password}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold
                 hover:bg-blue-700 active:scale-[0.98] transition"
      >
        Login
      </button>
    </form>
  );
}

export default NativeForm;
