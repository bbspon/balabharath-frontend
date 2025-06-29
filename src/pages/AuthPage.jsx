import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import axios from "axios"; // ⬅️ Add this at the top
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!isLogin) {
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match";
      if (!formData.termsAccepted)
        newErrors.termsAccepted = "You must accept terms";
    } else {
      if (!formData.email.trim()) newErrors.email = "Email or phone required";
      if (!formData.password) newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);

    try {
      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/signup";

      const payload = isLogin
        ? { email: formData.email, password: formData.password }
        : {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
          };

      const response = await axios.post(url, payload);

      if (isLogin) {
        // store token and show success
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        navigate("/"); // ✅ redirect to dashboard
      } else {
        alert("Signup successful! Please log in.");
        setIsLogin(true);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        termsAccepted: false,
      });
    } catch (error) {
      const msg =
        error.response?.data?.message || "Something went wrong. Try again.";
      alert(`❌ ${msg}`);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div
      style={{
        maxWidth: 450,
        margin: "50px auto",
        padding: 30,
        fontFamily: "Arial",
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        backgroundColor: "#5e4c4b",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 20,
          fontFamily: "Georgia",
          color: "#fb641b",
        }}
      >
        Welcome to BBS
      </h2>

      <div style={{ display: "flex", marginBottom: 20 }}>
        <button
          onClick={() => setIsLogin(true)}
          style={{
            flex: 1,
            background: isLogin ? "#9e9c93" : "#eee",
            border: "none",
            padding: 10,
          }}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          style={{
            flex: 1,
            background: !isLogin ? "#9e9c93" : "#eee",
            border: "none",
            padding: 10,
          }}
        >
          Signup
        </button>
      </div>

      {isLogin ? (
        <LoginForm
          {...{
            formData,
            handleChange,
            handleSubmit,
            showPassword,
            setShowPassword,
            errors,
            submitting,
          }}
        />
      ) : (
        <SignupForm
          {...{
            formData,
            handleChange,
            handleSubmit,
            showPassword,
            setShowPassword,
            errors,
            submitting,
          }}
        />
      )}

      <div className="text-center text-white mt-3">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <button
              className="btn btn-link p-0 text-warning"
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              className="btn btn-link p-0 text-warning"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
