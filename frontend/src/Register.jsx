import { useState } from "react";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      alert(res.data.message);
    } catch (error) {
      alert(error?.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="auth-card">
      <div className="auth-header">
        <span className="auth-badge">Expense Tracker</span>
        <h2 className="form-title">Create your account</h2>
        <p className="form-subtitle">
          Sign up to start tracking your expenses, budgets, and savings with clarity and speed.
        </p>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <label className="form-field">
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="John Doe"
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-field">
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="you@example.com"
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-field">
          <span>Phone</span>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="123-456-7890"
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <label className="form-field">
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Create a strong password"
            onChange={handleChange}
            className="form-input"
          />
        </label>

        <button type="submit" className="submit-btn">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;